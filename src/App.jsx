import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './UserContext'
import Conta from './Components/Conta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta" element={<Conta />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
