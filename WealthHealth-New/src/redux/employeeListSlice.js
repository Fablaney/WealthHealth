import { createSlice } from '@reduxjs/toolkit'

export const employeesListReducer = createSlice({
    name: 'employeesList',
    inistialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload)
            return state
        }
    }
})

export const { addEmployee } = employeesListReducer.actions
export const employeeState = (state) => state