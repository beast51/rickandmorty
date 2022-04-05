import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../../App'
import Character from '../../pages/Character/Character'
import Characters from '../../pages/Characters/Characters'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'

type AppRouterPropsType = {
  isAuth: boolean
  loginHandler: (e: any) => void
}

const AppRouter: FC<AppRouterPropsType> = ({
  isAuth,
  loginHandler,
}): JSX.Element => {
  return isAuth ? (
    <Routes>
      {/* {routes.map((route, i) => <Route index={route.index} path={route.path} element={route.element === Characters ? <Characters characters={characters}/> : route.element}/>
      )} */}
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="login" element={<Characters />} />
      <Route path="characters" element={<Characters />} />
      <Route path="character" element={<Character />} />
      <Route path="character/:id" element={<Character />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="/login" element={<Login loginHandler={loginHandler} />} />
    </Routes>
  )
}

export default AppRouter
