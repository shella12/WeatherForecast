import { useState } from "react";
import TodayDetails from "./TodayDetails";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { addFavouriteCities } from '../redux/weather';

const Today = (props) => {
    const { today, city, favourites} = props;
    const [isFavourite, setIsFavourite] = useState(favourites.filter(item => item === city));
    const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : '';
    const addFav = () => {
     if (!isFavourite){

     }
    }
    return (
        <div className="today-card">
        <h1 className="city-name">{city}</h1>
        <TodayDetails today={today} showDetails={true}/>
       { user && <AiOutlineHeart className="heart-icon" onClick={addFav}/>}
        </div>
    );
  };
  
  export default Today;
  