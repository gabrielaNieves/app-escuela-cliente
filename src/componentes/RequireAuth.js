import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth)
    return(
        auth?.usuario
                ? <Outlet/>
                : <Navigate to='/ingresar' state={{from: location}} replace />
    );
}

export default RequireAuth;