import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/weather";
import Lists from "../components/Lists";
import SearchBar from "../components/SearchBar";
import { useUserAuth } from "../context/UseAuthContex";
import { NavLink } from "react-router-dom";

const Home = () => {
  const {user, logOut} = useUserAuth();
  const dispatch = useDispatch();
  const weather= useSelector((state) => state.weather.weather);
  const favourites= useSelector((state) => state.weather.favourites);
  const isLoading = useSelector((state) => state.weather.loading);
  const isError = useSelector((state) => state.weather.error);
  
  if (isLoading){
    <h1>Loading...</h1>
  }
  if(isError) {
    <h1>{isError}</h1>
  }
 
  const inputLocation = (location) => {
    dispatch(getWeather(location));
  }; 
  const handleLogout = () => {
    logOut();
    localStorage.removeItem('User');
  }; 

  return (
    <>
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
      <SearchBar inputLocation={inputLocation}/>
      {weather?
      <Lists weather={weather} favourites={favourites}/>:<p>Nothing to display</p>
      }
    </>
  );
};

export default Home;
