import './App.css';
import { useEffect, useState } from 'react';
import MianContext from './context/MainContext'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Navbar from './Compoents/Navbar/Navbar'
import Footer from './Compoents/Footer/Footer';

function App() {
  const [userInfos, setUserInfos] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRoutes(routes)

  useEffect(() => {
    console.log(userInfos)
    const localStorageData = JSON.parse(localStorage.getItem('user-info'))
    if (localStorageData) {
      console.log(localStorageData);
      setUserInfos(localStorageData)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('user-info')
    setIsLoggedIn(false)
  }


  const login = (data) => {
    if (data !== undefined) {
      localStorage.removeItem('user-info')
      localStorage.setItem('user-info', JSON.stringify(data))
      setUserInfos(prevState => {
        const latestData = JSON.parse(localStorage.getItem('user-info'))
        return latestData || data
      })
      setIsLoggedIn(true)
    } else {
      alert("ERROR")
    }
  }


  return (
    <MianContext.Provider value={{ userInfos, login, isLoggedIn, logout }}>
      {/* <AnimatedBackground /> */}
      <Navbar />
      <main>
        {router}
      </main>
      <Footer />
      {/* <AnimatedBackground /> */}
    </MianContext.Provider>

  );
}

export default App;
