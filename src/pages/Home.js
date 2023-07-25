import { useDispatch, useSelector } from "react-redux";
import { getWeather } from '../redux/weather';

const Home = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.weather);
    const forecast = weather.length !== 0?weather[0].list:null;
    console.log(weather.length);
    console.log(forecast,"forecast");
  return (
    <>
    {forecast !== null?<ul>
          {forecast.map((day) => (
            <li key={day["dt"]}>
              {day["dt_txt"]}:
              Temp: {day["main"]["temp"]/10}°C, Clouds: {day["clouds"]["all"]}%, Pressure: {day["pressure"]}hPa, Humidity: {day["humidity"]}%
            </li>
          ))}
        </ul>:<p>Nothing to show</p>}
     <button onClick={() =>  dispatch(getWeather('Islamabad'))}>dispatch</button>
    </>
  );
};

export default Home;
