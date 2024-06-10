import Image from "next/image";
import React from "react";
import instagramIcon from "../../public/icons/instagramIcon.png";
import youtubeIcon from "../../public/icons/youtubeIcon.png";

const IconsBar = () => {
  return (
    <div className="flex flex-row gap-4 cursor-pointer">
      <Image src={instagramIcon} alt="instagram Icon" />
      <Image src={youtubeIcon} alt="youtube Icon" />
    </div>
  );
};

export default IconsBar;
