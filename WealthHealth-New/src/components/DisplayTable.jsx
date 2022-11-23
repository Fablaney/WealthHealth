// import react
import { useState, useMemo } from "react"
import { sortRows } from "./helpers/helpers"
import { filterRows } from "./helpers/helpers"
import { paginateRows } from "./helpers/helpers"
import { Pagination } from "./helpers/pagination"

function DisplayTable( { columns, rows } )
{
    const [filters, setFilters] = useState({})

    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })

    // Filtrage par colonne OK
    // const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
    const filteredRows = filterRows(rows, filters)
    const count = filteredRows.length


    // ----------------------------------------------------------------------------------------
    // const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
    // lignes filtrées
    const sortedRows = sortRows(filteredRows, sort)
    console.log(sortedRows)
    // ----------------------------------------------------------------------------------------


    // pagination OK
    const [activePage, setActivePage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10) 
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

    const totalPages = Math.ceil(count / rowsPerPage)

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

    // affiche XX lignes par page
    const handleEntries = (numberEntries) => {
        clearAll()
        setRowsPerPage(numberEntries)
    }

    // reset tous les filtres
    const clearAll = () => {
        setSort({ order: 'asc', orderBy: 'id' })
        setActivePage(1)
        setFilters({})
        setRowsPerPage(10)
    }

    return (
        <>
        <div className='show-search'>

            {/* ligne par page */}
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

            {/* recherche globale */}
            <div>
                <input type="search" id="input-search" placeholder="Search ..."/>
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
                            <th key={column.title}>

                                <span>{column.label}</span>
                                &nbsp;
                                <button onClick={() => handleSort(column.title)}>{sortIcon()}</button>

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
                {calculatedRows.map((row, index) => {
                    return (
                        <tr key={row.id} >
                            {/* <tr key={index} > */}
                            {columns.map((column) => {
                                // console.log("column")
                                // console.log(column)
                                // console.log("column.format")
                                // console.log(column.format)
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