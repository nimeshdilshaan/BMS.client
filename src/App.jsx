import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'
import Log from './pages/Login.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Log />} />


      </Routes>
      
    </div>
  )
}

export default App
