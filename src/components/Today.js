import TodayDetails from "./TodayDetails";

const Today = (props) => {
    const { today, city } = props;
    return (
        <div className="today-card">
        <h1 className="city-name">{city}</h1>
        <TodayDetails today={today} showDetails={true}/>
        </div>
    );
  };
  
  export default Today;
  