import React, { FC } from 'react'
import classes from './Input.module.scss'

const Input: FC<any> = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className={[classes.input, props.className].join(' ')}/>
  )
})

export default Input
