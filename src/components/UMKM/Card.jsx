// Card.js
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, img, linkTo }) {
  return (
    <Link to={linkTo} className="cursor-pointer">
      <div className="p-8 bg-white mx-auto w-fit shadow-2xl rounded-md">
        <div className="nama">
          <h1 className="text-center text-2xl mb-3">{title}</h1>
        </div>
        <div className="gambar justify-center mx-auto flex text-center items-center">
          <img
            className="lg:w-[20rem]  md:h-80 w-72 h-64 bg-slate-400"
            src={img}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
}
