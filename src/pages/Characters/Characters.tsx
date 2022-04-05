import React, { FC, useEffect, useState } from 'react'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import DataService from '../../API/DataService'
import { useFetching } from '../../hooks/useFetching'
import Input from '../../components/UI/Input/Input'
import classes from './Characters.module.scss'

export type CharactersType = {
  id: number,
  name: string,
  origin: {
    name: string,
    url: string,
  },
  species: string,
  gender: string,
  status: string,
  image: string,
  created: Object,
  location: {
    name: string,
    url: string,
  },  
  url: string,
}[] | []

const Characters: FC = (): JSX.Element => {

  const [characters, setCharacters] = useState<CharactersType>([])
  
  const [searchQuery, setSearchQuery] = useState('')
  
  const [fetchingData, isLoading, error] = useFetching(async () => {
    const characters = await DataService.getCharacters()  
    setCharacters(characters.data.results)
  }) as any
  
  const sortedCharacters = () => {
    return characters.filter(character => character.name.includes(searchQuery))
  } 

  const searchHandler = (e: any) => {
    setSearchQuery(e.target.value)
  }
   
  useEffect(() => { fetchingData() }, [fetchingData])

  return (
    <div className={classes.characters}>
      <Input value={searchQuery} onChange={searchHandler} className={classes.characters__input} 
      placeholder="Search..."/>
      <CharacterItems characters={sortedCharacters()}/>
    </div>
  )
}

export default Characters