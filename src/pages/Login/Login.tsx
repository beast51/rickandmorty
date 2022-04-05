import React, { FC } from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Login.module.scss'

type LoginPropsType = {
  loginHandler: (e: any) => void
}

const Login: FC<LoginPropsType> = ({loginHandler}): JSX.Element => {
  return (
    <div className={classes.login}>
      <form>
        <Input type="text" placeholder="Login"/> 
        <Input type="text" placeholder="Password"/>
        <Button onClick={(e: any) => loginHandler(e)} className={classes.form__button}>Login</Button> 
      </form>
      
    </div>
  )
}

export default Login