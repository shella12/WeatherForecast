import { NavLink } from "react-router-dom";
import { useUserAuth } from "../context/UseAuthContex";
import { AiTwotoneHeart } from "react-icons/ai";
import CurrentLocation from "./CurrentLocation";

const Header = () => {
  const { user, logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
    localStorage.removeItem("User");
  };
  return (
    <header className="App-header">
   
        <div className="header-content">
          <div className="flex column">
        <h1>Weather App</h1>
        <CurrentLocation />
          </div>
        {!user ? (
          <nav>
            <NavLink to="/Login" className="auth-btn line-under">
              Login
            </NavLink>
            <NavLink to="/Signup" className="auth-btn">
              Sign up for free
            </NavLink>
          </nav>
        ) : (
          <nav>
            <NavLink to="/Favourite" className="auth-btn flex fav-heart">
              <AiTwotoneHeart />
              My Favorite
            </NavLink>
            <button onClick={handleLogout} className="auth-btn line-under">
              Log out
            </button>
          </nav>
        )}
      </div>
           <div className="header-gradient">
      </div>
    </header>
  );
};

export default Header;
