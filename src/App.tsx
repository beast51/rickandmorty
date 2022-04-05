import React, { FC, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { useNavigate } from 'react-router';

const App: FC = (): JSX.Element => { 

  const [isAuth, setIsAuth] = useState(true)
  const navigate = useNavigate()
  
  const loginNavbarHandler = ():void => {
    if (isAuth) {
      setIsAuth(!isAuth)
    }
    navigate('/login')
  }

  const loginHandler = (e: any):void => {
    e.preventdefault()
    setIsAuth(!isAuth)
    navigate('/characters')
  }

  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!isAuth) {
  //     return navigate('/login')
  //   }
  // }, [isAuth, navigate])

  return (
    <>
      <Navbar 
      isAuth={isAuth} 
      loginNavbarHandler={loginNavbarHandler} 
      loginHandler={loginHandler}
      />
      <AppRouter 
      isAuth={isAuth} 
      loginHandler={loginHandler} 
      />
    </>


  );
}

export default App;

