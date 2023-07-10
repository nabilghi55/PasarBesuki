/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <div>
        <button className='px-8 py-2 bg-[#27854C] text-white rounded-md filter mt-5 ml-1'>
          <Link to='#tentang' smooth={true}>
            Beli Sekarang
          </Link>
        </button>
      </div>
    </>
  );
};
export default Button;
