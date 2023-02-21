import React from 'react'
import "../styles/Card.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Entrada = () => {
 
    const [DataEntrada,setDataEntrada] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/entrada")
                setDataEntrada(res.data);
                console.log(res.data)
    
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])


    return(
        <>
         {
    DataEntrada.map((info,key)=>{
        return(
          <div className="card" key={key}>
            <h1>Entrada:</h1>
             <h1>{info.ValorEntrada}</h1>
          </div>
        )
      })
      }
        </>
    )
   
}

export default Entrada