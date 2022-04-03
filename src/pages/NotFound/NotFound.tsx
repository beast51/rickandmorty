import React, { FC } from 'react'
import classes from './NotFound.module.scss'

const NotFound: FC = () => {
  return (
    <div className={classes.error}>ОШИБКА 404</div>
  )
}

export default NotFound