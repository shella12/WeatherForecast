import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/weather";
import Lists from "../components/Lists";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather);
  const forecast = data.weather.length !== 0 ? data.weather[0].list : null;

  const inputLocation = (location) => {
    dispatch(getWeather(location));
  }; 

  return (
    <>
      <SearchBar inputLocation={inputLocation}/>
      <Lists forecast={forecast}/>
    </>
  );
};

export default Home;
