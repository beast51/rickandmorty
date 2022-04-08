import React, { FC } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import classes from './Navbar.module.scss'

type NavbarType = {
  isAuth: boolean
  loginNavbarHandler: () => void
}

const Navbar: FC<NavbarType> = ({
  isAuth,
  loginNavbarHandler,
}): JSX.Element => {
  const location = useLocation()
  const isCharacter = location.pathname.split('/')[1] === 'character'
  const navigate = useNavigate()

  return (
    <nav className={classes.ram__navbar}>
      <div className={classes.navbar__container}>
        <Link className={classes.navbar__logo} to="/">
          Rick and Morty
        </Link>
        <ul className={classes.navbar__btns}>
          {isAuth && (
            <li className={classes.navbar__btn}>
              {isCharacter ? (
                <Button
                  className={classes.navbar__button}
                  onClick={() => navigate(-1)}
                >
                  Back to characters
                </Button>
              ) : (
                <Link to="/characters/1">
                  <Button className={classes.navbar__button}>Characters</Button>
                </Link>
              )}
            </li>
          )}
          <li className={classes.navbar__btn}>
            {isAuth ? (
              <Link onClick={() => loginNavbarHandler()} to="/">
                <Button className={classes.navbar__button}>Logout</Button>
              </Link>
            ) : (
              <Link onClick={() => loginNavbarHandler()} to="/login">
                <Button className={classes.navbar__button}>Login</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
