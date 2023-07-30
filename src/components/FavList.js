import TodayDetails from "../components/TodayDetails";
import { useSelector } from "react-redux";

const FavList = () => {
  const weather = useSelector((state) => state.weather.weather) ?? null;
  const isLoading = useSelector((state) => state.weather.loading);

  if(isLoading){
    return <div class="loader"></div>
  }
  
  return (
    <>
      {!isLoading && weather && (
        <div className="flex column fav-detail">
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
