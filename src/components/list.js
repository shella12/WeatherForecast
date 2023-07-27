import Cards from "./cards";

const List = (props) => {
  const { day } = props;
  const dt = new Date(`${day[0]["dt_txt"]}`);
  const dayOfWeek = (val) => {
    switch(val){
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Not a day"
    }
  }

  return (
    <li>
      <h3 className="day-name">{dayOfWeek(dt.getDay())}</h3>
     <ul className="flex row card-container">
        {day &&
          day.map((day) => (
            <Cards
              key={day["dt"]}
              day={day}
            />
          ))}
      </ul>
    </li>
  );
};

export default List;
