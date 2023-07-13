import React from "react";
import Star from "./Star/Star";
import { NavLink, Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/belanja">
      <div className="p-8 bg-white w-fit shadow-2xl rounded-md">
        <div className="nama">
          <h1 className="">Nama Customer</h1>
        </div>
        <div className="gambar">
          <div className="md:w-[24rem] md:h-52 w-72 h-40 bg-slate-400"></div>
        </div>
        <div className="mt-3">
          <Star />
        </div>
      </div>
    </Link>
  );
}
