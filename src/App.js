import Inicio from "./componentes/Inicio";
import Login from "./componentes/Login";
import Institucion from "./componentes/Institucion";
import Navbar from "./componentes/Navbar";
import RequireAuth from "./componentes/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import { Routes, Route } from "react-router-dom";
import Layout from "./contenedores/Layout";

function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route exact path='/' element={<Inicio/>} />
        <Route path='/institucion' element={<Institucion/>}/>
      </Route>
      <Route path='/ingresar' element={<Login/>}/>

      <Route element={<RequireAuth/>}>
      <Route path="/Admin/*" element={<Layout/>}/>
     </Route>
    </Routes>
    </AuthProvider>
    
  );
}

export default App;
