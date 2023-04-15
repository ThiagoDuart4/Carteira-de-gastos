import React from 'react'
import "../styles/Header.css"
import { Outlet, Link } from "react-router-dom";
import Voltar from "../image/Voltar.png"
import Notificaçoes from "../image/notificacao.png"
const Header = () => {
  return (
        <header>
          <div className="logo">
            <span className='Amarelo'>Duart</span>
            <span>Consultoria</span>
          </div>
          <div className="notificacao">
           <img src={Notificaçoes} alt=""  className='icon'/>
           <Link  to="/"><img src={Voltar} alt="" /></Link>
          </div>

         
        </header>
  )
}

export default Header