// import react
import { useState, useMemo} from "react"
import { sortRows } from "./helpers/helpers"
import { filterRows } from "./helpers/helpers"
import { paginateRows } from "./helpers/helpers"
import { Pagination } from "./helpers/pagination"
import { searchRows } from "./helpers/helpers"

function DisplayTable( { columns, rows, lines } )
{
    const allrows = rows

    // set default lines per pages at 10, 25, 50 100
    let linesPerPage = []
    
    if(lines != undefined)
    {
        linesPerPage = lines
    }
    else
    {
        linesPerPage = [10, 25, 50, 100]
    }

    // ok
    const [activePage, setActivePage] = useState(1)

    // ok
    const [globalSearch, setGlobalSearch] = useState("")

    // ok
    const [filters, setFilters] = useState({})

    // ok
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })

    // ok
    const [rowsPerPage, setRowsPerPage] = useState(10) 

    // ok
    const globalSearchRows = useMemo(() => searchRows(rows, columns, globalSearch), [rows, columns, globalSearch])

    // origine marche
    // lignes + filtres
    const filteredRows = useMemo(() => filterRows(globalSearchRows, filters), [globalSearchRows, filters])

    // lignes + filtres => sort asc / desc
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])

    // lignes + filtre + sort => paginées
    const calculatedRows = rows = paginateRows(sortedRows, activePage, rowsPerPage)
  
    const count = filteredRows.length

    const totalPages = Math.ceil(count / rowsPerPage)

    // recherche globale
    function handleGlobalSearch(value)
    {
        setActivePage(1)

        if (value)
        {
            setGlobalSearch(value)
        }
        else
        {
            setGlobalSearch("")
        }
    }

    // recherche par mot dans chaque colonne
    function handleSearch(value, title)
    {
        setActivePage(1)

        if (value)
        {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [title]: value,
            }))
        }
        else
        {
            setFilters((prevFilters) => {

                const updatedFilters = { ...prevFilters }

                delete updatedFilters[title]
           
                return updatedFilters
            })
        }
    }

    // tri par titre de colonne
    function handleSort(title)
    {
        setActivePage(1)
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === title ? 'desc' : 'asc',
            orderBy: title,
        }))
    }

    // reset tous les filtres
    function clearAll()
    {
        setActivePage(1)
        setSort({ order: 'asc', orderBy: 'id' })
        setFilters({})
        setRowsPerPage(10)
        setGlobalSearch("")
        // je vide la valeur des inputs
        document.querySelectorAll("input").forEach(input => {
            input.value = ""
        })

        rows = allrows 
    }

    // affiche XX lignes par page
    function handleEntries(numberEntries)
    {
        let entries = numberEntries
        clearAll()
        setRowsPerPage(entries)
    }

    return (
        <>
        <div className='show-search'>
            
            {/* show number */}
            <div className='show'>
                Show
                &nbsp;
                <select id="select-entries" name="entries-number" onChange={(event) => handleEntries(event.target.value)}>
                    {
                        linesPerPage.map((line, index) => {
                            return <option key={index}>{line}</option>
                        })
                    }
                </select>
                &nbsp;
                Entries
            </div>

            {/* recherche globale */}
            <div>
                <input type="search" id="input-search" placeholder="Search ..." onChange={(event) => handleGlobalSearch(event.target.value)}/>
            </div>

        </div>

        <table className="table">
            <thead>

                <tr>
                    {columns.map((column) => {
                        const sortIcon = () => {

                            if (column.title === sort.orderBy)
                            {
                                if (sort.order === 'asc')
                                {
                                    return <i className="fa-solid fa-caret-up"></i>
                                }
                                else
                                {
                                    return <i className="fa-solid fa-caret-down"></i>
                                }
                            }
                            else
                            {
                                return <i className="fa-solid fa-sort"></i>
                            }
                        }

                        return (
                            <th key={column.title}  onClick={() => handleSort(column.title)}>

                                <span>{column.label}</span>
                                &nbsp;
                                <button >{sortIcon()}</button>

                            </th>
                        )
                    })}
                </tr>

                <tr>
                    {columns.map((column, index) => {
                        return (
                        <th  key={index}>
                            <input
                                key={`${column.title}-search`}
                                type="search"
                                placeholder={`${column.title}`}
                                value={filters[column.title]}
                                onChange={(event) => handleSearch(event.target.value, column.title)}
                            />
                        </th>
                        )
                    })}
                </tr>

            </thead>

            <tbody>
                {calculatedRows.map((row, index) => {
                    return (
                        <tr key={row.id} >
                            {columns.map((column) => {
                                if (column.format)
                                {
                                    return <td key={column.title}>{column.format(row[column.title])}</td>
                                }
                                else
                                {
                                    return <td key={column.title}>{row[column.title]}</td>
                                }
                            })}
                        </tr>
                        )
                    })
                }
            </tbody>

        </table>

        {/* pagination */}
        {count > 0 ?
            (
            <Pagination
                activePage={activePage}
                count={count}
                rowsPerPage={rowsPerPage}
                totalPages={totalPages}
                setActivePage={setActivePage}
            />
            )
            :
            (
                <p>No data found</p>
            )
        }

        <div>

            <p>
                <button onClick={clearAll}>Clear all</button>
            </p>
            
        </div>

        </>
    )
}
export default DisplayTable