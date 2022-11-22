/* eslint-disable eqeqeq */

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
  
    return value.match(/^\d{2}-\d{2}-\d{4}$/)
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


export function sortTable(n)
{
    console.log(n)

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0

    table = document.getElementsByClassName("table")

    console.log(table)

    switching = true

    //Set the sorting direction to ascending:
    dir = "asc"

    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching)
    {
        //start by saying: no switching is done:
        switching = false

        rows = table.rows

        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++)
        {
            //start by saying there should be no switching:
            shouldSwitch = false

            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n]

            y = rows[i + 1].getElementsByTagName("TD")[n]

            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc")
            {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true

                    break
                }
            }
            else if (dir == "desc")
            {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
                {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true

                    break
                }
            }
        }
        if (shouldSwitch)
        {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])

            switching = true

            //Each time a switch is done, increase this count by 1:
            switchcount ++
        }
        else
        {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc")
            {
                dir = "desc"

                switching = true
            }
        }
    }
}


export function sortRows(rows, sort)
{
    // console.log(sort)
    // console.log(typeof(sort.orderBy))

    // if(sort.orderBy === "id")
    // {
    //     rows.sort(
    //         (a, b) => 
    //         parseFloat(a.id)
    //         - 
    //         parseFloat(b.id)
    //     )

    //     return rows
    // }
    // else
    // {
        return rows
    // }
    

    // return rows
    // // code origine
    // return rows.sort((a, b) => {
    //     const { order, orderBy } = sort
    
    //     if (isNil(a[orderBy])) return 1
        
    //     if (isNil(b[orderBy])) return -1
    
    //     const aLocale = convertType(a[orderBy])

    //     const bLocale = convertType(b[orderBy])

    //     if (order === 'asc')
    //     {
    //         return aLocale.localeCompare(bLocale, 'en', { numeric: isNumber(b[orderBy]) })
    //     }
    //     else
    //     {
    //         return bLocale.localeCompare(aLocale, 'en', { numeric: isNumber(a[orderBy]) })
    //     }
    // })
}
  
export function paginateRows(sortedRows, activePage, rowsPerPage)
{
    return [...sortedRows].slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)
}