/** @format */

import React from "react";
import "../style/style.css";
import Navbar from "../components/Navbar/Navbar";
import Deskripsi from "../components/Deskripsi";
import Hubungi from "../components/Hubungi";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from "../components/Header";
import Tujuan from "../components/Tentang/Usaha";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="landing ">
        <Header />
        <Navbar />
        <section className=" h-96 bg-white ">
          <Deskripsi id="home" />
        </section>
        <section className="" dark={false} id="tentang">
          <Tujuan />
        </section>
        <section className="" dark={true} id="hubungi">
          <Hubungi />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};
export default LandingPage;
