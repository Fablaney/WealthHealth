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
import Dropdown from '../components/Dropdown.jsx'

function Home()
{
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(employeeActions.getEmployees(mockedList))
    
    }, [])
    
    const onSubmit = data => {

        // console.log("Nouvel employé ajouté")
        // console.log(data)

        dispatch(employeeActions.addEmployee(data))

        document.querySelector(".modale").classList.remove("d-none")
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
                        {...register("FirstName", { required: true }, { pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.FirstName && <span className='error-msg'>Please enter your first name.</span>}

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
                        <Dropdown title="Stateliste">liste</Dropdown>
                        <input
                            hidden
                            type="text"
                            id='State'
                            list='State-list'
                            placeholder='Choose a State'
                            name='State'
                            {...register("State", { required: true })}
                        />
                        <datalist id='State-list'>
                        {
                                states.map((state, index) => (
                                    <option value={state.name} key={index}>
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

                    <button className='save-button'>Save</button>

                </form>
  
            </div>

            {/* composant/plugin modale */}
            <Modale>A new employee has been created</Modale> 

        </>
    )
}

export default Home