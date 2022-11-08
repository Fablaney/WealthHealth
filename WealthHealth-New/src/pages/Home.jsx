// import react
import React from 'react'

// import useForm
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// import perso
import '../design/App.scss'
import '../design/form-block.scss'
import { mockedList } from '../datas/datas.js'
import { employeeActions } from '../redux/employeeListSlice'
import { states, departments } from '../datas/datas.js'

// composents
import ImputDate from '../components/DatePicker.jsx'
import Dropdown from '../components/Dropdown.jsx'

function Home()
{
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    useEffect(()=>{
        
        dispatch(employeeActions.getEmployees(mockedList))
    
    }, [])
    
    const onSubmit = data => {

        console.log(data)

        dispatch(employeeActions.addEmployee(data))
    }

    return (
        <>
            <div className="page-header">
        
                <h1>Home</h1>

            </div>

            <div className='form-block'>

                <form className='' action="" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="FirstName">First Name</label>
                    <input
                        type="text"
                        id="FirstName"
                        {...register("FirstName", { required: "Please enter your first name." })}
                    />

                    <label htmlFor="LastName">Last Name</label>
                    <input
                        type="text"
                        id="LastName"
                        {...register("LastName", { required: "Please enter your last name." })}
                    />

                    {/* date of birth with datepicker component plugin */}
                    <label htmlFor="BirthDate">Date of Birth</label>
                    <div className='date-parent'>
                        {/* composant */}
                        <ImputDate param={{...register("BirthDate", { required: "Please enter your date of birth." })}}
                            // {...register("BirthDate", { required: "Please enter your date of birth." })}
                        ></ImputDate>
                    </div>
                
                    {/* <input
                        type="date"
                        id="BirthDate"
                        {...register("BirthDate", { required: "Please enter your date of birth." })}
                    /> */}

                    <label htmlFor="StartDate">Start Date</label>
                    <input
                        type="date"
                        id="StartDate"
                        {...register("StartDate", { required: "Please enter your start date." })}
                    />

                    <fieldset className="address">

                        <legend>Address</legend>

                        <label htmlFor="Street">Street</label>
                        <input
                            type="text"
                            id="Street"
                            {...register("Street", { required: "Please enter your street." })}
                        />

                        <label htmlFor="City">City</label>
                        <input
                            type="text"
                            id="City"
                            {...register("City", { required: "Please enter your city." })}
                        />

                        <label htmlFor="State">State</label>
                        <select
                            id="State"
                            {...register("State", { required: "Please enter your state." })}
                        >
                            {
                                states.map((state) => (
                                    <option value={state.name} key={state.name}>
                                        {state.abbreviation} - {state.name}
                                    </option>
                                ))
                            }
                        </select>

                        <label htmlFor="Zipcode">Zip Code</label>
                        <input
                            type="number"
                            id="Zipcode"
                            {...register("Zipcode", { required: "Please enter your zip-code." })}
                        />

                    </fieldset>

                    <label htmlFor="Department">Department</label>
                    <select
                        id="Department"
                        {...register("Department", { required: "Please enter your department." })}
                    >
                        {
                            departments.map((department) => (
                                <option value={department.name} key={department.name}>
                                    {department.name}
                                </option>
                            ))
                        }
                    </select>

                    <button>Save</button>

                </form>

            </div>

        </>
    )
}

export default Home