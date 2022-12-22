// import react
import React from 'react'
import { useEffect } from 'react'

// import redux
import { useDispatch } from 'react-redux'

// import useForm
import { useForm } from 'react-hook-form'

// import perso
import { mockedList, states, departments } from '../datas/datas.js'
import { employeeActions } from '../redux/employeeListSlice'

// plugin
import Calendar from '../components/DatePicker.jsx'

// composents
import Modale from '../components/Modal.jsx'

function Home()
{
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getEmployees(mockedList))
    }, [])

    const onSubmit = data => {
        dispatch(employeeActions.addEmployee(data))
        // console.log(data)
        document.querySelector(".modale").classList.remove("d-none")
    }

    let selectOptions = []

    return (
        <>
            <div className="page-header">
        
                <h1>Home</h1>

            </div>

            <div className='form-block'>

                <form className='' action="" onSubmit={handleSubmit(onSubmit)}>

                    {/* FirstName */}
                    <label htmlFor="FirstName">First Name</label>
                    <input
                        type="text"
                        id="FirstName"
                        {...register("FirstName", { required: true }, { pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.FirstName && <span className='error-msg'>Please enter your first name.</span>}

                    {/* LastName */}
                    <label htmlFor="LastName">Last Name</label>
                    <input
                        type="text"
                        id="LastName"
                        {...register("LastName", { required: true }, { pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.LastName && <span className='error-msg'>Please enter your last name.</span>}

                    {/* BirthDate with datepicker component plugin */}
                    <label htmlFor="BirthDate">Date of Birth</label>
                    {/* composant */}
                    <Calendar setValue={setValue} label={'BirthDate'} name="birthdate" />

                    {/* StartDate with datepicker component plugin */}
                    <label htmlFor="StartDate">Start Date</label>
                    {/* composant */}
                    <Calendar setValue={setValue} label={'StartDate'} name="StartDate" />

                    {/* Department */}
                    <label htmlFor="Department">Department</label>
                    <select name="Department" id="Department" {...register('Department', {required: true} )}>
                        {
                            departments.map((department, index) => (
                                <option value={department.name} key={index}>
                                    {department.name}
                                </option>
                            ))
                        }
                    </select>
                    {errors.Department && <span className='error-msg'>Please choose a department.</span>}

                    <fieldset className="address">

                        <legend>Address</legend>

                        {/* Street */}
                        <label htmlFor="Street">Street</label>
                        <input
                            type="text"
                            id="Street"
                            {...register("Street", { required: true })}
                        />
                        {errors.Street && <span className='error-msg'>Please enter your street.</span>}

                        {/* City */}
                        <label htmlFor="City">City</label>
                        <input
                            type="text"
                            id="City"
                            {...register("City", { required: true })}
                        />
                        {errors.City && <span className='error-msg'>Please enter your city.</span>}

                        {/* State */}
                        <label htmlFor="State">State</label>
                        <select name="State" id="State" {...register("State", { required: true })}>
                            {
                                states.map((state, index) => (
                                    <option value={state.abbreviation} key={index}>
                                        {state.name}
                                    </option>
                                ))
                            }
                        </select>
                        {errors.State && <span className='error-msg'>Please enter your state.</span>}

                        {/* ZipCode */}
                        <label htmlFor="Zipcode">Zip Code</label>
                        <input
                            type="number"
                            id="Zipcode"
                            {...register("Zipcode", { required: true }, { min: 1000, max: 99999 })}
                        />
                        {errors.Zipcode && <span className='error-msg'>Please enter your zip-code.</span>}

                    </fieldset>

                    <button className='save-button'>Save</button>

                </form>
  
            </div>

            {/* composant/plugin modale */}
            <Modale>A new employee has been created</Modale> 

        </>
    )
}

export default Home