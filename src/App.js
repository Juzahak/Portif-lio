import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Contato from "./componentes/Contato/Contato";
import Intro from "./componentes/introdução/Intro";
import Portifolio from "./componentes/portifolio/Portifolio";
import Testemunhos from "./componentes/Testemunhos/Testemunhos";
import Trabalhos from "./componentes/Trabalhos/Trabalhos";
import './app.scss'
import { useState } from 'react';
import Menu from "./componentes/Menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Cabecalho menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections" >
      <Intro />
      <Portifolio />
      <Trabalhos />
      <Testemunhos />
      <Contato />
      </div> 
    </div>
  );
}

export default App;
 