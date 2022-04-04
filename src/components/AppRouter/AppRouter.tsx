import React, { FC, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import App, { CharactersType } from '../../App'
import Character from '../../pages/Character/Character'
import Characters from '../../pages/Characters/Characters'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'
// import { routes } from '../../router/router'

// console.log(routes)

type AppRouterPropsType = {
  characters: CharactersType,
  isAuth: boolean
}

const AppRouter: FC<AppRouterPropsType> = ({characters, isAuth}): JSX.Element => {
  // console.log(routes)

  return (
    isAuth 
    ? 
    <Routes>
      {/* {routes.map((route, i) => <Route index={route.index} path={route.path} element={route.element === Characters ? <Characters characters={characters}/> : route.element}/>
      )} */}
      <Route index={undefined} path="/" element={<App/>} />
      <Route index={true} element={<Home />} />
      <Route index={undefined} path="login" element={<Login />} />
      <Route index={undefined} path="characters" element={<Characters characters={characters}/>} />
      <Route index={undefined} path="character" element={<Character characters={characters}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    :
    <Routes>
      <Route path="/" element={<App/>} />
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter