import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { CurrentWeather, findIcon } from "./Components/CurrentWeather";
import TempChart from "./Components/TempChart";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";
import ExtraData from "./Components/ExtraData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloudImg from "./assets/cloud.jpg";
import nightImg from "./assets/night.jpg";

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [toggle, setToggle] = useState(true);

  // Change the background image when the toggle state changes
  useEffect(() => {
    toggle
      ? (document.body.style = `background-image:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${cloudImg});`)
      : (document.body.style = `background-image:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${nightImg});`);
  }, [toggle]);

  // Check if time is day or night
  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 6 && time < 18) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, []);

  // import the API key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

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
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat}, ${lon}&days=3&aqi=no&alerts=yes`
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
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=yes`
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

  // Store the extra weather data in an object
  const extraData = {
    pressure: weather?.current?.pressure_mb,
    wind: weather?.current?.wind_mph,
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
      <nav className="nav">
        <div className="logo">
          <FontAwesomeIcon
            icon="fa-brands fa-skyatlas"
            className="logo__icon"
          />
          <h1 className="logo__text">skyWatch</h1>
        </div>
        <SearchBar setLoc={setLocation} toggle={toggle} />
        <FontAwesomeIcon
          icon="fa-solid fa-circle-half-stroke"
          className="switch-mode"
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{
            transform: toggle ? "scaleX(1)" : "scaleX(-1)",
          }}
        />
      </nav>
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
          <div className="grid-three">
            <ExtraData extraData={extraData} />
          </div>
        </div>
        <div className="grid-four">
          <TempChart tempsData={nineTemps} />
          <Footer />
        </div>
      </div>
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    </div>
  );
}

export default App;
