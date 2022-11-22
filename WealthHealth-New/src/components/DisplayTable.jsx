import { useTable, useSortBy } from "react-table"
import { useMemo } from "react"
import { useGlobalFilter } from 'react-table'
import { useFilters } from 'react-table';

function DisplayTable({colonnes, lignes})
{
    console.log("j'entre dans react table")
    // console.log(colonnes)
    // console.log(lignes)

    const FilterForm = ({ column }) => {
        const { filterValue, setFilter } = column;
        return (
            <span>
                <input
                    value={filterValue || ''}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </span>
        );
    };
    
    colonnes.forEach(element => {
        const filtre = { Filter: FilterForm}
        Object.assign(element, filtre);
    })

    const columns = useMemo(() => colonnes, [])

    const data = useMemo(() => lignes, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);

    const { globalFilter } = state;

 
    return (
        <div className="container">

            <div className="search-container">
                Search
                &nbsp;
                <input
                    type="text"
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
            </div>

            <table {...getTableProps()} className="table">

                <thead>
                    {   
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    console.log(column)
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? Column.isSortedDesc
                                                    ?' 🔽'
                                                    : '🔼'
                                                :""}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default DisplayTable