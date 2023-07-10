/** @format */

import React from "react";
import madu from "../assets/madu.png";
import { Link } from "react-scroll";
const Deskripsi = () => {
  return (
    <div id="#home" className="">
      <div className="pt-10 px-5 mb-20 ">
        <div className="text-center justify-center border ">
          <div className="  md:px-20  lg:mt-0 mt-10  2xl:ml-28">
            <h1 className="md:text-5xl text-4xl text md:pt-28">
              Selamat datang di  Pasar Besuki
            </h1>
            <p className="mt-4 text-[#818181] text-xl text-center">
              Pasar Besuki - Pasar Besuki  adalah market place yang berdedikasi
              untuk membina dan mempromosikan Usaha Mikro, Kecil, dan Menengah
              (UMKM) di Desa Besuki Tulungagung. Kami bangga menjadi wadah bagi
              para pengusaha lokal untuk memperluas jangkauan pasar mereka dan
              menghadirkan keunikan serta kekayaan budaya Desa Besuki
              Tulungagung kepada Anda.
            </p>
            <button className="p-3 bg-[#76CA71] font-b rounded-md filter mt-5 ml-1">
              <Link to="#pesan" smooth={true}>
                Selengkapnya
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deskripsi;
