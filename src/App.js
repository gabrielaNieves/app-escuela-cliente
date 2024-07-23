import Inicio from "./componentes/Inicio";
import Login from "./componentes/Login";
import { Routes, Route } from "react-router-dom";
import Institucion from "./componentes/Institucion";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route exact path='/' element={<Inicio/>} />
        <Route path='/institucion' element={<Institucion/>}/>
      </Route>
      <Route path='/ingresar' element={<Login/>}/>
    </Routes>
  );
}

export default App;
