// import react
import React from 'react'

import { useEffect } from 'react'

// import redux
import { useDispatch } from 'react-redux'

// import useForm
import { useForm } from 'react-hook-form'

// import perso
import { mockedList } from '../datas/datas.js'
import { employeeActions } from '../redux/employeeListSlice'
import { states, departments } from '../datas/datas.js'

// plugin
import Calendar from '../components/DatePicker.jsx'

// composents
import Dropdown from '../components/Dropdown.jsx'
import Select from '../components/Select'

function Home()
{
    // const {register, handleSubmit } = useForm()
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch()
    // console.log(watch("FirstName"));
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
                        {...register("LastName", { required: true }, { pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.LastName && <span className='error-msg'>Please enter your last name.</span>}

                    {/* date of birth with datepicker component plugin */}
                    <label htmlFor="BirthDate">Date of Birth</label>
                    {/* composant */}
                    <Calendar setValue={setValue} label={'BirthDate'} name="birthdate" />
        
                    <label htmlFor="StartDate">Start Date</label>
                    {/* composant */}
                    <Calendar setValue={setValue} label={'StartDate'} name="StartDate" />

                    <label htmlFor="Department">Department</label>
                    <input
                        type="text"
                        id='Department'
                        list='Department-list'
                        placeholder='Choose a Department'
                        name='Department'
                        {...register('Department', {required: true}, )}
                    />
                    <datalist className='test' id='Department-list'>
                        {
                            departments.map((department, index) => (
                                <option value={department.name} key={index}>
                                    {department.name}
                                </option>
                            ))
                        }
                    </datalist>
                    {errors.Department && <span className='error-msg'>Please choose a department.</span>}

                    <fieldset className="address">

                        <legend>Address</legend>

                        <label htmlFor="Street">Street</label>
                        <input
                            type="text"
                            id="Street"
                            {...register("Street", { required: true })}
                        />
                        {errors.Street && <span className='error-msg'>Please enter your street.</span>}
                        <label htmlFor="City">City</label>

                        <input
                            type="text"
                            id="City"
                            {...register("City", { required: true })}
                        />
                        {errors.City && <span className='error-msg'>Please enter your city.</span>}

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
                        </datalist>
                        
                        {errors.State && <span className='error-msg'>Please enter your state.</span>}

                        <label htmlFor="Zipcode">Zip Code</label>
                        <input
                            type="number"
                            id="Zipcode"
                            {...register("Zipcode", { required: true }, { min: 1000, max: 99999 })}
                        />
                        {errors.Zipcode && <span className='error-msg'>Please enter your zip-code.</span>}

                    </fieldset>

                    <button>Save</button>

                </form>

            </div>
    
        </>
    )
}

export default Home