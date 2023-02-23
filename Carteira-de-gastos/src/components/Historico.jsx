import React from 'react'
import "../styles/Historico.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import lixeira from "../image/lixeira.png"

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


const DelData =async (id)=>{
  try {
    await axios.delete("http://localhost:8800/gastos/"+id)
    window.location.reload()
} catch (err) {
    console.log(err)
    
}
}



  return (
   <div className="Historico">
    
      <h1>Resumo financeiro</h1>


        {
          Data.map((info,key)=>{
            return(
              <div className="card-historico" key={key}>
                <div className="descricao">
                  <h3>descrição</h3>
                 <ul>
                  <li>{info.descricao}</li>
                 </ul>
                </div>
               
              <div className="ValorEntrada">
              <h3>Entrada</h3>
              <ul>
                  <li>{info.ValorEntrada}</li>
                 </ul>
              </div>
                
              <div className="ValorSaida">
              <h3>Saida</h3>
              <ul>
                  <li>{info.ValorSaida}</li>
                 </ul>
              </div>
                
              <div className="tipo">
              <h3>Tipo</h3>
              <ul>
                  <li>{info.tipo}</li>
                 </ul>
                 
              </div>
              
              <img src={lixeira} alt=""  onClick={()=>DelData(info.id) }/>
              </div>
            )
          })
        }
    
   </div>
  )
}

export default Historico