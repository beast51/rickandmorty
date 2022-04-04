import React, { FC } from 'react'
import { CharactersType } from '../../App'

type CharacterPropsType = {
  characters: CharactersType
}

const Character: FC<CharacterPropsType> = ({characters}) => {
  return (
    <div>Character</div>
  )
}

export default Character