import axios from "axios";

async function getWeatherForecast(coordinates: { lat: number, lng: number }) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        appid: "1859b5426aa8e1bf3fb5f06c2a41e148",
        exclude: "minutely,hourly,alerts",
        units: "metric",
      },
    }
  );

  return response;
}

export default getWeatherForecast;
