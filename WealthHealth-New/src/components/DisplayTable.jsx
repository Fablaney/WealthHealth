// import react
import { useState, useMemo } from "react"
import { sortRows } from "./helpers/helpers"
import { filterRows } from "./helpers/helpers"
import { paginateRows } from "./helpers/helpers"
import { Pagination } from "./helpers/pagination"

function DisplayTable( { columns, rows } )
{
    const [activePage, setActivePage] = useState(1)

    const [filters, setFilters] = useState({})
    
    console.log("filters")
    console.log(filters)

    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
   
    const [rowsPerPage, setRowsPerPage] = useState(10) 
  
    // origine marche
    // lignes + filtres
    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])

    // lignes + filtres => sort asc / desc
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])

    // const filteredRows = filterRows(rows, filters)

    // const sortedRows = sortRows(filteredRows, sort)

    // lignes + filtre + sort => paginées
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)
  
    const count = filteredRows.length

    const totalPages = Math.ceil(count / rowsPerPage)


    const handleGlobalSearch= (value) => {
        setActivePage(1)

        let [title] = ""

        columns.map(item => {

            console.log(item.title)

            title = item.title
setFilters((prevFilters) => ({
                ...prevFilters,
                
                [title]: value,
            }))
        })

        if (value)
        {
            console.log('cas 1')

            

            setFilters((prevFilters) => ({
                ...prevFilters,
                
                [title]: value,
            }))
        }
        else
        {
            console.log('cas 2')
            setFilters((prevFilters) => {

                const updatedFilters = { ...prevFilters }

                delete updatedFilters[title]
           
                return updatedFilters

            })
        }
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

        // console.log(document.querySelectorAll("input").setAttribute('value', ""))
        // document.querySelectorAll("input").setAttribute('value', "")
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