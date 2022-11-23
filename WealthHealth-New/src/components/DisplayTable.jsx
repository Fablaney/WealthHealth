// import react
import { useState, useMemo } from "react"
import { sortRows } from "./helpers/helpers"
import { filterRows } from "./helpers/helpers"
import { paginateRows } from "./helpers/helpers"
import { sortTable } from "./helpers/helpers"
import globalSearch from "./helpers/globalsearch"
import { Pagination } from "./helpers/pagination"

function DisplayTable( { 
    columns,
    rows
 } )
{
    // console.log("columns")
    // console.log(columns)
    // console.log("j'arrive dans le composant et j'affiche rows")
    // console.log(rows)

    // const rows = [
    //     {
    //         FirstName: 'Julie',
    //         LastName: 'Perarnau',
    //         BirthDate: '07/08/1989',
    //         StartDate: '01/09/1992',
    //         Street: '7 Route de Dammartin',
    //         City: 'Eugene',
    //         State: 'OR',
    //         Zipcode: '0123',
    //         Department: 'Marketing'
    //     },
    //     {
    //         FirstName: 'Claire',
    //         LastName: 'Bertrand',
    //         BirthDate: '07/08/1959',
    //         StartDate: '01/09/2020',
    //         Street: 'A Great Road',
    //         City: 'El Paso',
    //         State: 'TX',
    //         Zipcode: '9876',
    //         Department: 'Sales'
    //     },
    // ]

    

    const [filters, setFilters] = useState({})

    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
   

    // const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])

    // const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])

    const filteredRows = filterRows(rows, filters)

    const sortedRows = sortRows(filteredRows, sort)

    // const sortedRows = rows

    // pagination
    const [activePage, setActivePage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    // compteur de pages
    const count = filteredRows.length
    const totalPages = Math.ceil(count / rowsPerPage)

    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)



    // recherche globale
    const handleGlobalSearch = (param) => {
        globalSearch(param)
    }


    // recherche par mot dans chaque colonne
    const handleSearch = (value, title) => {
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
    const handleSort = (title) => {
        setActivePage(1)
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === title ? 'desc' : 'asc',
            orderBy: title,
        }))
    }

    // reset tous les filtres
    const clearAll = () => {
        setSort({ order: 'asc', orderBy: 'id' })
        setActivePage(1)
        setFilters({})
        setRowsPerPage(10)
    }

    // affiche XX lignes par page
    const handleEntries = (numberEntries) => {
        // console.log(numberEntries)
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
                <select name="entries-number" onChange={(event) => handleEntries(event.target.value)}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
            
            <div className="search">
                <input type="text" id="myInput" onChange={(event) => handleGlobalSearch(event.target.value)} placeholder="Global Search ..."/>
            </div>

        </div>

        <table className="table">
            <thead>

                <tr>
                    {columns.map((column) => {
                        const sortIcon = () => {

                            // if (column.title === sort.orderBy)
                            // {
                            //     if (sort.order === 'asc')
                            //     {
                            //         return <i className="fa-solid fa-caret-up"></i>
                            //     }
                            //     else
                            //     {
                            //         return <i className="fa-solid fa-caret-down"></i>
                            //     }
                            // }
                            // else
                            // {
                                return <i className="fa-solid fa-sort"></i>
                            // }
                        }

                        return (
                            <th key={column.title}>

                                <span>{column.label}</span>
                                &nbsp;
                                <button onClick={() => handleSort(column.title)}>
                                    {sortIcon()}
                                    {/* {column.label} */}
                                </button>

                            </th>
                        )

                    })}
                </tr>

                <tr>
                    {columns.map((column) => {
                        return (
                        <th>
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
                {
                    rows.map((row, index) => {
                        return (
                            <tr key={index} className="tr"> 
                                <td>{row.FirstName}</td>
                                <td>{row.LastName}</td>
                                <td>{row.BirthDate}</td>
                                <td>{row.StartDate}</td>
                                <td>{row.Street}</td>
                                <td>{row.City}</td>
                                <td>{row.State}</td>
                                <td>{row.Zipcode}</td>
                                <td>{row.Department}</td>
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