import Header from "./components/Header";
import Card from "./components/Card";
import Entrada from "./components/Entrada";
import Saida from "./components/Saida";
import Inputs from  "./components/InputsCard";
import Historico from "./components/Historico";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
        <div className="cards">
           <Entrada/>
           <Saida/>
           <Card/>
           
        </div>
                
            
            <Inputs/>
            <Historico/>
        </main>
      
       
    </div>
  );
}

export default App;
