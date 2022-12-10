import "./CurrentWeather.css";
import { WiDayCloudy } from "react-icons/wi";

const CurrentWeather = () => {
  return (
    <div className="current">
      <h1 className="current-temp">
        31<sup>°C</sup>
      </h1>
      <div className="location-date">
        <h2 className="location">London</h2>
        <h3 className="current-date">06:09 - Monday, 9 September 2022</h3>
      </div>
      <div className="current-weather">
        <WiDayCloudy className="current-weather__icon" />
        {/* <h3 className="current-weather__text">Mostly Sunny</h3> */}
      </div>
    </div>
  );
};

export default CurrentWeather;
