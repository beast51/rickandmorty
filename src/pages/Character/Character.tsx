import moment from 'moment'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataService from '../../API/DataService'
import { useFetching } from '../../hooks/useFetching'
import { CharacterType } from '../../types/types'
import s from './Character.module.scss'

const statusObject: {
  [key: string]: string
} = {
  Alive: s.character__status_live,
  Dead: s.character__status_dead,
  unknown: s.character__status_unknown,
}

const Character: FC = (): JSX.Element => {
  const params = useParams()
  const [character, setCharacter] = useState<CharacterType>()
  const [firstEpisode, setFirstEpisode] = useState('')

  const [fetchingData] = useFetching(async () => {
    const character = await DataService.getCharacterById(Number(params.id))
    setCharacter(character.data)
    const firstEpisode = await DataService.getEpisodeById(
      character.data.episode[0]
    )
    setFirstEpisode(firstEpisode.data.name)
  }) as any

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <>
      {character && (
        <main className={s.character}>
          <img
            className={s.character__image}
            src={character.image}
            alt={character.name}
          />
          <ul className={s.character__fields}>
            <li className={s.character__field}>{character.name}</li>
            <li className={s.character__field}>Species: {character.species}</li>
            <li className={s.character__field}>Gender: {character.gender}</li>
            <li className={s.character__field}>
              Last known location: <b>{character.location.name}</b>
            </li>
            <li className={s.character__field}>
              First seen in: <b>{firstEpisode}</b>
            </li>
            <li className={s.character__field}>
              Status:{' '}
              <span className={statusObject[character.status]}>
                {character.status}
              </span>
            </li>
            <li className={s.character__field}>
              Added in the database: {moment(character.created).calendar()}
            </li>
          </ul>
        </main>
      )}
    </>
  )
}

export default Character
