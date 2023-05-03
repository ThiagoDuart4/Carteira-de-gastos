import React from 'react'
import { useEffect, useState } from 'react'
import Pontos from "../image/pontos.png"
import  PayPal from "../image/paypal.png"
import  "../styles/cartao.css"
import axios from 'axios'

const Cartao = () => {

  const [Data,setData] = useState([])

    useEffect(() =>{ const fetchData = async ()=>{
        try{
            const res = await axios.get("https://backend-kappa-five.vercel.app/total")
            setData(res.data[0]);

        }catch(err){
            console.log(err)
        }
    }
    fetchData()},[])
 
  return (
    <div className="cartao">
        <div className='info'>
            <div className="titulo">
                <h3>Saldo</h3>
                <span>Hoje, 8 de julho de 2023</span>
            </div>

            <img src={Pontos} alt="" />
        </div>
        <div className='Saldo'>
        <div className="titulo">
            <h1>R${Data.total}</h1>
                <p>Aumento de 2% relacionado ao mes passado</p>
            </div>

            <img src={PayPal} alt="" />
        </div>
    </div>
  )
}

export default Cartao