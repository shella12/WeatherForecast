// import { useNavigate } from "react-router-dom";
import List from "./list";
import Today from "./Today";

const Lists = (props) => {
  //   const navigate = useNavigate();

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
  //   const redirectToDetailsPage = (city) => {
  //     navigate("details/" + city.id, { state: city });
  //   };

  return (
    <>
      <Today today={today} city={city} favourites={favourites}/>
      <ul className="list-container">
        {groups &&
          Object.values(groups).map((day) => (
            <List
              key={day["dt"]}
              day={day}
              // redirectToDetailsPage={redirectToDetailsPage}
            />
          ))}
      </ul>
    </>
  );
};

export default Lists;
