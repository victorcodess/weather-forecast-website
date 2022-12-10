import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";

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

  // console.log(weather);

  return (
    <div className="App">
      <SearchBar />

      <CurrentWeather/>
      {/* {JSON.stringify(weather.current.temp_f)} */}
    </div>
  );
}

export default App;
