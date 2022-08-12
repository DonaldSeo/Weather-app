import axios from "axios";

async function getWeatherForecast(coordinates: { lat: number; lng: number }) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        exclude: "minutely,hourly,alerts",
        units: "metric",
      },
    }
  );

  return response;
}

export default getWeatherForecast;
