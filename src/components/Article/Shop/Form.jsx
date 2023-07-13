import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Star from "../Star/Star";

const DetailProduk = () => {
  //

  return (
    <>
      <h1 className="text text-4xl font-[Poppins] mb-5 font-bold text-center">
        PASAR BESUKI
      </h1>
      <div className="md:flex   text-black">
        <div className=" ">
          <img
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1616471431/attached_image/manfaat-kacang-tanah-sebagai-teman-diet-0-alodokter.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className=" lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <h1 className="text-2xl font-bold text ">Kacang Goreng</h1>
          <p>
            Kacang goreng mengandung protein nabati yang baik untuk kesehatan
            tubuh. 
          </p>
          <h1 className="font-bold mt-5 ">Manfaat</h1>
          <p className="">
            Kacang goreng mengandung karbohidrat yang memberikan energi. Ini
            dapat memberikan dorongan energi yang dibutuhkan untuk aktivitas
            sehari-hari atau sebagai camilan yang memuaskan.
          </p>
          <div className="mt-5 flex space-x-20 w-fit p-4 shadow-lg">
            <div className="">
              <h1 className="">Harga</h1>
              <h1 className="">Stok</h1>
              <h1 className="">Review</h1>
              <h1 className="">Jumlah Beli</h1>

              <button className="bg-[#006F2B]  w-full text-white py-3 px-4 mt-5">
                Beli
              </button>
            </div>
            <div className="">
              <h1 className="">Rp 100,00</h1>
              <h1 className="">15</h1>
              <h1 className="">
                <Star />
              </h1>
              <div className="">
                <select name="" className="bg-white" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
