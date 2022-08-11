import { useEffect, useState } from "react";

import getWeatherForecast from "../api/weatherAndForecast";

import {
  currentWeatherDataType,
  weatherForecastDataType,
  coordinatesDataType,
} from "../common/types";
import { Weekday } from "../common/constant";

export const useWeatherForecast = (coordinates: coordinatesDataType) => {
  const [status, setStatus] = useState("idle");
  const [currentWeatherData, setCurrentWeatherData] =
    useState<currentWeatherDataType>(Object);
  const [weatherForecastData, setWeatherForecastData] = useState<
    weatherForecastDataType[]
  >([]);

  useEffect(() => {
    if (!coordinates) return;

    setStatus("fetching");
    getWeatherForecast(coordinates)
      .then((res) => {
        setCurrentWeatherData({
          temp: Math.round(res.data.current.temp),
          weatherIcon: res.data.current.weather[0].icon,
          weatherCondition: res.data.current.weather[0].main,
        });
        var forecastDataList: weatherForecastDataType[] = [];
        for (let i = 1; i < res.data.daily.length - 3; i += 1) {
          const dayInt = new Date(res.data.daily[i].dt * 1000).getDay();
          const temp = Math.round(res.data.daily[i].temp.day);
          const weatherIcon = res.data.daily[i].weather[0].icon;
          const weatherCondition = res.data.daily[i].weather[0].description;
          const forecastData: weatherForecastDataType = {
            day: Weekday[dayInt],
            temp,
            weatherIcon,
            weatherCondition,
          };
          forecastDataList.push(forecastData);
        }
        setWeatherForecastData(() => [...forecastDataList]);
        setStatus("fetched");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, [coordinates]);

  return { status, currentWeatherData, weatherForecastData };
};
