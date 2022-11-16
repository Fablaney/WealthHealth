// import React
import React from 'react';
import { lazy } from 'react';
import { useSelector } from 'react-redux'

// import perso
import DisplayTable from '../components/DisplayTable'

// import perso
function EmployeeList()
{
    // recuperation de la liste des employés du state
    let employees = useSelector(state => {
        // console.log(state.employeesList.employees)
        return state.employeesList.employees
    })

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
                
                <DisplayTable columns={columns} rows={employees}></DisplayTable>

            </div>
        </>
    )
}

export default EmployeeList