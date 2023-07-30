import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/weather";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'

const Favorite = () => {
  const favourites = useSelector((state) => state.weather.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputLocation = (location) => {
    dispatch(getWeather(location));
    navigate("FavList/" + location, { state: location });
  };


  return (
   <>
   <Header />
    <ul className="fav-list-container">
      {favourites &&
        favourites.map((cityName) => (
          <button onClick={() => inputLocation(cityName)}>{cityName}</button>
        ))}
    </ul>
   </>
  );
};
export default Favorite;
