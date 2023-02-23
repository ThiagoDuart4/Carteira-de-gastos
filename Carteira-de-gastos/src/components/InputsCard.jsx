import React from "react";
import "../styles/InputsCard.css";
import { useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const InputsCard = () => {
  const [DataInput, setDataInput] = useState({
    descricao: "",
    ValorEntrada: "",
    ValorSaida: "",
    tipo: "",
  });

  const formChange = (e) => {
    setDataInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const btnEnviar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/gastos", DataInput);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="InputsCard">
      <div className="Infos-InputsCard">
        
        <div className="desc">
          <div className="info">
            <label htmlFor="descricao"> Descrição</label>
            <textarea
              name="descricao"
              id=""
              cols="40"
              rows="8"
              onChange={formChange}
            ></textarea>
          </div>
        </div>

        <div className="Valores">
          {" "}
          <div className="info">
            <label htmlFor="Valor Entrada">Entrada</label>
            <input type="text" name="ValorEntrada" onChange={formChange} />
          </div>
          <div className="info">
            <label htmlFor="Valor Saida">Saida</label>
            <input type="text" name="ValorSaida" onChange={formChange} />
          </div>
        </div>

        <div className="Envios">
          <div className="info">
            <div className="tipo">
              <label htmlFor="tipo">Tipo</label>
              <select name="tipo" id="SelectEntrada" onChange={formChange}>
              <option value="">Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
              </select>
            </div>
          </div>

          <div className="info">
            <button type="submit" onClick={btnEnviar}>
              {" "}
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* 
      <div className="Infos-InputsCard">
      
      
    


   
       
        </div>
        
    </div>
      </div>
      */}

      <Card />
    </div>
  );
};

export default InputsCard;
