import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: []
}

const employeeSlice = createSlice({
    name: 'employeesList',
    initialState,
    reducers: {
        addEmployee(state, action)
        {
            state.employees.push(action.payload)
        },
        getEmployees(state, action)
        {
            state.employees = action.payload.map((row, index) => {
                return {
                    ...row, 
                    id: index+1
                }
            })
        }
    }
})

export const employeeActions = employeeSlice.actions

export default employeeSlice.reducer