/** @format */

import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Button from "./Button";
import madu from "./img/madu.png";

const RawHoney = () => {
  return (
    <>
      <div className='md:px-20 pt-2 px-2 mb-20 '>
        <div className='lg:flex lg:flex-row-reverse  '>
          <div className='lg:w-1/2  mt-20  lg:right-14 p-4 lg:p-0  justify-center flex'>
            <img src={madu} width='' className=' ' alt='' />
          </div>
          <div className=' md:w-1/2  md:px-20  lg:mt-0 mt-10  2xl:ml-28'>
            <h1 className='md:text-5xl text-4xl texts md:pt-28 text-[#006D33;]'>
              Raw honey
            </h1>
            <p className='mt-10 ml-3  text-black text-[20px] text-left'>
              Raw Honey adalah madu Galoo - galoo murni khas Sumatera Barat yang
              dipanen dan langsung dikemas dari lebah Galoo - galoo jenis
              Heterotrigona itama dan Geniotrigona thoracica. Rasa madu ini
              sangat khas dan unik, bervariasi dari manis, asam, dan terkadang
              sedikit pahit. Rasa madu yang berbeda - beda disebabkan oleh jenis
              makanan yang dikonsumsi oleh lebah.
            </p>

            <p className='mt-7 ml-3'>
              Terdapat 3 varian ukuran dengan harga berbeda, yaitu :
            </p>

            <ul>
              <div className='font-[Poppins] mt-4 ml-10 font-bold'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight />
                  </div>
                  <li>50ml dengan harga Rp50.000,-</li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4 ml-10 font-bold'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight />
                  </div>
                  <li>50ml dengan harga Rp50.000,-</li>
                </div>
              </div>
              <div className='font-[Poppins] mt-4 ml-10 font-bold'>
                <div className='flex'>
                  <div className='mt-1'>
                    <AiOutlineRight />
                  </div>
                  <li>50ml dengan harga Rp50.000,-</li>
                </div>
              </div>
            </ul>
            <div className='pl-20 mt-10'>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RawHoney;
