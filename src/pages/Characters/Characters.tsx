import React, { FC, useState } from 'react'
import { CharactersType } from '../../App'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import Input from '../../components/UI/Input/Input'
import classes from './Characters.module.scss'

type CharactersPropsType = {
  characters: CharactersType,
  searchQuery: string
  searchHandler: (e: any) => void
}

const Characters: FC<CharactersPropsType> = ({characters, searchQuery, searchHandler}): JSX.Element => {
  const [searchString, setSearchString] = useState('') 
  const inputHandler = (event: any) => {
    setSearchString(event.target.value)
  }

  return (
    <div className={classes.characters}>
      <Input value={searchQuery} onChange={searchHandler} className={classes.characters__input} 
      placeholder="Search..."/>
      <CharacterItems characters={characters}/>
    </div>
  )
}

export default Characters