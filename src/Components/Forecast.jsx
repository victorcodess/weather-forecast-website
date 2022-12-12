import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Forecast.css"

const Forecast = () => {
  return (
    <div className="forecast">
      <h2 className="forecast-date">Nov 24</h2>
      <FontAwesomeIcon
        icon="fa-solid fa-cloud"
        className="forecast-weather__icon"
      />
      <h3 className="forecast-data">Humidity</h3>
      <h2 className="forecast-humidity">30%</h2>
    </div>
  );
};

export default Forecast;
