import Navbar from "./componentes/Navbar";
import Mision from "./componentes/Mision";
import Vision from "./componentes/Vision";

function App() {
  return (
    <main className="relative min-h-screen">
       <Navbar/> {/* Componente barra de navegación */}
       <section className="xl:padding-1 wide:padding-r">
        <Mision/> {/* componente de misión */}
       </section>
       <section className="xl:padding-1 wide:padding-r padding-b">
        <Vision/> {/* componente de visión*/}
       </section>
    </main>
   
  );
}

export default App;
