/** @format */

import React from "react";
import "../style/style.css";
import Navbar from "../components/Navbar/Navbar";
import Deskripsi from "../components/Deskripsi";
import Tentang from "../components/Tentang/Tentang";
import Pengurus from "../components/Pengurus/Pengurus";
import Hubungi from "../components/Hubungi";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../components/Header";


const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='landing '>
        <Header/>
        <Navbar />
        <section className='h-96 md:h-72 bg-white ' >
          <Deskripsi id='home' />
        </section>
        <section className='bg-[#] ' dark={false} id='tentang' >
          <Tentang  />
        </section>
        <section data-aos="zoom-in" className='' dark={true} id='hubungi'>
          <Hubungi />
        </section>
        <section >
          <Footer />
        </section>
      </div>
    </>
  );
};
export default LandingPage;
