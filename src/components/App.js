import React, { useState, useEffect } from 'react';
import './App.css';
import { format } from 'date-fns';
import { debounce } from 'throttle-debounce';
import { getForecast } from '../services/forecast';
import Forecast from './Forecast/Forecast';
import Header from './Header/Header';
import { useWindowSize } from '../hooks';
import HeaderMobile from './Header/HeaderMobile';

function App() {
  // --- HOOKS BEGIN ---
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Vancouver");
  const [selectedCity, setSelectedCity] = useState(city);
  const [unit, setUnit] = useState("metric")
  const [dates, setDates] = useState([]);
  const size = useWindowSize();
  useEffect(
    () => {
      const uniqueDates = [...new Set(forecast.list?.map((reading) => format(new Date(reading.dt_txt), 'MMM dd yyyy')))];
      const debounceFetch = debounce(3000, () => {
        getForecast(city, unit)
          .then(items => {
              setForecast(items)
          })
          .then(() => setDates(uniqueDates))
          .catch((error) => console.error(error))
      })
      debounceFetch()

    },
    [city, forecast.list, unit]
  )
  // --- HOOKS END ---  
  // --- event handling begins ---
  const handleChange = (e) => {
    if (e.target.value === undefined) return "";
    setSelectedCity(e.target.value)
  }
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
    setUnit(e.target[1].value);
  }
  // --- event handling ends ---
  // --- constants begins ---
  const weatherByDate = (date) => { // create array of forecast readings by singular date
    const arr = forecast.list.filter((weather) => date === format(new Date(weather.dt_txt), "MMM dd yyyy"))
    return arr;
  }
  const showMetric = unit === "metric" ? "°C" : "℉";
  // --- constants ends ---

  return (
    <div className="App">
      <div className="container wrapper">
        {/* --- Header begins --- */}
        { // responsive ternary to show mobile vs desktop layout
          size.width <=950 ? (
            <div className="wrapper">
              <HeaderMobile 
                city={city}
                forecast={forecast}
                showMetric={showMetric}
                onSubmit={onSubmit}
                selectedCity={selectedCity}
                handleChange={handleChange}
                handleUnitChange={handleUnitChange}
                unit={unit}
              /> 
            </div>
          ) : (
            <Header 
              city={city}
              forecast={forecast}
              showMetric={showMetric}
              onSubmit={onSubmit}
              selectedCity={selectedCity}
              handleChange={handleChange}
              handleUnitChange={handleUnitChange}
              unit={unit}
            />
          )
        }  
        {/* --- Header ends --- */}
        {/* --- Main section begins */}
        <section className="main">
          {/* --- Forecast begins --- */}
          <section className="main__container">
            <Forecast dates={dates} weatherByDate={weatherByDate} unit={unit} />   
          </section>
          {/* --- Forecast ends --- */}
        </section>
        {/* --- Main Section Ends --- */}
      </div>
    </div>
  );
}

export default App;
