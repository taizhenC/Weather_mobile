# Weather Mobile App

A simple and modern weather application built with React, Vite, and Material UI. This app fetches and displays the current weather and a 5-day forecast based on the user's geographic location.

## Features

- **Current Weather Display:** Shows today's temperature range and a weather icon based on your current location
- **5-Day Forecast:** Provides a multi-day weather forecast list
- **Geolocation-Based Data:** Automatically detects your location to provide relevant weather information
- **Intuitive UI:** Easily switch between the current weather and forecast views with a clean user interface built with Material UI

## Technologies Used

- **React.js:** The core JavaScript library for building the user interface
- **Vite:** A fast build tool for the project
- **Material UI** (`@mui/material`, `@mui/icons-material`): Used for styling and UI components
- **Custom Hooks:** Utilizes `useGeolocation`, `useCurrentWeather`, and `useForecastWeather` for managing application logic and data fetching
- **CSS Modules:** Used for component-specific styling

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

- Node.js (LTS version recommended)
- An API key from a weather service like [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/taizhenc/weather_mobile
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather_mobile
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Get an API key** from [OpenWeatherMap](https://openweathermap.org/api) (it's free).

5. **Configure your API key:**
   - Open the `src/services/apiWeather.js` file
   - Replace the placeholder with your actual API key:
     ```javascript
     const API_KEY = "YOUR_API_KEY_HERE";
     ```

### Running the App

After completing the installation, you can start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
weather_mobile/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom hooks (useGeolocation, useCurrentWeather, useForecastWeather)
│   ├── services/           # API services (apiWeather.js)
│   └── styles/             # CSS modules and styling
├── public/                 # Static assets
├── package.json           # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Usage

1. **Allow location access** when prompted by your browser
2. **View current weather** with temperature range and weather icon
3. **Check the 5-day forecast** by navigating through the app interface
4. **Enjoy real-time weather updates** based on your current location

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- UI components from [Material UI](https://mui.com/)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
