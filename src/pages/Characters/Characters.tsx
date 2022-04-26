import React, { FC, useEffect, useState } from 'react'
import CharacterItems from '../../components/CharacterItems/CharacterItems'
import DataService from '../../API/DataService'
import { useFetching } from '../../hooks/useFetching'
import Input from '../../components/UI/Input/Input'
import s from './Characters.module.scss'
import Pagination from '@mui/material/Pagination'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterType } from '../../types/types'
import { AxiosResponse } from 'axios'
import Spinner from '../../components/UI/Spinner/Spinner'

const Characters: FC = (): JSX.Element => {
  const params = useParams()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [page, setPage] = useState(Number(params.id) | 1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [fetchingData, isLoading, error] = useFetching(async () => {
    const response: AxiosResponse = await DataService.getCharacters(page)
    setCharacters(response.data.results)
    setTotalPages(response.data.info.pages)
  }) as any

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    navigate(`/characters/${page}`)
  }

  const sortedCharacters = () => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery)
    )
  }

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    fetchingData()
  }, [page])

  useEffect(() => {
    params.id && setPage(Number(params.id))
  }, [params])

  return (
    <main className={s.characters}>
      <div className={s.characters__container}>
        <Input
          value={searchQuery}
          onChange={searchHandler}
          className={s.characters__input}
          placeholder="Search..."
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CharacterItems characters={sortedCharacters()} />
            <div className={s.characters__pagination}>
              <Pagination
                size="small"
                count={totalPages}
                page={page}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Characters
