// import { useNavigate } from "react-router-dom";
import List from "./list";

const Lists = (props) => {
//   const navigate = useNavigate();
  const { forecast } = props;
//   const redirectToDetailsPage = (city) => {
//     navigate("details/" + city.id, { state: city });
//   };
  
  return (
    <ul className="list-container">
      {forecast &&
        forecast.map((day) => (
          <List
            key={day["dt"]}
            className="list"
            day={day}
            // redirectToDetailsPage={redirectToDetailsPage}
          />
        ))}
    </ul>
  );
};

export default Lists;
