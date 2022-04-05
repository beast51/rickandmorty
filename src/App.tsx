import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import DataService from './API/DataService'
import { useFetching } from './hooks/useFetching'
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { useNavigate } from 'react-router';

export type CharactersType = [{
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
}] | []



const App: FC = (): JSX.Element => {
  const [characters, setCharacters] = useState<CharactersType>([])
  // const [sortedCharacters, setSortedCharacters] = useState<CharactersType>([])
  const [searchQuery, setSearchQuery] = useState('')
  // const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(10)
  const [fetchingData, isLoading, error] = useFetching(async () => {
    const characters = await DataService.getCharacters()  
    setCharacters(characters.data.results)
  }) as any
  
  const [isAuth, setIsAuth] = useState(true)
  const navigate = useNavigate()
  

  const searchHandler = (e: any) => {
    setSearchQuery(e.target.value)
  }

  const loginNavbarHandler = ():void => {
    if (isAuth) {
      setIsAuth(!isAuth)
    }
    navigate('/login')
    // setIsAuth(!isAuth)
  }
  const loginHandler = (e: any):void => {
    e.preventdefault()
    setIsAuth(!isAuth)
    navigate('/characters')
  }

  const sortedCharacters = () => {
    return characters.filter(character => character.name.includes(searchQuery))
  } 

  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!isAuth) {
  //     return navigate('/login')
  //   }
  // }, [isAuth, navigate])
  console.log(characters)

  useEffect(() => { fetchingData() }, [])

  return (
    <main> 
      <Navbar isAuth={isAuth} loginNavbarHandler={loginNavbarHandler} loginHandler={loginHandler}/>
      <AppRouter characters={sortedCharacters()} isAuth={isAuth} loginHandler={loginHandler} searchQuery={searchQuery} searchHandler={searchHandler}/>
    </main>
  );
}

export default App;

