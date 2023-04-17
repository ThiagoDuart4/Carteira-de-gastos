
import "../styles/Header.css"
import { Outlet, Link } from "react-router-dom";
import Notificacao from './Notificacao';
import Voltar from "../image/Voltar.png"
const Header = (notificacao) => {

  return (
    <header>
      <div className="logo">

        <span className='Amarelo'>Duart</span>
        <span>Consultoria</span>
      </div>
      <div className="Nav">
        <Notificacao />
        <Link to="/"><img src={Voltar} alt="" id='Voltar' /></Link>
      </div>

    </header>


  )
}

export default Header