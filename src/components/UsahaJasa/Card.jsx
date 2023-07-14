/** @format */

import React from "react";
import "./card.css";
import land from "./img/land.png";
import mart from "./img/mart.png";
import tangan from "./img/tangan.png";

const Card = () => {
  return (
    <>
      <div className='md:px-40 mx-10    my-10'>
        <div className='md:flex md:justify-center md:space-x-20'>
          <div className='card h-[400px] w-[300px] '>
            <div className='mx-auto justify-center flex items-center mt-10'>
              <img src={land} width='100' alt='' />
            </div>
            <div>
              <h1 className='px-10 text-xl text-[#0E9D06] mt-10 text-'>
               Pantai Midodaren
              </h1>
            </div>
            <div>
              <button className='btn ml-10 mt-10 mx-auto justify-center flex p-2 rounded-md hover:bg-green-600 text-white'>
                See more
              </button>
            </div>
          </div>
          <div className='card h-[400px] w-[300px] '>
            <div className='mx-auto justify-center flex items-center mt-10'>
              <img src={mart} width='100' alt='' />
            </div>
            <div>
              <h1 className='px-10 text-xl text-[#0E9D06] mt-10 text-'>
                Eduwisata <br /> Galoo galoo <br /> land
              </h1>
            </div>
            <div>
              <button className='btn ml-10 mt-10 mx-auto justify-center flex p-2 rounded-md hover:bg-green-600 text-white'>
                See more
              </button>
            </div>
          </div>
          <div className='card h-[400px] w-[300px] '>
            <div className='mx-auto justify-center flex items-center mt-10'>
              <img src={tangan} width='150' height='100' className="mt-2" alt='' />
            </div>
            <div className="w-28 h-24">
              <h1 className='px-10 text-xl text-[#0E9D06] mt-10 text-'>
               Galoo galoo <br />Franchise
              </h1>
            </div>
            <div>
              <button className='btn ml-10 mt-10 mx-auto justify-center flex p-2 rounded-md hover:bg-green-600 text-white'>
                See more
              </button>
            </div>
          </div>
        </div>
        
          <div className='md:flex md:justify-center md:space-x-20 md:mt-20'>
            <div className='card h-[400px] w-[300px] '>
              <div className='mx-auto justify-center flex items-center mt-10'>
                <img src={land} width='100' alt='' />
              </div>
              <div>
                <h1 className='px-10 text-xl text-[#0E9D06] mt-10 text-'>
                  Eduwisata <br /> Galoo galoo <br /> land
                </h1>
              </div>
              <div>
                <button className='btn ml-10 mt-10 mx-auto justify-center flex p-2 rounded-md hover:bg-green-600 text-white'>
                  See more
                </button>
              </div>
            </div>
            <div className='card h-[400px] w-[300px] '>
              <div className='mx-auto justify-center flex items-center mt-10'>
                <img src={land} width='100' alt='' />
              </div>
              <div>
                <h1 className='px-10 text-xl text-[#0E9D06] mt-10 text-'>
                  Eduwisata <br /> Galoo galoo <br /> land
                </h1>
              </div>
              <div>
                <button className='btn ml-10 mt-10 mx-auto justify-center flex p-2 rounded-md hover:bg-green-600 text-white'>
                  See more
                </button>
              </div>
            </div>
            
          </div>
        </div>
      
    </>
  );
};
export default Card;
