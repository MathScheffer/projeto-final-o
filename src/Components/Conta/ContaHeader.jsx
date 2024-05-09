import React, { useEffect, useState } from 'react'
import ContaHeaderNav from './ContaHeaderNav'
import style from './ContaHeader.module.css'
import { useLocation } from 'react-router-dom'
const ContaHeader = () => {
  const [title, setTitle] = useState()
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    let titleName
    switch (pathname) {
      case '/conta':
        titleName = 'Conta'
        break
      case '/conta/estatisticas':
        titleName = 'Estatísticas'
        break
      case '/conta/adicionar':
        titleName = 'Adicionar postagem'
        break
    }

    setTitle(titleName)
  }, [location])
  return (
    <header className={style.header}>
      <h1 className="title">{title}</h1>
      <ContaHeaderNav />
    </header>
  )
}

export default ContaHeader
