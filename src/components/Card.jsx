import React from 'react'
import "../styles/Card.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Card = () => {

  const [Data,setData] = useState([])



  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/total")
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
            <h1>Total:</h1>
             <h1>{info.ValorTotal}</h1>
          </div>
        )
      })
      }
</>
    
      
  
  )
}

export default Card