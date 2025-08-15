Weather Mobile App
A simple and modern weather application built with React, Vite, and Material UI. This app fetches and displays the current weather and a 5-day forecast based on the user's geographic location.

Features
Current Weather Display: Shows today's temperature range and a weather icon based on your current location.

5-Day Forecast: Provides a multi-day weather forecast list.

Geolocation-Based Data: Automatically detects your location to provide relevant weather information.

Intuitive UI: Easily switch between the current weather and forecast views with a clean user interface built with Material UI.

Technologies Used
React.js: The core JavaScript library for building the user interface.

Vite: A fast build tool for the project.

Material UI (@mui/material, @mui/icons-material): Used for styling and UI components.

Custom Hooks: Utilizes useGeolocation, useCurrentWeather, and useForecastWeather for managing application logic and data fetching.

CSS Modules: Used for component-specific styling.

Getting Started
To run this project locally, follow these steps.

Prerequisites
Node.js (LTS version recommended)

An API key from a weather service like OpenWeatherMap.

Installation
Clone the repository to your local machine:

Bash

git clone https://github.com/taizhenc/weather_mobile
Navigate to the project directory:

Bash

cd weather_mobile
Install the required dependencies:

Bash

npm install
Get an API key from OpenWeatherMap (it's free).

Open the src/services/apiWeather.js file.

Replace the placeholder const API_KEY = ""; with your actual API key:

JavaScript

const API_KEY = "YOUR_API_KEY_HERE";
Running the App
After completing the installation, you can start the development server:

Bash

npm run dev
