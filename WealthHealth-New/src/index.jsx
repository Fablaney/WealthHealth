// import React
import React from 'react'
import { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'


// Import perso
// CSS
import './styles/index.scss'
// pages
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import Error from './pages/Error'

// components
import Header from './components/Header'

// store
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>

        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/employeelist" element={<EmployeeList/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>

        </BrowserRouter>
    
    </Provider>
)