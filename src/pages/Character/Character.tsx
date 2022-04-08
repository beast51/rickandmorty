import moment from 'moment'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataService from '../../API/DataService'
import { useFetching } from '../../hooks/useFetching'
import { CharacterType } from '../../types/types'
import classes from './Character.module.scss'

const statusObject: {
  [key: string]: string
} = {
  Alive: classes.character__status_live,
  Dead: classes.character__status_dead,
  unknown: classes.character__status_unknown,
}

const Character: FC = (): JSX.Element => {
  const [character, setCharacter] = useState<CharacterType>()
  const [firstEpisode, setFirstEpisode] = useState('')
  const params = useParams()

  const [fetchingData, isLoading, error] = useFetching(async () => {
    const character = await DataService.getCharacterById(Number(params.id))
    setCharacter(character.data)
    const firstEpisode = await DataService.getEpisodeById(
      character.data.episode[0]
    )
    setFirstEpisode(firstEpisode.data.name)
  }) as any

  console.log(character)

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <>
      {character && (
        <main className={classes.character}>
          <img
            className={classes.character__image}
            src={character.image}
            alt={character.name}
          />
          <ul className={classes.character__fields}>
            <li className={classes.character__field}>{character.name}</li>
            <li className={classes.character__field}>
              Species: {character.species}
            </li>
            <li className={classes.character__field}>
              Gender: {character.gender}
            </li>
            <li className={classes.character__field}>
              Last known location: <b>{character.location.name}</b>
            </li>
            <li className={classes.character__field}>
              First seen in: <b>{firstEpisode}</b>
            </li>
            <li className={classes.character__field}>
              Status:{' '}
              <span className={statusObject[character.status]}>
                {character.status}
              </span>
            </li>
            <li className={classes.character__field}>
              Added in the database: {moment(character.created).calendar()}
            </li>
          </ul>
        </main>
      )}
    </>
  )
}

export default Character
