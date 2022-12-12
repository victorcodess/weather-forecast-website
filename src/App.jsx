import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
  // const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "http://api.weatherapi.com/v1/current.json?key=04c60fe1f2624fff885223022220912&q=London&aqi=no"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setWeather(data);
  //     })
  //     .catch((err) => {
  //       // console.log(err.message);
  //     });
  // }, []);

  return (
    <div className="App">
      <SearchBar />
      <div className="grid-two">
        <div className="grid-one">
          <CurrentWeather />
          <div className="grid-three">
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
          </div>
        </div>
        <div className="grid-four">
          <TempChart />
          <Footer/>
        </div>
      </div>

      {/* {JSON.stringify(weather.current.temp_f)} */}
    </div>
  );
}

export default App;
