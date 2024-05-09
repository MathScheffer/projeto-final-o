import React, { createContext, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [login, setLogin] = useState()
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  /**
   * verifico se o usuário está com token válido quando entrar na página
   */
  useState(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token')

      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token invalido!')
          await getUser(token)
          console.log('carregou dados')
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin()
  }, [])
  /**
   * Colocando a função de login no contexto global, juntamente com os estados, conseguimos garantir que o usuário seja verificado em cada página
   * @param {} token
   */
  async function getUser(token) {
    console.log(token)
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()

    setData(json)
    setLogin(true)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({
        username: username,
        password: password,
      })
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(`Error: ${response.statusText}`)

      const { token } = await response.json()

      window.localStorage.setItem('token', token)

      await getUser(token)

      navigate('/conta')
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  async function userLogout() {
    setError(null)
    setLoading(false)
    setData(null)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
