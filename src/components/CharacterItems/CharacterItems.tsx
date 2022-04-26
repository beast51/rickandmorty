import React, { FC } from 'react'
import { CharacterItemsPropsType } from '../../types/types'
import CharacterItem from '../CharacterItem/CharacterItem'
import s from './CharacterItems.module.scss'

const CharacterItems: FC<CharacterItemsPropsType> = ({ characters }) => {
  return (
    <ul className={s.items}>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </ul>
  )
}

export default CharacterItems
