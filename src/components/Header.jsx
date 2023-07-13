import React from "react";
import alam from "../assets/besuki2.jpg";

const Header = () => {
  return (
    <div
      className="flex bg-[#F1EEA4] justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${alam})`,
       
        backgroundRepeat:"no-repeat",

      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text ">Pasar Besuki</h1>
        <p className="font-bold text-white font-[Montserrat]">
          Memperkuat UMKM dan Pesona Desa Besuki Tulungagung
        </p>
      </div>
    </div>
  );
};

export default Header;
