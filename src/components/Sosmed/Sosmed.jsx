/** @format */

import React from "react";

const Sosmed = () => {
  return (
    <>
      <div className="  ">
        <div className=" items-center flex mx-auto justify-center content-center  ">
          <ul className="flex space-x-5">
            <li className="">
              <a
                className="   m-2   "
                href="https://www.instagram.com/discite.institute/"
                role="button"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x mt-2 text-black"></i>
              </a>
            </li>
            <li className="hov">
              <a
                
                href="https://twitter.com/DisciteInst"
                role="button"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp fa-2x mt-2 text-black"></i>
              </a>
            </li>
            <li className="hov">
              <a
             
                href="mailto:biosahaja@gmail.com"
                role="button"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-regular fa-envelope fa-2x mt-2 text-black"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sosmed;
