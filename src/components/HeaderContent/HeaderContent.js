import React from 'react';
import { format } from 'date-fns';

function HeaderContent ({
  city,
  forecast,
  showMetric,
}) {
  return (
    <>
      <p>Today's weather in</p>
      <h1>{city}</h1>
      <p>is</p>
      {forecast.list && (
        <div>
          <h2>{forecast.list[0].main.temp} {showMetric}</h2>
          <p>{`Low ${forecast.list[0].main.temp_min} ${showMetric}/ High ${forecast.list[0].main.temp_max} ${showMetric}`}</p>
        </div>
      )}
      <p> at {format(new Date(), 'h:mm a')}</p>
    </>
  )
}

export default HeaderContent;