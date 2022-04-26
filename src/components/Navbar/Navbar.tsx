import React, { FC } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import s from './Navbar.module.scss'

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
    <nav className={s.ram__navbar}>
      <div className={s.navbar__container}>
        <Link className={s.navbar__logo} to="/">
          Rick and Morty
        </Link>
        <ul className={s.navbar__btns}>
          {isAuth && (
            <li className={s.navbar__btn}>
              {isCharacter ? (
                <Button
                  className={s.navbar__button}
                  onClick={() => navigate(-1)}
                >
                  Back to characters
                </Button>
              ) : (
                <Link to="/characters/1">
                  <Button className={s.navbar__button}>Characters</Button>
                </Link>
              )}
            </li>
          )}
          <li className={s.navbar__btn}>
            {isAuth ? (
              <Link onClick={() => loginNavbarHandler()} to="/">
                <Button className={s.navbar__button}>Logout</Button>
              </Link>
            ) : (
              <Link onClick={() => loginNavbarHandler()} to="/login">
                <Button className={s.navbar__button}>Login</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
