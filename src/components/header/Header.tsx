import React from "react";
import Logo from "../Logo";
import Navbar from "./Navbar";
import IconsBar from "../IconsBar";

const Header = () => {
  return (
    <header className="bg-[--primary-color] w-full h-20 px-[10%] flex flex-row justify-between items-center">
      <Logo />
      <Navbar />
      <IconsBar />
    </header>
  );
};

export default Header;
