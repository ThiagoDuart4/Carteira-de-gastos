import React, { useContext } from "react";
import "../styles/InputsCard.css";
import style from "../styles/InputsCard.css";
import { useState } from "react";
import axios from "axios";
import Cartao from "../components/cartao";
import Enviar from "../image/enviar.png"



const InputsCard = ({handleNoti}) => {

  const [DataInput, setDataInput] = useState({
    descricao: "",
    Valor: "",
    tipo: "",
  });

  const formChange = (e) => {
    setDataInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const btnEnviar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-kappa-five.vercel.app/todos", DataInput);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
 console.log(DataInput)
  };

  return (
    <div className="InputsCard">
      <h1>Planejamento  <span>financeiro</span></h1>
      <Cartao />
      <form>
        <div className="Info">

        <div className="form-group">
        <input type="text" name="descricao" onChange={formChange} required />
       <label htmlFor="descricao">Descrição</label>
      </div>
      

          <select name="tipo" id="SelectTipo" onChange={formChange}>
            <option value="">Tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>

        </div>
        <div className="valor">
          <label htmlFor="Valor">Valor: <input type="number" name="Valor" onChange={formChange}/></label>
          <img src={Enviar} onClick={btnEnviar}></img>
        </div>

      </form>

    </div>
  );
};

export default InputsCard;
