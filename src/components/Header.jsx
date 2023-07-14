import React from "react";
import alam from "../assets/Hama.png";
import peta from "../assets/petaBesuki.png";
const Header = () => {
  return (
    <div
      className="lg:flex lg:space-x-10  justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${alam})`,
        backgroundSize: "",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="items-center">
        <img src={peta}  alt="" className="" />
      </div>

      <div className="text-center">
        <h1 className="text-6xl text-center font-bold text ">
          Pasar Besuki
        </h1>
        <p className="font-bold  text-black    font-[Poppins]">
          Memperkuat  UMKM  dan Pesona Desa Besuki Tulungagung
        </p>
      </div>
    </div>
  );
};

export default Header;
