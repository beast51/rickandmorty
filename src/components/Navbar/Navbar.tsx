import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from'./Navbar.module.scss'

type NavbarType = {
  isAuth: boolean,
  loginHandler: () => void
}

const Navbar: FC<NavbarType> = ({isAuth, loginHandler}): JSX.Element => {
  return (
    <nav className={classes.ram__navbar}>
      <div><Link className={classes.navbar__logo} to="/">Rick and Morty</Link></div>
      <ul className={classes.navbar__btns}>
        {isAuth && <li className={classes.navbar__btn}>
          <Link to="/characters">Characters</Link>
        </li>}
        <li className={classes.navbar__btn}>
          {isAuth 
          ? 
          <Link onClick={() => loginHandler()} to="/">Logout</Link> 
          : 
          <Link onClick={() => loginHandler()} to="/login">Login</Link> }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar