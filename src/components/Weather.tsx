import { getPMWData, getPNData } from "@/utils/weatherFetchData";
import React from "react";

const WeatherCard = async () => {
  const weatherPMWData = await getPMWData();
  const weatherPNData = await getPNData();

  return (
    <div className="flex flex-row w-max gap-4 items-center">
      <p className="font-bold text-xl text-[--primary-color]">
        {weatherPMWData?.name}
      </p>
      <p className="font-semibold text-xl ">
        {Math.round(weatherPMWData?.main?.temp_min)}°C
      </p>
      <p className="font-semibold text-xl ">
        {Math.round(weatherPMWData?.main?.temp_max)}°C
      </p>
      <p className="font-bold text-xl text-[--primary-color]">
        {weatherPNData?.name}
      </p>
      <p className="font-semibold text-xl ">
        {Math.round(weatherPNData?.main?.temp_min)}°C
      </p>
      <p className="font-semibold text-xl ">
        {Math.round(weatherPNData?.main?.temp_max)}°C
      </p>
    </div>
  );
};

export default WeatherCard;
