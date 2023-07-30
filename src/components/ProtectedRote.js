import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : '';
if (!user) {
    return <Navigate to="/Login"/>
}
else 
return children;
}

export default ProtectedRoute;