import { useMemo } from 'react'
import { useTable } from "react-table"
import { useSortBy } from "react-table"

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

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns,data,},
        useSortBy
    )
 
    return (
        <div className="container">

            <table {...getTableProps()} className="table">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                rows.map(row => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                    // Apply the row props
                    <tr {...row.getRowProps()}>
                        {// Loop over the rows cells
                        row.cells.map(cell => {
                        // Apply the cell props
                        return (
                            <td {...cell.getCellProps()}>
                            {// Render the cell contents
                            cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
             
        </div>
    )
}
export default DisplayTable