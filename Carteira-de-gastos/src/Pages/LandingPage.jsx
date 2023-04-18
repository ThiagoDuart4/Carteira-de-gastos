import React from 'react'
import "../styles/LandingPage.css"
import Controle from "../image/Controle.png"
import { Outlet, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="blur">
        
      </div>
    <div className="LandingPage">

        <section >
            <div className="info">
            <h3>Chega de perder o</h3>
            <h1>Controle!</h1>
            <span>contate nossa consultoria de performace</span>
            <Link to="/home">Iniciar</Link>
            </div>
          
        </section>
        <section>
            <img src={Controle} alt="" />
        </section>
    </div>
    </>
    
  )
}

export default LandingPage