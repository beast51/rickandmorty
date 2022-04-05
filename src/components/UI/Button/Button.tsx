import React from 'react'
import classes from './Button.module.scss'

const Button = ({children, ...props}: any) => {
  return (
    <button {...props} className={[classes.button, props.className].join(' ')} >
      {children}
    </button>
  )
}

export default Button