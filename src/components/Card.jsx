import React from 'react'
import "../styles/Card.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Card = () => {

  const [Data,setData] = useState([])



  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get("https://backend-kappa-five.vercel.app/total")
            setData(res.data);
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
      Data.map((info,key)=>{
        return(
          <div className="card" key={key}>
            <div className="card-info">
            <h1>Total:</h1>
            <span>valor referente ao saldo</span>
            </div>
           
            <h2>{info.ValorTotal}R$</h2>
             
          </div>

          
        )
      })
      }
</>
    
      
  
  )
}

export default Card