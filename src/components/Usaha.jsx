/** @format */

import hubungi from "../assets/hubungis.png";
import hp from "../assets/hp.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Table from "./Hubungi/Table";
import { useEffect } from "react";

const Hubungi = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hubungi  " id="#hubungi">
        <div className="z-10 relative">
          <img className="w-full" src={hubungi} alt="" />
        </div>
        <div data-aos="zoom-in">
          <div className="text-center border-white">
            <h1 className="text-4xl font-extrabold z-20 relative -mt-1">
              Hubungi Kami
            </h1>
          </div>
          <div className="lg:flex md:px-44  md:py-20 py-10">
            <img
              src={hp}
              className="w-2/3 md:w-1/3 text-center mx-auto"
              width=""
              alt=""
            />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hubungi;
