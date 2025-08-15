import Loading from "../../ui/Loading";
import { useForecastWeather } from "../../hooks/useForecastWeather";
import NavBar from "./NavBar";
import ForecastList from "./ForecastList";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ setIsHome, position }) {
  const { isLoading, weatherForecastList, formatDay } =
    useForecastWeather(position);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar setIsHome={setIsHome} />
          <ForecastList
            weatherForecastList={weatherForecastList}
            formatDay={formatDay}
          />
        </>
      )}
    </>
  );
}
export default Forecast;
