import React from "react";
import "../styles/InputsCard.css";
import style from "../styles/InputsCard.css";
import { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Cartao from "../components/cartao";
import Enviar from "../image/enviar.png"

const InputsCard = () => {
  const [DataInput, setDataInput] = useState({
    descricao: "",
    ValorEntrada: "",
    ValorSaida: "",
    tipo: "",
  });

  const [teste,setTeste] = useState(0)

  const formChange = (e) => {
    setDataInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const btnEnviar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/gastos", DataInput);
     
    } catch (err) {
      console.log(err);
    }
// ADICIONANDO NOTIFICAO
    setTeste( teste + 1)
  };
 console.log(teste)
  

  // INPUT

  // // const EffectLabel =()=>{
  //   const teste = document.querySelector("#label")
  //       teste.style.color = "#FFBD59"
  //       teste.style.transform = "translateY(-10px)"
  //       teste.style.fontSize = "0.8em"
  // }

  return (
    <div className="InputsCard">
      <h1>Planejamento  <span>financeiro</span></h1>
      <Cartao />
      <form>
        <div className="Info">

          <div className="Desc">
            <label htmlFor="descricao" id="label"> descrição</label>
            <input type="text" name="descricao" id="descricao" onChange={formChange} />
          </div>

          <select name="tipo" id="SelectTipo" onChange={formChange} required>
            <option value="">Tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>

        </div>
        <div className="valor">
          <label htmlFor="Valor Entrada">Valor: <input type="text" name="ValorEntrada" onChange={formChange}/></label>
          <img src={Enviar} onClick={btnEnviar}></img>
        </div>

      </form>

    </div>
  );
};

export default InputsCard;
