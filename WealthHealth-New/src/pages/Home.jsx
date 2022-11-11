// import react
import React from 'react'

import { useEffect } from 'react'

// import redux
import { useDispatch } from 'react-redux'

// import useForm
import { useForm } from 'react-hook-form'

// import perso
import '../design/App.scss'
import '../design/form-block.scss'
import { mockedList } from '../datas/datas.js'
import { employeeActions } from '../redux/employeeListSlice'
import { states, departments } from '../datas/datas.js'

// plugin
import Calendar from '../components/DatePicker.jsx'

// composents
import Dropdown from '../components/Dropdown.jsx'


function Home()
{
    // const {register, handleSubmit } = useForm()
    const { register, handleSubmit, setValue } = useForm();
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
                    {/* composant */}
                    {/* <Calendar

                        label={'BirthDate'}
                        name="BirthDate"

                        {...register("BirthDate", { required: "Please enter your date of birth." })}
                    ></Calendar> */}
                    <Calendar setValue={setValue} label={'BirthDate'} name="birthdate" />
                    {/* <input
                        type="date"
                        id="BirthDate"
                        {...register("BirthDate", { required: "Please enter your date of birth." })}
                    /> */}

                    <label htmlFor="StartDate">Start Date</label>
                    <Calendar setValue={setValue} label={'StartDate'} name="StartDate" />
                    {/* <input
                        type="date"
                        id="StartDate"
                        {...register("StartDate", { required: "Please enter your start date." })}
                    /> */}

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
                            {/* 1er onglet non selectionnable */}
                            <option
                                disabled
                                selected
                                defaultValue="Select a State" >
                                    - Select a State -
                            </option>
                            {/* liste des états */}
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