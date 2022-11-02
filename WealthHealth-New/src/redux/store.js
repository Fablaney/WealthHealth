// import toolkit
import { configureStore } from '@reduxjs/toolkit'

// import perso
import { employeesListReducer } from './employeeListSlice'

export const store = configureStore({
    reducer: {
        employeesList: employeesListReducer.reducer
    }
})