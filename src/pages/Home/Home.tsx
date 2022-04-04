import React, { FC } from 'react'
import classes from './Home.module.scss'
import background from '../../styles/wallpaper_5.jpg'

const Home: FC = () => {
  return (
    <div className={classes.ram__home}>
      <img className={classes.ram__image} src={background} alt="rick and morty wallpaper" />
    </div>
  )
}

export default Home