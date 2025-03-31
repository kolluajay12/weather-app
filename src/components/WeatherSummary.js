import getWeather from "../api/weatherApi";
import { convertToFahrenheit} from "../weatherUtil";

const WeatherSummary = ({
    currentWeather: {temperature, weathercode},
    isCelsius,
}) => {
    return(
        <div>
           <h1>{isCelsius ? `${temperature} °C`: 
           `${convertToFahrenheit(temperature)} °F`} | Sunny</h1>
        </div>
    );
};
export default WeatherSummary;