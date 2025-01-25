import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to='/login'>Login</Link>
    <h1>Hello Welcome to Aws testing</h1>
    <h2>Now update reflected on the aws</h2>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
