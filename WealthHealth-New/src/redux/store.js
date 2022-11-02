// import toolkit
import { configureStore } from '@reduxjs/toolkit'

// import perso
// import { EmployeeListReducer } from './employeeListSlice'
import employeeListSliceReducer from './employeeListSlice'

const store = configureStore({
    reducer: {
        employeesList: employeeListSliceReducer
    }
})

export default store