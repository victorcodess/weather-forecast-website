import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Forecast.css";

const Forecast = ({ date, icon, value }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-date">{date}</h2>
      <FontAwesomeIcon
        icon={`fa-solid ${icon}`}
        className="forecast-weather__icon"
      />
      <h3 className="forecast-data">Humidity</h3>
      <h2 className="forecast-humidity">{value}%</h2>
    </div>
  );
};

export default Forecast;
