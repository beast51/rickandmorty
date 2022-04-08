import React, { FC } from 'react'
import classes from './CharacterItem.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { CharacterItemPropsType } from '../../types/types'

const statusObject: {
  [key: string]: string
} = {
  Alive: classes.field__status_live,
  Dead: classes.field__status_dead,
  unknown: classes.field__status_unknown,
}

const CharacterItem: FC<CharacterItemPropsType> = ({
  character: { id, name, image, status },
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const pageNumber = location.pathname.split('/')[2]
  const clickHadler = (id: number) => {
    navigate(`/character/${id}`, { state: { page: pageNumber } })
    console.log(pageNumber)
  }

  return (
    <li className={classes.item} onClick={() => clickHadler(id)}>
      <img className={classes.item__image} src={image} alt={name} />
      <ul>
        <li className={classes.item__field}>{name}</li>
        <li className={classes.item__field}>
          Status: <span className={statusObject[status]}>{status}</span>
        </li>
      </ul>
    </li>
  )
}

export default CharacterItem
