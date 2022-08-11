import { weatherForecastDataType } from "../common/types";

type Props = weatherForecastDataType

const ForecastWeatherCards = (props: Props) => {
  return (
    <div className="flex flex-col w-1/2 bg-sky-50 items-center rounded-xl shadow border p-5">
      <p>{props.day}</p>
      <img
        src={"https://openweathermap.org/img/wn/" + props.weatherIcon + "@2x.png"}
        alt={props.weatherCondition + " icon"}
      />
      <p>{props.temp + "°"}</p>
    </div>
  );
};

export default ForecastWeatherCards;
