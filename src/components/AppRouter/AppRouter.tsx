import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../../App'
import Character from '../../pages/Character/Character'
import Characters from '../../pages/Characters/Characters'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'

type AppRouterPropsType = {
  isAuth: boolean
  loginHandler: (e: any, login: string, password: string) => void
}

const AppRouter: FC<AppRouterPropsType> = ({
  isAuth,
  loginHandler,
}): JSX.Element => {
  return isAuth ? (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="login" element={<Characters />} />
      <Route path="characters" element={<Characters />} />
      <Route path="characters/:id" element={<Characters />} />
      <Route path="character" element={<Character />} />
      <Route path="character/:id" element={<Character />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="/login" element={<Login loginHandler={loginHandler} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
