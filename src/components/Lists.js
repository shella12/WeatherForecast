import { useNavigate } from "react-router-dom";
import Today from "./Today";

const Lists = (props) => {
  const navigate = useNavigate();
  const { weather, favourites } = props;
  const forecast = weather.length !== 0 ? weather.list : null;
  const city = weather.city.name;
  const today = weather.list[0];
  
  const groupItems = (array) => {
    return array.reduce((groups, item) => {
      const name = item["dt_txt"].split(" ")[0];
      const group = groups[name] || (groups[name] = []);
      group.push(item);
      return groups;
    }, []);
  };
  const groups = groupItems(forecast);
  const redirectToDetailsPage = (groups) => {
    navigate("details/" + groups.city, { state: groups });
  };

  return (
    <>
      <Today today={today} city={city} favourites={favourites} redirectToDetailsPage={redirectToDetailsPage} groups={groups}/>
    </>
  );
};

export default Lists;
