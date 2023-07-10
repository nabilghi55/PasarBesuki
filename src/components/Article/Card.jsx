import React from "react";
import Star from "./Star/Star";

export default function Card(){
    return(
        <>
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
        </>
    );
}