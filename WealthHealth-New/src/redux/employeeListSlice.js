import { createSlice } from '@reduxjs/toolkit'

const inistialState = {
   
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null
}

export const employeeSlice = createSlice({
    name: 'employeesList',
    inistialState,
    reducers: {
        addEmployee(state, action)
        {
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.dateOfBirth = action.payload.dateOfBirth,
            state.startDate = action.payload.startDate,
            state.street = action.payload.street,
            state.city = action.payload.city,
            state.state = action.payload.state,
            state.zipCode = action.payload.zipCode,
            state.department = action.payload.department
        }
    }
})

export const employeeActions = employeeSlice.actions

export default employeeSlice.reducer