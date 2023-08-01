import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UseAuthContex";

const ProtectedRoute = ({children}) => {
const { user } = useUserAuth();
if (!user) {
    return <Navigate to="/Login"/>
}
else 
return children;
}

export default ProtectedRoute;