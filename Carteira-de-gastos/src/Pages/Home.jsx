import Header from "../components/Header";
import Entrada from "../components/Entrada";
import Saida from "../components/Saida";
import Inputs from  "../components/InputsCard";
import Historico from "../components/Historico";
import "../styles/App.css"

function App() {
  return (
 <>
   
    <div className="App">
        <Header/>
        <main>
             <section> <Inputs/> </section>  
                    
             <section><Historico/></section>          

        </main>
      
       
    </div>
    </>
  );
}

export default App;
