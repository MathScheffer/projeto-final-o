import React, { useContext, useEffect } from 'react'
import style from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react'
import { UserContext } from '../UserContext'
import Login from './Login/Login'
import Button from './Forms/Button'

const Header = () => {
  const { data, login, userLogout } = useContext(UserContext)

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to="conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="login">
            Login / Criar
          </Link>
        )}
        {login && <Button onClick={userLogout}>Logout</Button>}
      </nav>
    </header>
  )
}

export default Header
