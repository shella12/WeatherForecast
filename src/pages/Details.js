
import { useLocation, useNavigate } from "react-router-dom";
import List from "../components/list";
const Details = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
  
    const redirectToHome = () => {
      navigate("/");
    };
  
return(
<ul className="list-container">
        {state &&
          Object.values(state).map((day) => (
            <List
              key={day["dt"]}
              day={day}
            />
          ))}
      </ul>
);
}
export default Details;