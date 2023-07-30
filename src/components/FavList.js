import TodayDetails from "../components/TodayDetails";
import { useSelector } from "react-redux";

const FavList = () => {
  const weather = useSelector((state) => state.weather.weather) ?? null;
  return (
    <>
      {weather && (
        <div className="flex column fav-detail">
        <button className="back-btn">🔙</button>
        <div className="today-card">
          <h1>{weather.city.name}</h1>
          <TodayDetails today={weather.list[0]} showDetails={true} />
        </div>
        </div>
      )}
    </>
  );
};
export default FavList;
