import React, { FC } from 'react'
import { CharactersType } from '../../pages/Characters/Characters'
import CharacterItem from '../CharacterItem/CharacterItem'
import classes from './CharacterItems.module.scss'

type CharacterItemsPropsType = {
  characters: CharactersType
}

const CharacterItems: FC<CharacterItemsPropsType> = ({ characters }) => {
  return (
    <ul className={classes.items}>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </ul>
  )
}

export default CharacterItems
