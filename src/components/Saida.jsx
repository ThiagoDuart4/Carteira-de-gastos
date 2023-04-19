import React from 'react'
import "../styles/Card.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Saida = () => {

    const [DataSaida,setDataSaida] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://backend-kappa-five.vercel.app/saida")
                setDataSaida(res.data);
                console.log(res.data)
    
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

  return (
    <>
    {
DataSaida.map((info,key)=>{

   return(
     <div className="card" key={key}>
      <h1>Saida:</h1>
        <h1>{info.ValorSaida}</h1>
     </div>
   )
 })
 }
   </>
  )  
  
    
}

export default Saida