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
  characters: any,
  isAuth: boolean,
  loginHandler: (e: any) => void
  searchQuery: string
  searchHandler: (e: any) => void
}

const AppRouter: FC<AppRouterPropsType> = ({characters, isAuth, loginHandler, searchQuery, searchHandler}): JSX.Element => {
  // console.log(routes)

  return (
    isAuth 
    ? 
    <Routes>
      {/* {routes.map((route, i) => <Route index={route.index} path={route.path} element={route.element === Characters ? <Characters characters={characters}/> : route.element}/>
      )} */}
      <Route index={undefined} path="/" element={<App/>} />
      <Route index={true} element={<Home />} />
      <Route index={undefined} path="login" element={<Characters characters={characters} searchQuery={searchQuery} searchHandler={searchHandler}/>} />
      <Route index={undefined} path="characters" element={<Characters characters={characters} searchQuery={searchQuery} searchHandler={searchHandler}/>} />
      <Route index={undefined} path="character" element={<Character characters={characters}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    :
    <Routes>
      <Route path="/" element={<App/>} />
      <Route index element={<Home />} />
      <Route path="/login" element={<Login loginHandler={loginHandler}/>} />
    </Routes>
  )
}

export default AppRouter