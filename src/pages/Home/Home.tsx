import React from 'react'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <div className={classes.ram__home}>
      <img className={classes.ram__image} src={'https://i.pinimg.com/564x/d9/2e/2f/d92e2fa04278914210bb7db6e16ef0ad.jpg'} alt="rick and morty wallpaper" />
    </div>
  )
}

export default Home