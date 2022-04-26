import React, { FC, useEffect, useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import AppRouter from './components/AppRouter/AppRouter'
import { useNavigate } from 'react-router'

const LOGIN = 'rick'
const PASSWORD = 'morty'

const App: FC = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem('isLogin') || 'false')
  )
  const navigate = useNavigate()

  const loginNavbarHandler = (): void => {
    if (isAuth) {
      localStorage.setItem('isLogin', 'false')
      setIsAuth(!isAuth)
    }
  }

  const loginHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    login: string,
    password: string
  ): void => {
    e.preventDefault()
    if (login.toLowerCase() === LOGIN && password.toLowerCase() === PASSWORD) {
      setIsAuth(!isAuth)
      localStorage.setItem('isLogin', 'true')
      navigate('/characters')
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/characters')
    }
  }, [isAuth])

  return (
    <>
      <Navbar isAuth={isAuth} loginNavbarHandler={loginNavbarHandler} />
      <AppRouter isAuth={isAuth} loginHandler={loginHandler} />
    </>
  )
}

export default App
