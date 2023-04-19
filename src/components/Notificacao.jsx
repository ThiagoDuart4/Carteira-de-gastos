import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ImgNotificaçoes from "../image/notificacao.png"
import FecharImg from "../image/fechar.png"
import "../styles/Notificacao.css"

const Notificacao = () => {

    const [Data, setData] = useState([])

    const [notificacao, setNotificacao] = useState([])

    const NavBar = () => {
      const nav = document.querySelector(".NavBar")
      nav.style.width = "30%"
      setNotificacao("")
    }
  
    const Fechar = () => {
      const nav = document.querySelector(".NavBar")
      nav.style.width = "0%"
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("https://backend-kappa-five.vercel.app/todos")
            setData(res.data);
          } catch (err) {
            console.log(err)
          }
        }
        fetchData()
      }, [])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("https://backend-kappa-five.vercel.app/notificacao")
            setNotificacao(res.data[0]);
    
          } catch (err) {
            console.log(err)
          }
        }
        fetchData()
      }, [])

           
  
    return (
        <>

            <div className="notificacao">
                <span>{notificacao.notificacao}</span>
                <img src={ImgNotificaçoes} alt="" className='icon' value="Abrir" onClick={() => {
                    NavBar()
                }} />

            </div>

            <div className="NavBar">

                <div className="infoNoti" >
                    <img src={FecharImg} onClick={() => {
                        Fechar()
                    }} />
                    {
                        Data.map((data, key) => {
                            return (

                                <div className="Card" key={key}>
                                    <h1>{data.descricao}</h1>
                                    {data.tipo == 'entrada'?<p>Você fez um deposito de <span>R${data.ValorEntrada}</span></p> :<p> Você retirou <span>R${data.ValorEntrada}</span></p>}
                                </div>

                            )
                        })
                    }  </div>
            </div>
        </>
    )
}

export default Notificacao