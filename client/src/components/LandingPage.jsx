import style from './CSS/LandingPage.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function LandingPage() {

    const navigate = useNavigate()

    function goingHome() {
        navigate('/home')
    }

    return(<div className={style.background}><div className={style.landingContainer}>
        <h1 className={style.h1}>Welcome to Freak-Games</h1>
        <p className={style.p}>Search any videogame you want from more than 500.000 games available on our App.</p>
        <button  onClick={goingHome} className={style.landingButton} >Explore Videogames</button>
    </div></div>)
}