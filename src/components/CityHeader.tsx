type Props = {
  city: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CityHeader = ({ city, onClickHandler }: Props) => {
  return (
    <button
      name={city}
      className="focus:text-sky-400 mx-20 my-5"
      onClick={onClickHandler}
    >
      {city}
    </button>
  );
};

export default CityHeader;
