import React from 'react'
import "../styles/OverlayHistorico.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import lixeira from "../image/lixeira2.png"
import FecharImg from "../image/fechar.png"

const OverlayHistorico = () => {

    const NavBarHistorioco = () => {
        const info = document.querySelector(".InfoHistorico")
        const nav = document.querySelector(".NavBarHistorioco")
        nav.style.height = "100vh"
        info.style.display = "block"

    }

    const Fechar = () => {
        const info = document.querySelector(".InfoHistorico")
        const nav = document.querySelector(".NavBarHistorioco")
        nav.style.height = "0%";
        info.style.display = "none"
    }

    const [Data, setData] = useState([])
    const [api, setApi] = useState('todos')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://backend-kappa-five.vercel.app/${api}`)
                setData(res.data);

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [api])

    const DelData = async (id) => {
        console.log(id)
        try {
            await axios.delete(`https://backend-kappa-five.vercel.app/${api}/` + id)
            window.location.reload()
        } catch (err) {
            console.log(err)

        }
    }

    return (
        <div className='OverlayHistorico'>
            <div className="tituloHistorico">
                <h1>Resumo financeiro</h1>
                <button onClick={NavBarHistorioco}>Abrir</button>
            </div>

            <div className="NavBarHistorioco">
                <div className="InfoHistorico">
                    <section>
                    </section>
                    <section className='Info'>
             
                        <div className="MapInfo">
                            <div className="InfoTitulo">
                              
                                <h1>Resumo financeiro</h1>
                                <div className="button"> <button value="todos" onClick={(e) => {
                                    setApi(e.target.value)

                                }}>Todos</button>
                                    <button value="ValorEntrada" onClick={(e) => {
                                        setApi(e.target.value)
                                    }}>Entrada</button>
                                    <button value="ValorSaida" onClick={(e) => {
                                        setApi(e.target.value)
                                    }}>Saida</button>
                     
                                    
                                    </div>
               
                                    <img  src={FecharImg}onClick={Fechar} id='ButtonFechar'/>
                               
                            </div>
                           
                            {
                                Data.map((info, key) => {
                                    return (
                                        <div className="cardResp" key={key}>
                                            <section>
                                                <h1>{info.descricao}</h1>
                                                <h3>R${info.ValorEntrada}</h3>
                                            </section>
                                            <section>
                                                <h3>{info.tipo}</h3>
                                                <img src={lixeira} alt="" onClick={() => DelData(info.id)} />
                                            </section>

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default OverlayHistorico