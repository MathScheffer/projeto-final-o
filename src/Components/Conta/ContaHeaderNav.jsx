import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../Forms/Button'
import { UserContext } from '../../UserContext'
import MinhasFotos from '../../assets/feed.svg'
import Estatiscas from '../../assets/estatisticas.svg'
import Adicionar from '../../assets/adicionar.svg'
import Sair from '../../assets/sair.svg'

import style from './ContaHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const ContaHeaderNav = () => {
  const mobile = useMedia('(max-width:40rem)')
  const { userLogout } = useContext(UserContext)
  const [mobileMenu, setMobileMenu] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="Feed Icon" />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={Estatiscas} alt="Estatística" />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/adicionar">
          <img src={Adicionar} alt="Estatística" />
          {mobile && 'Adicionar fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <img src={Sair} alt="Estatística" />
        </button>
      </nav>
    </>
  )
}

export default ContaHeaderNav
