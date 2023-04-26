import Header from "../components/Header";
import Inputs from  "../components/InputsCard";
import Historico from "../components/Historico";
import "../styles/App.css"
import { useState } from "react";



function App() {

 const [notificacao,setNotificacao] = useState()

 const handleNoti = (noti) => {
setNotificacao(noti)
 }
 

  return (
 <>
   
    <div className="App">
     
        <Header notificacao={notificacao}/>
        <main>
             <section id="Resp" > <Inputs handleNoti ={handleNoti}/> </section>  
                  
             <section ><Historico/></section>          

        </main>

    </div>
    </>
  );
}

export default App;
