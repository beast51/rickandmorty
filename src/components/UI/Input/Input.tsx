import React, { FC } from 'react'
import s from './Input.module.scss'

const Input: FC<any> = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={[s.input, props.className].join(' ')}
    />
  )
})

export default Input
