export function isEmpty(obj = {})
{
    return Object.keys(obj).length === 0
}

export function isString(value)
{
    return typeof value === 'string' || value instanceof String
}

export function isNumber(value)
{
    return typeof value == 'number' && !isNaN(value)
}

export function isBoolean(value)
{
    return value === true || value === false
}

export function isNil(value)
{
    return typeof value === 'undefined' || value === null
}

export function isDateString(value)
{
    if (!isString(value)) return false

    return value.match(/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g)
}

export function convertDateString(value)
{
    return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2)
}

export function toLower(value)
{
    if (isString(value))
    {
        return value.toLowerCase()
    }
    if (isNumber(value))
    {
        return value.toString().toLowerCase()
    }
    return value
}

export function convertType(value)
{
    if (isNumber(value))
    {
        return value.toString()
    }

    if (isDateString(value))
    {
        return convertDateString(value)
    }

    if (isBoolean(value))
    {
        return value ? '1' : '-1'
    }

    return value
}

// recherche globale
export function searchRows(rows, columns, search)
{
    rows = rows.filter(row => {
        for(let i = 0; i < columns.length; i++)
        {
            if(toLower(row[columns[i].title]).includes(toLower(search)))
            {
                return row
            }
        }
    })

    return rows 
}

// filtre par colonne
export function filterRows(rows, filters)
{
    if (isEmpty(filters)) return rows

    return rows.filter((row) => {
        return Object.keys(filters).every((title) => {

            const value = row[title]
            const searchValue = filters[title]

            if (isString(value))
            {
                return toLower(value).includes(toLower(searchValue))
            }

            if (isBoolean(value))
            {
                return (searchValue === 'true' && value) || (searchValue === 'false' && !value)
            }

            if (isNumber(value))
            {
                return value == searchValue
            }

            return false
        })
    })
}

// sort asc /desc
export function sortRows(rows, sort)
{
    rows = [...rows].sort((a, b) => {
        const { order, orderBy } = sort
    
        if (isNil(a[orderBy])) return 1
        
        if (isNil(b[orderBy])) return -1
    
        const aLocale = convertType(a[orderBy])

        const bLocale = convertType(b[orderBy])

        if (order === 'asc')
        {
            return aLocale.localeCompare(bLocale, 'fr', { numeric: isNumber(b[orderBy]) })
        }
        else
        {
            return bLocale.localeCompare(aLocale, 'fr', { numeric: isNumber(a[orderBy]) })
        }
    })

    return rows
}

// pagination
export function paginateRows(sortedRows, activePage, rowsPerPage)
{
    return [...sortedRows].slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)
}