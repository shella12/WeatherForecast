import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/weather";
import Lists from "../components/Lists";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

const Home = () => {
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

  return (
    <>
    <Header />
      <SearchBar inputLocation={inputLocation}/>
      {weather?
      <Lists weather={weather} favourites={favourites}/>:<p>Nothing to display</p>
      }
    </>
  );
};

export default Home;
