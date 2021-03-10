import React from 'react';
import { format } from 'date-fns';

function Forecast ({
  dates,
  weatherByDate,
  unit
}) {
  return (
    <>
      {dates.map((date, i) => {
        const dailyWeather = weatherByDate(date);
        return (
          <div key={date+i} className="weatherBox wrapper weatherBox__hourly flexColumn">
            <div className="weatherBox__date">
              <h3>{date}</h3>
            </div>
            <div className="weatherBox__items flexColumn">
              {dailyWeather.map((weather) => {
                const displayTime = format(new Date(weather.dt_txt), 'h:mm a');
                const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                return (
                  <div key={weather.dt_txt} className="weatherBox__items--hourly flexRow">
                      <p>{displayTime}</p>
                    <div className="flexRow">
                      <img src={iconUrl} alt={weather.weather[0].description}/>
                      <p>{weather.main.temp} {unit === "metric" ? "°C" : "℉"}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
export default Forecast;