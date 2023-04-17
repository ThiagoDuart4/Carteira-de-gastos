import React from 'react'
import "../styles/Historico.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import lixeira from "../image/lixeira.png"

const Historico = () => {
  const [Data, setData] = useState([])
  const [api,setApi] = useState('todos')

  console.log(Data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/${api}`)
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
      await axios.delete(`http://localhost:8800/${api}/`+ id)
      window.location.reload()
    } catch (err) {
      console.log(err)

    }
  }

  return (
    <div className="Historico">

      <div className="titulo"> <h1>Resumo financeiro</h1>
        <button value="todos" onClick={(e) => {
      setApi(e.target.value)
          
        }}>Todos</button>
        <button value="ValorEntrada"  onClick={(e) => {
         setApi(e.target.value)
        }}>Entrada</button>
        <button value="ValorSaida" onClick={(e) => {
          setApi(e.target.value)
        }}>Saida</button></div>

      {
        Data.map((info, key) => {
          return (
            <div className="card-historico" key={key}>
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
  )
}

export default Historico