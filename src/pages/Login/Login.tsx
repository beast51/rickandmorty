import React, { FC, useRef, useState } from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import s from './Login.module.scss'

type LoginPropsType = {
  loginHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    login: string,
    password: string
  ) => void
}

const Login: FC<LoginPropsType> = ({ loginHandler }): JSX.Element => {
  let [login, setLogin] = useState('')
  let [password, setPassword] = useState('')

  return (
    <div className={s.login}>
      <form>
        <Input
          type="text"
          value={login}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }): void => setLogin(e.target.value)}
          placeholder="Login: rick"
        />
        <Input
          type="text"
          value={password}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }): void => setPassword(e.target.value)}
          placeholder="Password: morty"
        />
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            loginHandler(e, login, password)
          }
          className={s.form__button}
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
