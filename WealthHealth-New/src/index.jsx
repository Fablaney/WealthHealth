import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react'

// Import perso
// CSS
import './index.scss'
// pages
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import Error from './pages/Error'

import Header from './components/Header'

import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // <Provider store={store}>

        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/employeelist" element={<EmployeeList/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>

        </BrowserRouter>

    // </Provider>
)