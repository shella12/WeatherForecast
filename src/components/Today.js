import { useState } from "react";
import TodayDetails from "./TodayDetails";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { addFavouriteCities, removeFavouriteCities } from '../redux/weather';
import { useDispatch } from "react-redux";

const Today = (props) => {
    const { today, city, favourites, redirectToDetailsPage, groups} = props;
    const dispatch = useDispatch();
    const favCity =  favourites.filter(item => item === city );
    const [isFavourite, setIsFavourite] = useState(favCity[0]? favCity[0]: null);
    const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : '';
    const addFav = () => {
        if (!isFavourite){
            dispatch(addFavouriteCities(city))
            setIsFavourite(city)
           }
           else {
            dispatch(removeFavouriteCities(city))
            setIsFavourite(null)
           }
    }
    return (
        <div className="today-card" onClick={() => redirectToDetailsPage(groups)}>
        <h1 className="city-name">{city}</h1>
        <TodayDetails today={today} showDetails={true}/>
        {user && (
        <div>
          {!isFavourite ?  <AiOutlineHeart className="heart-icon" onClick={addFav}/> : <AiTwotoneHeart className="heart-icon" onClick={addFav}/>}
        </div>
      )}
        </div>
    );
  };
  
  export default Today;
  