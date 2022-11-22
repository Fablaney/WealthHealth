// import React
import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { mockedList} from '../datas/datas.js'
// import perso
// import DisplayTable from '../components/DisplayTable'
const DisplayTable = lazy(() => import('../components/DisplayTable'));

// import perso
function EmployeeList()
{
    // state
    // recuperation de la liste des employés du state
    const employees = useSelector(state => {
        // console.log(state.employeesList.employees)
        return state.employeesList.employees.length ? state.employeesList.employees : []
    })

    // colones du tableau
    const columns = [
        { accessor: 'FirstName', Header: 'First Name'},
        { accessor: 'LastName', Header: 'Last Name' },
        { accessor: 'BirthDate', Header: 'Birth Date' },
        { accessor: 'StartDate', Header: 'Start Date' },
        { accessor: 'Street', Header: 'Street' },
        { accessor: 'City', Header: 'City' },
        { accessor: 'State', Header: 'State' },
        { accessor: 'Zipcode', Header: 'Zip code' },
        { accessor: 'Department', Header: 'Department' },
    ]

    return (
        <>
            <div className="page-header">

                <h1>Employee List</h1>

            </div>

            <div className='employee-tab'>

                <Suspense fallback={<div>Loading...</div>}>

                    <DisplayTable colonnes={columns} lignes={employees} ></DisplayTable>

                </Suspense>

            </div>
        </>
    )
}

export default EmployeeList