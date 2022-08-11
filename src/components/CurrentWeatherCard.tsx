import { currentWeatherDataType } from "../common/types";

type Props = currentWeatherDataType

const CurrentWeatherCard = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-64 items-center justify-center mx-auto bg-sky-50 rounded-xl shadow border">
      <p className="text-lg">TODAY</p>
      <div className="flex flex-row items-center">
        <img
          className="w-40 h-auto"
          src={
            "https://openweathermap.org/img/wn/" +
            props.weatherIcon +
            "@4x.png"
          }
          alt={props.weatherCondition + " icon"}
        />
        <div className="flex-col">
          <div className="text-4xl">{props.temp + "°"}</div>
          <div className="text-xl">{props.weatherCondition}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
