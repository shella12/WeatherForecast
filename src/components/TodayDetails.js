import WeatherIcon from "./Weather-icon";

const TodayDetails = (props) => {
  const { today, showDetails } = props;
  const dateTime = today["dt_txt"].split(" ");
  const time = Number(dateTime[1].substring(0, 2))
  return (
    <div className="flex column today-weather-card">
      <div className={showDetails ? `flex row` : `flex column`}>
        <WeatherIcon
          day={today.weather[0].main}
          clouds={today["clouds"]["all"]}
          temp={today["main"]["temp"] - 273.15}
        />
        <h2>{(today["main"]["temp"] - 273.15).toFixed(2)} °C</h2>
        {(showDetails)? (
          <>
            <div className="flex column">
              <p>Precipitation: {today["clouds"]["all"]}%</p>
              <p>Humidity: {today["main"]["humidity"]}%</p>
              <p>Pressure: {today["main"]["pressure"]} hPa</p>
              <p>Wind: {today["wind"]["speed"]} km/h</p>
            </div>
            <div className="flex column">
              <h2>Weather</h2>
              <p>{dateTime[0]}</p>
              <p>{time >= 12 ?  <span>{time}:00 pm</span>:  <span>{time}:00 am</span>}</p>
              <p>{today.weather[0].main}</p>
            </div>
          </>
        ) : (
          <p>{time >= 12 ?  <span>{time}:00 pm</span>:  <span>{time}:00 am</span>}</p>
        )}
      </div>
    </div>
  );
};

export default TodayDetails;
