export interface currentWeatherDataType {
  temp: number;
  weatherIcon: string;
  weatherCondition: string;
}

export interface weatherForecastDataType {
  day: string;
  temp: number;
  weatherIcon: string;
  weatherCondition: string;
}

export interface coordinatesDataType {
  lat: number;
  lng: number;
}
