import React from "react";
import whoImg from "../../../public/images/who.png";
import Image from "next/image";

const FarmImage = () => {
  return (
    <picture className="w-1/2 h-full">
      <Image src={whoImg} alt="farm view" className="w-full h-full" />
    </picture>
  );
};

export default FarmImage;
