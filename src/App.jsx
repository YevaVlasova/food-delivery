import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Profile from './views/Profile'
import Home from './views/Home'
import Header from './components/UI/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
