import React from 'react'
import CharacterItem from '../CharacterItem/CharacterItem'
import classes from './CharacterItems.module.scss'

const CharacterItems = ( {characters}: any) => {
  return (
    <ul className={classes.items}>
      {characters.map((character: any) => 
        <CharacterItem character={character} key={character.id}/>
      )}
  </ul>
  )
}

export default CharacterItems