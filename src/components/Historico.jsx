import React from 'react'
import "../styles/Historico.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Historico = () => {
  const [Data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/gastos")
            setData(res.data);
            console.log(res.data)

        }catch(err){
            console.log(err)
        }
    }
    fetchData()
}, [])


  return (
   <div className="Historico">
    <div className="historico-title">
      <h3>descricao</h3>
      <h3>Valor Entrada</h3>
      <h3>Valor Saida</h3>
      <h3>tipo</h3>
    </div>


        {
          Data.map((info,key)=>{
            return(
              <div className="card-historico" key={key}>
                <div className="descricao">
                 <ul>
                  <li>{info.descricao}</li>
                 </ul>
                </div>
               
              <div className="ValorEntrada">
              <ul>
                  <li>{info.ValorEntrada}</li>
                 </ul>
              </div>
                
              <div className="ValorSaida">
              <ul>
                  <li>{info.ValorSaida}</li>
                 </ul>
              </div>
                
              <div className="tipo">
              <ul>
                  <li>{info.tipo}</li>
                 </ul>
              </div>
                
              </div>
            )
          })
        }
    
   </div>
  )
}

export default Historico