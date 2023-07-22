import React from "react";
import NavBar from "../Navbar/Navbar";
import Form from "./Form";
import Footer from "../Footer";
import ScrollOnTop from "../../pages/ScrollOnTop";

export default function Market() {
  return (
    <>
      <NavBar />
      <ScrollOnTop />
      <div className=" ">
        <Form />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
