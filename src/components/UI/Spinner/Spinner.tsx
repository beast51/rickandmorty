import s from './Spinner.module.scss'
import spinner from '../../../styles/spinner_new.png'
import { FC } from 'react'

const Spinner: FC<any> = ({ ...props }: any) => {
  return (
    <div className={[s.spinner, props.className].join(' ')}>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner
