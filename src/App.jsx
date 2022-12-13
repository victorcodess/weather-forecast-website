import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { CurrentWeather, findIcon } from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
  const [weather, setWeather] = useState({});
  weather?.forecast?.forecastday.map((day) => day.day.condition.text);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=04c60fe1f2624fff885223022220912&q=Chicago&days=3&aqi=no&alerts=no`
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
  };

  const forecastDays = weather?.forecast?.forecastday;

  //const todayTemp = weather?.forecast?.forecastday[0]?.hour?.map(hour => { hour.temp_c })

  //const nineTemp = todayTemp.filter((temp) => { temp.findIndex() % 3 === 0 }).push(todayTemp[todayTemp.length - 1])

  // console.log(
  //   weather?.forecast?.forecastday.map((day) => day.day.condition.text)
  // );

  // console.log(forecastDays);

  // console.log(forecastData);

  const dateToWords = (date) => {
    // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    date = new Date(date);
    // const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();

    return `${month} ${dateNum}`;
  };

  return (
    <div className="App">
      <SearchBar />
      <div className="grid-two">
        <div className="grid-one">
          <CurrentWeather weatherData={currentData} />
          <div className="grid-three">
            {forecastDays?.map((day) => {
              return (
                <Forecast
                  key={day.date}
                  date={dateToWords(day.date)}
                  icon={findIcon(day.day?.condition?.text)}
                  value={day.day?.avghumidity}
                />
              );
            })}
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
