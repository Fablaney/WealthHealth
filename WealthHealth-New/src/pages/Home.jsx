// import react
import React from 'react'

// import useForm
import { useForm } from 'react-hook-form'

// import perso
import '../design/App.scss'
import '../design/form-block.scss'

import { states, departments } from '../datas/datas.js'


function Home()
{
    const {register, handleSubmit} = useForm()


    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <div className="page-header">
        
                <h1>Home</h1>

            </div>

            <div className='form-block'>

                <form className='' action="" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        {...register("first-name", { required: "Please enter your first name." })}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        {...register("last-name", { required: "Please enter your last name." })}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input
                        type="date"
                        id="date-of-birth"
                        {...register("date-of-birth", { required: "Please enter your date of birth." })}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        {...register("start-name", { required: "Please enter your start date." })}
                    />

                    <fieldset className="address">

                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            {...register("street", { required: "Please enter your street." })}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            {...register("city", { required: "Please enter your city." })}
                        />

                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            {...register("state", { required: "Please enter your state." })}
                        >
                            {
                                states.map((state) => (
                                    <option value={state.name} key={state.name}>
                                        {state.abbreviation} - {state.name}
                                    </option>
                                ))
                            }
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            type="number"
                            id="zip-code"
                            {...register("zip-code", { required: "Please enter your zip-code." })}
                        />

                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        {...register("department", { required: "Please enter your department." })}
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