import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Conta = () => {
  const { data } = useContext(UserContext)
  return (
    <div>
      <h1>Sua conta</h1>
      {data && <p>{data.email}</p>}
    </div>
  )
}

export default Conta
