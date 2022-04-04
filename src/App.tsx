import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import DataService from './API/DataService'
import { useFetching } from './hooks/useFetching'
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
// import { useNavigate } from 'react-router';

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
  // const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(10)
  const [fetchingData, isLoading, error] = useFetching(async () => {
    const characters = await DataService.getCharacters()  
    setCharacters(characters.data.results)
  }) as any
  
  useEffect(() => { fetchingData() }, [])
  const [isAuth, setIsAuth] = useState(true)
  const loginHandler = ():void => {
    setIsAuth(!isAuth)
  }

  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!isAuth) {
  //     return navigate('/login')
  //   }
  // }, [isAuth, navigate])
  console.log(characters)

  return (
    <main>
      <Navbar isAuth={isAuth} loginHandler={loginHandler}/>
      <AppRouter characters={characters} isAuth={isAuth}/>
    </main>
  );
}

export default App;

