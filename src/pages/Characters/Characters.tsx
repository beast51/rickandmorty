import React, { FC } from 'react'
import { CharactersType } from '../../App'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import classes from './Characters.module.scss'

type CharactersPropsType = {
  characters: CharactersType,
}

const Characters: FC<CharactersPropsType> = ({characters}): JSX.Element => {
  return (
    <div className={classes.characters}>
      <CharacterItems characters={characters}/>
    </div>
  )
}

export default Characters