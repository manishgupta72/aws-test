import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <h1>Welcome to the aws testing</h1>
        <nav>
          <Link to='/login'>Login</Link>
        </nav>
        <Routes>
          {/* Route for the Home component can be added here */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
