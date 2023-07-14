import React from "react";
import NavBar from "../Navbar/Navbar";
import Garis from "./garis.png";
import Card from "./Card";
import Form from "./Shop/Form";
import Footer from "../Footer";
import ScrollOnTop from "../../pages/ScrollOnTop";

export default function Market() {
  return (
    <>
      <NavBar />
      <ScrollOnTop/>
      <div className=" ">
        <div className=" px-7 md:px-48 mt-10 ">
          <Form />

          <h1 className="text-4xl font-extrabold text-center mt-10">Article</h1>
          <img src={Garis} className="mx-auto mt-3" alt="" />
        </div>
        <div className="bg-[#76CA71] mt-10 w-3/4 mx-auto py-5">
          <h1 className="text-center text-2xl font-bold">
            Customer's <span className="text-[#006D33]">Review</span>{" "}
          </h1>
        </div>
        <div className=" mt-10 lg:px-40 px-7 md:px-60 lg:flex lg:space-x-32 lg:space-y-0 space-y-10">
          <Card />
          <Card />
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
