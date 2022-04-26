import React from 'react'
import s from './Button.module.scss'

const Button = ({ children, ...props }: any) => {
  return (
    <button {...props} className={[s.button, props.className].join(' ')}>
      {children}
    </button>
  )
}

export default Button
