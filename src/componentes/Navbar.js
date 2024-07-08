import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 drop-shadow bg-slate-50 border-b border-neutral-100">
        <div className="max-container justify-around px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-14 w-14" src={logo} alt="logo"/>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl capitalize font-bold" >E.A. RAIMUNDO PERNALETE</h1>
            </div>
            <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-2 px-4 text-emerald-600 font-medium border border-emerald-600 rounded-md">
              Ingresar
            </a>
            <a
              href="#"
              className="shadow bg-emerald-600 text-white font-medium py-2 px-3 rounded-md"
            >
              Resgistrarse
            </a>
          </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar