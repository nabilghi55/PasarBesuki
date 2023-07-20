// Card.js
import React from "react";
import Star from "./Star/Star";
import { Link } from "react-router-dom";
import kacang from "../../assets/Kacang.jpg"
export default function Card({ id, title, content, img }) {
  // const imgSrc = require(`../../assets/${img}.jpg`);

  return (
    <Link to={`/belanja/${id}`} className="cursor-pointer">
      <div className="p-8 bg-white w-fit shadow-2xl rounded-md">
        <div className="nama">
          <h1 className="">{title}</h1>
        </div>
        <div className="gambar">
          <img src="" alt="" />
          <img
            className="md:w-[24rem] md:h-52 w-72 h-40 bg-slate-400 "
            // src={imgSrc}
          />
        </div>
        <div className="mt-3">
          <Star />
        </div>
      </div>
    </Link>
  );
}
