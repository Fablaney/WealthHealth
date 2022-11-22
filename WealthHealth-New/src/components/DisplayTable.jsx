import { useMemo } from 'react'
import { useTable } from "react-table"
import { useGlobalFilter, useSortBy, usePagination } from "react-table"

function DisplayTable({colonnes, lignes})
{
    console.log("j'entre dans react table")
    // console.log(colonnes)
    // console.log(lignes)
    const columns = useMemo(() => colonnes, [])

    const data = useMemo(() => lignes, [])

    // const FilterForm = ({ column }) => {
    //     const { filterValue, setFilter } = column;
    //     return (
    //         <span>
    //             <input
    //                 value={filterValue || ''}
    //                 onChange={(e) => setFilter(e.target.value)}
    //             />
    //         </span>
    //     );
    // };
    
    // colonnes.forEach(element => {
    //     const filtre = { Filter: FilterForm}
    //     Object.assign(element, filtre);
    // })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        // recherche globale
        setGlobalFilter,
        state,

        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )

    const { globalFilter } = state

    return (
        <div className="container">

            <div className='bloc-1'>
                {/* rows per pages */}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>

                {/* global Search */}
                <div className="search-container">
                    Global Search
                    &nbsp; 
                    <input
                        type="text"
                        value={globalFilter || ''}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </div>

            </div>

            {/* Table */}
            <table {...getTableProps()} className="table">
                {/* Apply the table body props */}
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            &nbsp; 
                            <span>
                                {column.isSorted
                                ? column.isSortedDesc
                                    ? <i className="fa-solid fa-caret-down"></i>
                                    : <i className="fa-solid fa-caret-up"></i>
                                : <i className="fa-solid fa-sort"></i>}
                            </span>
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
              
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             
            {/* 
            Pagination can be built however you'd like. 
            This is just a very basic UI implementation:
            */}
            <div className="pagination">

                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <i className="fa-solid fa-backward"></i>
                    &nbsp;
                    First
                </button>

                {' '}

                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <i className="fa-solid reverse fa-play"></i>
                    &nbsp;
                    Previous
                </button>

                {' '}

                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                    &nbsp;
                    <i className="fa-solid fa-play"></i>
                </button>

                {' '}

                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    Last
                    &nbsp;
                    <i className="fa-solid fa-forward"></i>
                </button>

                {' '}

                <span>
                    Page
                    &nbsp;
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>

                <span>
                    &nbsp;Go to page:&nbsp;
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>

            </div>

        </div>
    )
}
export default DisplayTable