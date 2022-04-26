import React, { FC } from 'react'
import s from './Home.module.scss'
import background from '../../styles/wallpaper_5.jpg'

const Home: FC = () => {
  return (
    <div className={s.ram__home}>
      <img
        className={s.ram__image}
        src={background}
        alt="rick and morty wallpaper"
      />
    </div>
  )
}

export default Home
