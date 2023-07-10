/** @format */

import { useEffect } from "react";
import Foto from "./Foto";
import AOS from "aos";
import "aos/dist/aos.css";
const Pengurus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='bg-[#EAE6DB] py-20 ' id='#pengurus'>
        <div className=''>
          <div className='md:w-[29rem] mx-auto'>
            <h1 className='font-bold text-2xl  text-center w-full px-5 md:px-0  mx-auto'>
              Susunan Pengurus dan Pengawas periode 2022 s/d 2025{" "}
            </h1>
          </div>
          <div data-aos="zoom-in">
            <Foto />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pengurus;
