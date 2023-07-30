import { useDispatch, useSelector } from "react-redux";
import { getWeather, removeFavouriteCities } from "../redux/weather";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import Header from "../components/Header";

const Favorite = () => {
  const favourites = useSelector((state) => state.weather.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputLocation = (location) => {
    dispatch(getWeather(location));
    navigate("FavList/" + location, { state: location });
  };

  const removeFav = (city) => {
    dispatch(removeFavouriteCities(city));
  };
  return (
    <>
      <Header />
      <ul className="fav-list-container">
        {favourites &&
          favourites.map((cityName) => (
            <>
            <div>
            <button onClick={() => inputLocation(cityName)}>
              {cityName}{" "}
            </button>
              <AiTwotoneHeart
                className="heart-icon"
                onClick={() => removeFav(cityName)}
              />
            </div>
            </>
          ))}
      </ul>
    </>
  );
};
export default Favorite;
