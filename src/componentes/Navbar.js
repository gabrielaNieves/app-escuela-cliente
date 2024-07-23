import logo from "../assets/logo.png"
import { Outlet, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="sticky top-0 z-50 py-3 drop-shadow bg-slate-50 border-b border-neutral-100">
        <div className="max-container justify-around px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <Link to='/'>
                <img className="h-14 w-14" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl capitalize font-bold text-blue-700" >E.A. RAIMUNDO PERNALETE</h1>
            </div>
            <div className="hidden lg:flex justify-center space-x-8 items-center">
            <Link to="/institucion" className="py-2 px-4 text-blue-700 font-medium border border-blue-700 rounded-md">
              Institución
            </Link>
            <Link
              to="/ingresar"
              className="shadow bg-blue-700 text-white font-medium py-2 px-3 rounded-md"
            >
              Ingresar
            </Link>
          </div>
            </div>
        </div>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Navbar