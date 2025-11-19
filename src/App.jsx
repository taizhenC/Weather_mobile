import { useEffect, useState } from "react";
import Forecast from "./features/forecast/Forecast";
import Home from "./features/home/Home";
import { useGeolocation } from "./hooks/useGeolocation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout isLoading={isLoading} />}>
          <Route path="/" element={<Home position={position} />} />
          <Route path="/forcast" element={<Forecast position={position} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
