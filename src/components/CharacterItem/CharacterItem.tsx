import React, { FC } from 'react'
import s from './CharacterItem.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { CharacterItemPropsType } from '../../types/types'

const statusObject: {
  [key: string]: string
} = {
  Alive: s.field__status_live,
  Dead: s.field__status_dead,
  unknown: s.field__status_unknown,
}

const CharacterItem: FC<CharacterItemPropsType> = ({
  character: { id, name, image, status },
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const pageNumber = location.pathname.split('/')[2]
  const clickHandler = (id: number) => {
    navigate(`/character/${id}`, { state: { page: pageNumber } })
  }

  return (
    <li className={s.item} onClick={() => clickHandler(id)}>
      <img className={s.item__image} src={image} alt={name} />
      <ul>
        <li className={s.item__field}>{name}</li>
        <li className={s.item__field}>
          Status: <span className={statusObject[status]}>{status}</span>
        </li>
      </ul>
    </li>
  )
}

export default CharacterItem
