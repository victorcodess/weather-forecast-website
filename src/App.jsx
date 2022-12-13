import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=04c60fe1f2624fff885223022220912&q=Egbeda, Lagos&days=2&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWeather(data);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

    const currentData = {
    temp: weather?.current?.temp_c,
    location: weather?.location?.name,
    date: weather?.location?.localtime,
    icon: weather?.current?.condition?.icon,
    text: weather?.current?.condition?.text,
  }

  console.log(weather?.current?.temp_c);

  return (
    <div className="App">
      <SearchBar />
      <div className="grid-two">
        <div className="grid-one">
          <CurrentWeather weatherData={currentData} />
          <div className="grid-three">
            <Forecast date="Dec 10" icon="fa-cloud" value="30%" />
            <Forecast date="Dec 11" icon="fa-sun" value="36%" />
            <Forecast date="Dec 12" icon="fa-cloud-rain" value="20%" />
            <Forecast date="Dec 13" icon="fa-snowflake" value="15%" />
          </div>
        </div>
        <div className="grid-four">
          <TempChart />
          <Footer />
        </div>
      </div>

      {/* {JSON.stringify(weather.current.temp_c)} */}
    </div>
  );
}

export default App;
