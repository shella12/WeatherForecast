import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/weather";
import Lists from "../components/Lists";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

const Home = () => {
  const dispatch = useDispatch();
  const weather= useSelector((state) => state.weather.weather);
  const favourites= useSelector((state) => state.weather.favourites);

  const inputLocation = (location) => {
    dispatch(getWeather(location));
  }; 

  return (
    <>
    <Header />
      <SearchBar inputLocation={inputLocation}/>
      {weather?
      <Lists weather={weather} favourites={favourites}/>:<p className="empty-text">Nothing to display</p>
      }
    </>
  );
};

export default Home;
