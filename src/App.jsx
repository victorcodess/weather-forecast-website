import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { CurrentWeather, findIcon } from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // import the API key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  // Get user's location using the Geolocation API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => console.log(err)
    );
  }, []);

  // Fetch weather data from the weather API using latitude and longitude
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat}, ${lon}&days=3&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [lat]);

  // Fetch weather data from the weather API using location from the search bar
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [location]);

  // Store the current weather data in an object
  const currentData = {
    temp: weather?.current?.temp_c,
    location: weather?.location?.name,
    date: weather?.location?.localtime,
    icon: weather?.current?.condition?.icon,
    text: weather?.current?.condition?.text,
  };

  // Store the forecast data in an array
  const forecastDays = weather?.forecast?.forecastday;

  // Store the hourly temperature data in an array
  const temps = [];
  weather?.forecast?.forecastday[0].hour.map((hour) => {
    temps.push(hour.temp_c);
  });

  // Filter the hourly temperature data to get the temperature every 3 hours
  const eightTemps = temps.filter((_, i) => i % 3 === 0);

  // Add the last temperature to the array
  const nineTemps = [...eightTemps, temps[temps.length - 1]];

  // Convert the date to words
  const dateToWords = (date) => {
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
    const month = months[date.getMonth()];
    const dateNum = date.getDate();

    return `${month} ${dateNum}`;
  };

  return (
    <div className="App">
      <SearchBar location={location} setLocation={setLocation} />
      <div className="grid-two">
        <div className="grid-one">
          <CurrentWeather weatherData={currentData} tempsData={nineTemps} />
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
          <TempChart tempsData={nineTemps} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
