/** @format */

import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import wa from "./whatssapp.png";
const Table = () => {
  return (
    <>
      <div className='block'>
        <div className=''>
          <p className='md:text-xl px-6 md:px-10'>
            Pasar Besuki menyediakan produk dan usaha:{" "}
          </p>
          <ul>
            <div className='px-6 font-[Poppins] mt-4 md:text-xl   '>
              <div className='flex'>
                <div className='mt-1'>
                  <AiOutlineRight className="text-[#006D33]"/>
                </div>
                <li className='flex'> Kerajinan Batu </li>
              </div>

              <div className='font-[Poppins] mt-4'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight className="text-[#006D33]" />
                  </div>
                  <li className='flex'> Kerajinan Cobek</li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight className="text-[#006D33]" />
                  </div>
                  <li className='flex'> Kerajinan rajutan bahan bahan bekas </li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight className="text-[#006D33]" />
                  </div>
                  <li className='flex'> Susu kedelai </li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight className="text-[#006D33]" />
                  </div>
                  <li className='flex'> Penggorengan kacang </li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight className="text-[#006D33]" />
                  </div>
                  <li className='flex'>
                    {" "}
                    Wisata alam yang menjanjikan di desa Besuki
                  </li>
                </div>
              </div>
            </div>
          </ul>
          <div className='mt-5 hover:text-[#D9D9D9] '>
            <a href='https://wa.me/082386766267' target='_blank' rel="noreferrer">
              {" "}
              <button className='btn rounded-2xl p-3 flex bg-[#D9D9D9]   hover:bg-[#006D33] shadow-xl ml-10'>
                <img src={wa} width='50' alt='' />
                <h1 className='mt-3 m-2  '>Hubungi kami via WhatsApp</h1>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
