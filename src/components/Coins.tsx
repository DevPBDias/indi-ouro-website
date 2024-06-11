import { getCoinData } from "@/utils/coinFetchData";
import React from "react";

const CoinCard = async () => {
  const { data } = await getCoinData();

  const convertCurrencyToReal = (currency: number) => {
    return 1 / currency;
  };

  return (
    <div className="flex flex-row w-max gap-4 items-center">
      <p className="font-normal text-lg">
        <span className="font-bold text-xl text-[--primary-color] mr-3">
          Euro
        </span>
        R${convertCurrencyToReal(data?.EUR).toFixed(2)}
      </p>
      <p className="font-normal text-lg">
        <span className="font-bold text-xl text-[--primary-color] mr-3">
          Dólar
        </span>
        R${convertCurrencyToReal(data?.USD).toFixed(2)}
      </p>
    </div>
  );
};

export default CoinCard;
