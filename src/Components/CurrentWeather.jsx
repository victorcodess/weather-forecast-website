import "./CurrentWeather.css";
import { WiDayCloudy } from "react-icons/wi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const CurrentWeather = () => {
  return (
    <div className="current">
      <h1 className="current-temp">
        31<sup>°C</sup>
      </h1>
      <div className="location-date">
        <h2 className="location">Egbeda</h2>
        <h3 className="current-date">11:00 - Saturday, 10 December 2022</h3>
      </div>
      <div className="current-weather">
        {/* <WiDayCloudy className="current-weather__icon" /> */}

        <FontAwesomeIcon
          icon="fa-solid fa-cloud-sun"
          className="current-weather__icon"
        />
        <h3 className="current-weather__text">Haze</h3>
      </div>
    </div>
  );
};

export default CurrentWeather;
