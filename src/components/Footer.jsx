/** @format */

import React from "react";
import logoUb from "../assets/768px-Logo_Universitas_Brawijaya.svg.png";
import logoTulungagung from "../assets/logo kabupaten tulungagung.png";
import logoMMD from "../assets/mmdub.jpg";
import logo501 from "../assets/logommd.png";

import { Link } from "react-router-dom";
import ScrollOnTop from "../pages/ScrollOnTop";
const Footer = () => {
  return (
    <>
      <div className="bg-[#006D33] pt-10">
        <div className=" border-b pb-2 ">
          <div className="mx-auto lg:flex p-10 justify-between">
            <div className="block">
              <div className="lg:ml-20 text-white  font-extrabold font-[Poppins] ">
                <div>
                  <h1 className="text-2xl text-white text-center">Tautan Terkait</h1>
                  <div className="text-center block font-thin text-xl ">
                    <p className="hover:text-[#76CA71] mt-5">
                      <Link to="/belanja">UMKM</Link>
                    </p>
                    <p className="hover:text-[#76CA71]">
                      <Link to="/wisata">Wisata</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center justify-center lg:ml-20 lg:mt-0 mt-10">
              <h1 className="font-bold text-white text-4xl">Pasar Besuki</h1>
              <div className="text-white">
                <img
                  className="mx-auto"
                  src={logoTulungagung}
                  width={100}
                  alt=""
                />
                <p>Desa Besuki</p>
                <p>Kecamatan Besuki</p>
                <p>Kabupaten Tulungagung</p>
              </div>
            </div>
            <div className="lg:mr-20 lg:mt-0 mt-10">
              <h1 className="text-center mb-5 text-white font-bold">
                Copyright by :
              </h1>
              <div className="flex lg:space-x-2">
                <img className="mx-auto h-20" src={logoMMD} width={70} alt="" />
                <img className="mx-auto h-20" src={logoUb} width={80} alt="" />
                <img className="mx-auto h-20" src={logo501} width={80} alt="" />
              </div>
            </div>
          </div>
        </div>
        <h1>
          <div className="text-center flex justify-center  p-4">
            <i className="fa-regular fa-copyright fa-1x flex   text-white">
              <h1 className="text-white ml-2">
                2023, Mahasiswa Membangun Desa 1000 501 UB{" "}
              </h1>
            </i>
          </div>
        </h1>
        <ScrollOnTop/>
      </div>
    </>
  );
};
export default Footer;
