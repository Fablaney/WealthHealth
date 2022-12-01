// import React
import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'

// import du plugin table perso depuis npm
import DisplayTable from "table-for-react"

// import perso
// const DisplayTable = lazy(() => import('../components/DisplayTable'));

// import perso
function EmployeeList()
{
    // state
    // recuperation de la liste des employés du state
    const employees = useSelector(state => {
        return state.employeesList.employees.length ? state.employeesList.employees : []
    })

    // colones du tableau
    const columns = [
        { title: 'FirstName', label: 'First Name' },
        { title: 'LastName', label: 'Last Name' },
        { title: 'BirthDate', label: 'Birth Date' },
        { title: 'StartDate', label: 'Start Date' },
        { title: 'Street', label: 'Street' },
        { title: 'City', label: 'City' },
        { title: 'State', label: 'State' },
        { title: 'Zipcode', label: 'Zip code' },
        { title: 'Department', label: 'Department' },
    ]


    return (
        <>
            <div className="page-header">

                <h1>Employee List</h1>

            </div>

            <div className='employee-tab'>

                <Suspense fallback={<div>Loading...</div>}>

                    <DisplayTable columns={columns} rows={employees}></DisplayTable>

                </Suspense>

            </div>
        </>
    )
}

export default EmployeeList