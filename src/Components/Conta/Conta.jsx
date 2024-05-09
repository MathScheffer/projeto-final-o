import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import ContaHeader from './ContaHeader'
import ContaPhotoPost from './ContaPhotoPost'
import ContaStats from './ContaStats'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'

/**
 *
 * No root da conta aparecerá o feed
 */
const Conta = () => {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <ContaHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<ContaPhotoPost />} />
        <Route path="estatistica" element={<ContaStats />} />
      </Routes>
      {data && <p>{data.email}</p>}
    </section>
  )
}

export default Conta
