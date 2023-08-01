import { useEffect, useState } from "react";
import TodayDetails from "./TodayDetails";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { addFavouriteCities, removeFavouriteCities } from '../redux/weather';
import { useDispatch } from "react-redux";
import { useUserAuth } from "../context/UseAuthContex";

const Today = (props) => {
    const { today, city, favourites, redirectToDetailsPage, groups} = props;
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(favourites.includes(city));
    const { user } = useUserAuth();

    useEffect(() => {
      setIsFavourite(favourites.includes(city));
    }, [city]);

    const addFav = () => {
        if (!isFavourite){
            dispatch(addFavouriteCities(city))
            setIsFavourite(true)
           }
           else {
            dispatch(removeFavouriteCities(city))
            setIsFavourite(false)
           }
    }
    return (
      <div className="today-card">
        <h1 className="city-name">{city}</h1>
        <div className="flex today-card-div">
        <TodayDetails today={today} showDetails={true}/>
        <button type="button" onClick={() => redirectToDetailsPage(groups)}>See More</button>
        {user && (
        <div>
          {!isFavourite ?  <AiOutlineHeart className="heart-icon" onClick={addFav}/> : <AiTwotoneHeart className="heart-icon" onClick={addFav}/>}
        </div>
      )}
        </div>
      </div>
    );
  };
  
  export default Today;
  