import React from 'react'
import "../styles/InputsCard.css"
import { useState } from 'react'
import axios from 'axios'

const InputsCard = () => {


 

  const [DataInput, setDataInput] = useState({
    descricao:"",
  ValorEntrada:"",
   ValorSaida:"",
   tipo:""
});
  


const formChange = (e) =>{
  setDataInput((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const btnEnviar = async e=>{
 
  e.preventDefault()
  try {
     await axios.post("http://localhost:8800/gastos",DataInput  ) 
      
  } catch (err) {
      console.log(err)
  }


}


  return (
   <div className="InputsCard">
    <label htmlFor="descricao"> Descrição</label>
    <input type="text" name='descricao'  onChange={formChange}  />

    <label htmlFor="Valor Entrada"> Valor Entrada</label>
    <input type="text" name='ValorEntrada' onChange={formChange}/>

    <label htmlFor="Valor Saida"> Valor Saida</label>
    <input type="text" name='ValorSaida' onChange={formChange}/>
    
    <label htmlFor="tipo">Tipo</label>
    <div className="selectdioBtn">
    <select name="tipo" id="SelectEntrada" onChange={formChange} >
      <option value="entrada">Entrada</option>
      <option value="saida">Saida</option>
    </select>
   
    </div>
   
  <button type="submit" onClick={btnEnviar}> Enviar</button>
   </div>
  )
}

export default InputsCard