/** @format */

import React from "react";
import logoUb from "../assets/768px-Logo_Universitas_Brawijaya.svg.png";
import logoTulungagung from "../assets/logo kabupaten tulungagung.png";
import logoMMD from "../assets/mmdub.jpg";
import logo501 from "../assets/logommd.png";
import Sosmed from "./Sosmed/Sosmed";
const Footer = () => {
  return (
    <>
      <div className="bg-[#006D33] pt-10">
        <div className="flex border-b pb-2 flex-wrap">
          <div className="mx-auto  ">
            <div className=" ">
              <div className="text-center justify-center mx-auto flex space-x-6">
                <div className=" ">
                  <img
                    className="mx-auto"
                    src={logoTulungagung}
                    width={100}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img className="mx-auto" src={logo501} width={120} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>
          <div className="text-center flex justify-center  p-4">
            <i className="fa-regular fa-copyright fa-1x flex   text-white">
              <h1 className="text-white ml-2">Copyright MMD 501 UB </h1>
            </i>
          </div>
        </h1>
      </div>
    </>
  );
};
export default Footer;
