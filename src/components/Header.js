import { NavLink } from "react-router-dom";
import { useUserAuth } from "../context/UseAuthContex";

const Header = () => {
    const {user, logOut} = useUserAuth();
    const handleLogout = () => {
        logOut();
        localStorage.removeItem('User');
      }; 
  return (
    <header className="App-header">
        <div>
        <h1>Weather App</h1>
       { !user ? <nav>
        <NavLink to="/Login" className="auth-btn">Login</NavLink>
        <NavLink to="/Signup" className="auth-btn sign-btn">Sign Up</NavLink>
       </nav>: <nav>
       <button onClick={handleLogout} className="auth-btn">Log out</button>
       <NavLink to="/Favourite" className="auth-btn">My Favorite</NavLink>
       </nav>}
        </div>
      </header>
  );
};

export default Header;
