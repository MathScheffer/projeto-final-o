import React, { useContext } from 'react'
import style from './Login.module.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'

const Login = () => {
  console.log('entrou no login')
  const { login } = useContext(UserContext)
  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
