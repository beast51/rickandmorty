import React, { useEffect, useState } from 'react';
import './App.scss';
import DataService from './API/DataService'
import { useFetching } from './hooks/useFetching'
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import moment from 'moment';

const App = () => {
  const [characters, setCharacters] = useState([])
  // const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(10)
  const [fetchingData, isLoading, error] = useFetching(async () => {
    const characters: any = await DataService.getCharacters()  
    setCharacters(characters.data.results)
  }) as any
  
  useEffect(() => { fetchingData() }, [])
  console.log(characters)
  console.log(moment().subtract(10, 'days').calendar())
  return (
    <main>
      <Navbar/>
      <AppRouter characters={characters}/>
    </main>
  );
}

export default App;

