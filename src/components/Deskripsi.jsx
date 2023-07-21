/** @format */

import React from "react";
import { Link } from "react-scroll";
const Deskripsi = () => {
  return (
    <div id="#home" className="h-screen">
      <div className="pt-10 px-5 mb-2 ">
        <div className="text-center justify-center  ">
          <div className="  md:px-20  lg:mt-0 mt-10  2xl:ml-28">
            <h1 className="md:text-5xl text-4xl text md:pt-28">
              Selamat datang di Pasar Besuki
            </h1>
            <p className="mt-4 text-[#818181] text-xl text-center">
              asar Besuki adalah sebuah platform interaktif yang bertujuan untuk
              mempromosikan Usaha Mikro, Kecil, dan Menengah (UMKM) yang
              terletak di Desa Besuki, Tulungagung, serta tempat-tempat wisata
              menarik yang ada di daerah Tulungagung. Kami hadir sebagai wadah
              untuk mendukung dan memperkenalkan potensi-potensi lokal yang
              dapat menjadi daya tarik bagi wisatawan lokal maupun mancanegara.
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
