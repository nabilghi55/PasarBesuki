/** @format */

import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar/Navbar";
import Card from "./Card";
import garis from "./img/garis.png";
import ScrollOnTop from "../../pages/ScrollOnTop";

const Usaha = () => {
  return (
    <>
      <div>
        <NavBar />
        <ScrollOnTop/>
        <div className='text-center mt-10 mx-auto justify-center items-center '>
          <h1 className='font-[Poppins] md:text-5xl text-3xl'>Wisata Desa Besuki</h1>
          <img
            className='flex justify-center items-center mx-auto mt-5 w-1/2 md:w-1/4'

            width={300}
            src={garis}
            alt=''
          />
        </div>
        <Card />
        <Footer/>
      </div>
    </>
  );
};
export default Usaha;
