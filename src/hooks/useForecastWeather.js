import { useEffect, useState } from "react";
import { getForecastWeather } from "../services/apiWeather";

export function useForecastWeather(position) {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherForecastList, setWeatherForecastList] = useState([
    {
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
  ]);

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  async function loadForecastData() {
    setIsLoading(true);
    const weatherData = await getForecastWeather(
      position.latitude,
      position.longitude
    );

    const weatherDataList = weatherData.list;

    const filteredForecastList = weatherDataList
      .map((weatherData) => {
        const weather = weatherData.weather[0];
        return {
          weatherIcon: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
          weather: weather.main,
          min: weatherData.main.temp_min,
          max: weatherData.main.temp_max,
          date: weatherData.dt_txt,
        };
      })
      .filter((weatherData) => weatherData.date.includes("12:00:00"))
      .filter((weatherData) => {
        const curDate = new Date().getDate();
        const weatherDate = new Date(weatherData.date).getDate();

        return curDate !== weatherDate;
      });
    setWeatherForecastList(filteredForecastList);

    setIsLoading(false);
  }

  useEffect(() => {
    loadForecastData();
  }, []);

  return { isLoading, weatherForecastList, formatDay };
}
