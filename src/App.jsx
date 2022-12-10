import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import { faker } from "@faker-js/faker";
// import LineChart from "./Components/TempChart";

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
  const firstRandom = faker.datatype.number({ min: 0, max: 1000 });

  const data = [
    { label: 'January', value: 100 },
    { label: 'February', value: 120 },
    // ...
  ];

  return (
    <div className="App">
      <SearchBar />
      <CurrentWeather />
      {firstRandom}
      {/* <LineChart data={data} /> */}
      <TempChart/>
      {/* {JSON.stringify(weather.current.temp_f)} */}
    </div>
  );
}

export default App;
