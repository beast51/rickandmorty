import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../../App'
import Character from '../../pages/Character/Character'
import Characters from '../../pages/Characters/Characters'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'

const AppRouter = ({characters}: any) => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="characters" element={<Characters characters={characters}/>} />
      <Route path="character" element={<Character characters={characters}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter