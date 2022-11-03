import '../design/App.scss'
import "../design/employee-tab.scss"

import { mockedList } from '../datas/datas'

function EmployeeList()
{
    // colones du tableau
    const columns = [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street' },
        { title: 'City', data: 'city' },
        { title: 'State', data: 'state' },
        { title: 'Zip Code', data: 'zipCode' },
    ]

    return (
        <>
            <div className="page-header">

                <h1>Employee List</h1>

            </div>
            
            <div className='employee-tab'>

                {/* div show number + search */}
                <div className='show-search'>
                    {/* show number */}
                    <div className='show'>
                        Show
                        <select name="entries" id="">
                            <option value="">10</option>
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">100</option>
                        </select>
                    </div>
                    {/* search */}
                    <div className='search'>
                        search <input type="search" />
                    </div>
                </div>

                {/* tableau */}
                <table className='table'>
                    <thead>
                        <tr>
                            {/* boucle sur les colones */}
                            {
                                columns.map((column) => (
                                    <th colspan={column.data}>{column.title}</th>
                                ))
                            }
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        
                            {/* boucle sur les colones */}
                            {
                                mockedList.map((employee) => (
                                    <tr>
                                        <td>{employee.FirstName}</td>
                                        <td>{employee.LastName}</td>
                                        <td>{employee.StartDate}</td>
                                        <td>{employee.Department}</td>
                                        <td>{employee.BirthDate}</td>
                                        <td>{employee.Street}</td>
                                        <td>{employee.City}</td>
                                        <td>{employee.State}</td>
                                        <td>{employee.Zipcode}</td>
                                    </tr>
                                ))
                            }
                            {/* <td>no datas for the moment</td> */}
                         
                        
                    </tbody>

                </table>

                {/* count + next /prev */}
                <div className='count-next-prev'>

                    {/* count */}
                    <div className='count'>
                        Showing 0 to 0 of 0 entries
                    </div>
                    {/* next/prev */}
                    <div className='next-prev'> 
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EmployeeList