import React, { FC, useEffect, useState } from 'react'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import DataService from '../../API/DataService'
import { useFetching } from '../../hooks/useFetching'
import Input from '../../components/UI/Input/Input'
import classes from './Characters.module.scss'
import Pagination from '@mui/material/Pagination'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterType } from '../../types/types'
import { AxiosResponse } from 'axios'

const Characters: FC = (): JSX.Element => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const params = useParams()
  const navigate = useNavigate()
  const [page, setPage] = useState(Number(params.id) | 1)
  const [totalPages, setTotalPages] = useState(0)

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    navigate(`/characters/${page}`)
  }
  const [searchQuery, setSearchQuery] = useState('')

  console.log('totalPages', totalPages)

  const [fetchingData, isLoading, error] = useFetching(async () => {
    const response: AxiosResponse = await DataService.getCharacters(page)
    setCharacters(response.data.results)
    setTotalPages(response.data.info.pages)
  }) as any

  const sortedCharacters = () => {
    return characters.filter((character) =>
      character.name.includes(searchQuery)
    )
  }

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  console.log('params.id', params.id)

  useEffect(() => {
    fetchingData()
  }, [page])

  useEffect(() => {
    params.id && setPage(Number(params.id))
  }, [params])

  return (
    <main className={classes.characters}>
      <div className={classes.characters__container}>
        <Input
          value={searchQuery}
          onChange={searchHandler}
          className={classes.characters__input}
          placeholder="Search..."
        />
        <CharacterItems characters={sortedCharacters()} />
        <div className={classes.characters__pagination}>
          <Pagination
            size="small"
            count={totalPages}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </main>
  )
}

export default Characters
