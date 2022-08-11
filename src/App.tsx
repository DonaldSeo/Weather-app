import React, { useEffect, useState } from "react";
import getCoordinatesOfAddress from "./api/forwardGeocoding";
import { coordinatesDataType } from "./common/types";
import { Cities } from "./common/constant";
import CityHeader from "./components/CityHeader";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastWeatherCards from "./components/ForecastWeatherCards";
import LoadingSpinner from "./components/LoadingSpinner";
import { useWeatherForecast } from "./hooks/useWeatherForecast";

function App() {
  const [selectedCity, setSelectedCity] = useState<string>("toronto");
  const [coordinates, setCoordinates] = useState<coordinatesDataType>(Object);
  const { status, currentWeatherData, weatherForecastData } =
    useWeatherForecast(coordinates);

  useEffect(() => {
    getCoordinatesOfAddress(selectedCity)
      .then((res) => {
        setCoordinates(res.data.results[0].geometry);
      })
      .catch((error) => console.log(error));
  }, [selectedCity]);

  const handleCitySelection = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setSelectedCity(button.name);
  };

  return (
    <div className="container mx-auto bg-sky-50 rounded-xl shadow border md:p-8 m-10">
      <div className="flex flex-col md:flex-row justify-center content-center">
        {Cities.map((item) => (
          <CityHeader city={item} onClickHandler={handleCitySelection} />
        ))}
      </div>
      <div className="flex flex-col rounded-xl">
        {status === "fetching" && <LoadingSpinner />}
        {status === "fetched" && <CurrentWeatherCard {...currentWeatherData} />}
        <div className="flex flex-row justify-center flex-wrap md:flex-nowrap">
          {weatherForecastData.map((item) => (
            <ForecastWeatherCards {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
