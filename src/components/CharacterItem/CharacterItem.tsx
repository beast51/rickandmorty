import React, { FC } from 'react'
import moment from 'moment'
import classes from './CharacterItem.module.scss'

type CharacterItemPropsType = {
  character: {
    id: number;
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    gender: string;
    status: string;
    image: string;
    created: Object;
    location: {
        name: string;
        url: string;
    };
    url: string;
  }
}

const statusObject: {
  [key: string]: string
} = {
  "Alive": classes.field__status_live,
  'Dead': classes.field__status_dead,
  'unknown': classes.field__status_unknown
}

const CharacterItem: FC<CharacterItemPropsType> = ({ character }) => {
   return (
    <li className={classes.item}>
      <img className={classes.item__image} src={character.image} alt={character.name} />
      <ul>
        <li className={classes.item__field}>{character.name}</li>
        <li className={classes.item__field}>{character.species}</li>
        <li className={classes.item__field}>{character.gender}</li>
        <li className={classes.item__field}>Location: {character.location.name}</li>
        {/* <li>{character.episode}</li> */}
        <li className={classes.item__field}>Status: <span className={statusObject[character.status]}>{character.status}</span></li>
        <li className={classes.item__field}>{moment(character.created).calendar()}</li>
    </ul>
  </li>
  )
}

export default CharacterItem
