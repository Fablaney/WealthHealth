// import React
import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'

// import perso
// import DisplayTable from '../components/DisplayTable'
const DisplayTable = lazy(() => import('../components/DisplayTable'));

// import perso
function EmployeeList()
{
    // recuperation de la liste des employés du state
    let employees = useSelector(state => {
        // console.log(state.employeesList.employees)
        return state.employeesList.employees
    })

    // console.log(employees)
    // const employees = [
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
    // console.log(employees)

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

                    <DisplayTable columns={columns} rows={employees} ></DisplayTable>

                </Suspense>

            </div>
        </>
    )
}

export default EmployeeList