const List = (props) => {
  const { day } = props;
  
  return (
    <li>
            {day["dt_txt"]}: Temp: {day["main"]["temp"] / 10}°C, Clouds:{" "}
            {day["clouds"]["all"]}%, Pressure: {day["pressure"]}hPa, Humidity:{" "}
            {day["humidity"]}%
            </li>

  );
};

export default List;
