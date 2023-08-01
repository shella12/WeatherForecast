import brightSunny from '../assets/bright-sunny.png';
import sunny from '../assets/sunny.png';
import raining from '../assets/raining.png';
import cloudy from '../assets/cloudy.png';
import cloudy2 from '../assets/cloudy2.png';


const WeatherIcon = (props) => {
    const { day, clouds, temp } = props;
    const srcP = () => {
        if (day === 'Rain') return raining;
        else if (day === 'Clear'&& temp > 30)return brightSunny;
        else if (day === 'Clear'&& temp < 30)return sunny;
        else if (day === 'Clear') return brightSunny;
        else if (day === 'Clouds' && clouds >= 85) return cloudy2;
        else if (day === 'Clouds' && clouds < 85) return cloudy;
        else return sunny;
      };
    return (
      <img src={srcP()} alt="weather" className='weather-icon'/>
    );
  };
  
  export default WeatherIcon;
  