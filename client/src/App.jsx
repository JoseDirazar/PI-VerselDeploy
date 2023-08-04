import './App.css';
import LandingPage from "./components/LandingPage"
import Detail from "./components/Detail"
import Cards from "./components/Cards"
import CreateVideogameForm from "./components/CreateVideogameForm"
import NavBar from "./components/NavBar"
import About from "./components/About"

import {Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';

import { addVideogames } from './redux/actions';
import axios from "axios"

export default function App() {
  const [access, setAccess] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  function goingHome() {   
    setAccess(true)
    navigate('/home')   
  }

  useEffect(() => {
    !access & navigate('/')
  })

  useEffect(() => {
    dispatch(addVideogames()) 
  }, [])

  useEffect(() => {
    (async function inEffect() {
      try {
        await axios.get('https://rightful-finger-production.up.railway.app/genres')
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  
  return (
    <div className="App">
      {(location.pathname !== "/") && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage goingHome={goingHome} />}/>
        <Route path="/home" element={<Cards  />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateVideogameForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}


