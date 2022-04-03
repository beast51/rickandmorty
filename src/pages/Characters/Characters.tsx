import React from 'react'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import classes from './Characters.module.scss'

const Characters = ({characters}: any) => {
  return (
    <div className={classes.characters}>
      <CharacterItems characters={characters}/>
    </div>
  )
}

export default Characters