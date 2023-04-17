import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ImgNotificaçoes from "../image/notificacao.png"
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
            const res = await axios.get("http://localhost:8800/todos")
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
            const res = await axios.get("http://localhost:8800/notificacao")
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
                    <button onClick={() => {
                        Fechar()
                    }}> fechar</button>
                    {
                        Data.map((data, key) => {
                            return (

                                <div className="Card" key={key}>
                                    <h2>Voce deu uma {data.tipo}</h2>
                                    <span>descrição:{data.descricao}</span>
                                    <h3>Valor:{data.ValorEntrada}</h3>
                                </div>

                            )
                        })
                    }  </div>
            </div>
        </>
    )
}

export default Notificacao