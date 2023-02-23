import React from 'react'
import "../styles/Header.css"
import { Outlet, Link } from "react-router-dom";
import Voltar from "../image/Voltar.png"
const Header = () => {
  return (
        <header>
          <div className="logo">
            <span className='Amarelo'>Duart</span>
            <span>Consultoria</span>
          </div>

          <Link  to="/"><img src={Voltar} alt="" /></Link>
        </header>
  )
}

export default Header