import { Navigate } from "react-router-dom";
// import { useUserAuth } from "../context/UseAuthContex";

const ProtectedRoute = ({children}) => {
// const { user } = useUserAuth();
const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : '';
console.log("user", user);
if (!user) {
    return <Navigate to="/Login"/>
}
else 
return children;
}

export default ProtectedRoute;