// import toolkit
import { configureStore } from '@reduxjs/toolkit'

// import perso
import EmployeeListReducer from '../redux/employeeListSlice'

const store = configureStore({
    reducer: {
        employeesList: EmployeeListReducer
    }
})

export default store