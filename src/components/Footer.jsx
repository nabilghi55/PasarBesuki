/** @format */

import React from "react";
import logo from "../assets/logo putih.png";
import Sosmed from "./Sosmed/Sosmed";
import pabio from "../assets/pabio.png";
const Footer = () => {
  return (
    <>
      <div className='bg-[#006D33] '>
        <div className='lg:flex md:px-28 justify-center text-center items-center  '>
          <div className=' md:py-10 '>
            <div className='text-center justify-center mx-auto '>
              <div className=''>
                {/* <img
                  src={logo}
                  className='justify-center text-center pt-10 mx-auto'
                  width='200'
                  alt=''
                /> */}
                {/* <div className='md:w-64  ml-14'>
                  <h1 className='text-white text-left text-sm'>
                   
                  </h1>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className='mx-auto text-center justify-center items-center my-auto'>
            <h1 className='text-2xl font-bold text-white'>
              Program jasa usaha dari:
            </h1>
            <img
              className='text-center justify-center mx-auto mt-5'
              src={pabio}
              alt=''
            />
          </div> */}
          {/* <div className='my-auto mx-auto mt-14 text-center justify-center  flex '>
            <h1 className='text-2xl text-white font-bold'>Connect With Us:</h1>
            <div className='mt-10 justify-center text-center mx-auto items-center'>
              <Sosmed />
            </div>
          </div> */}
        </div>
        <h1>
          <div className='text-center flex justify-center  p-4'>
            <i className='fa-regular fa-copyright fa-1x flex   text-white'>
              <h1 className='text-white ml-2'>Copyright MMD 501 UB </h1>
            </i>
          </div>
        </h1>
      </div>
    </>
  );
};
export default Footer;
