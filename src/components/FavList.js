import TodayDetails from "../components/TodayDetails";
import { useSelector } from "react-redux";

const FavList = () => {
  const weather = useSelector((state) => state.weather.weather) ?? null;
  return (
    <li>
      {weather && (
        <>
          <h1>{weather.city.name}</h1>
          <TodayDetails today={weather.list[0]} showDetails={true} />
        </>
      )}
    </li>
  );
};
export default FavList;
