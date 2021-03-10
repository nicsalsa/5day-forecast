export function getForecast(_city, _unit) {
  // const api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;
  // const api_key = "f2d256778f4c877271b311c22dd7e42f";
  const api_key = "c31c30767b7de2bc0ea9165e36e77213";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${_city}&units=${_unit}&appid=${api_key}`;
  return fetch(url)
    .then(data => data.json())
}