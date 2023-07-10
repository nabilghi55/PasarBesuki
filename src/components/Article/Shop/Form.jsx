import React from "react";
import { FaImage } from "react-icons/fa";
import Star from "../Star/Star";

export default function Form(){
    return(
        <>
        <div className="p-5 bg-white w-fit">
            <form action="">
                <label htmlFor="nama">Nama</label>
                <input type="text" name="nama" id="" className="block p-2 border-2 shadow-2xl w-full" />
                <label htmlFor="deskripsi">Deskripsi</label>
                <textarea name="deskripsi" id="" cols="30" rows="10" className="block border-2 shadow-2xl md:w-[30rem] lg:w-[58.5rem] w-full h-28" ></textarea>
                <h1 className="mt-5">Unggah Gambar</h1>
                <div htmlFor="gambar" className="mt-10 outline-dashed outline-slate-300 rounded-xl md:w-1/2 w-full h-44 ">
                    <label htmlFor="gambar" className=""><h1 className="cursor-pointer text-center pt-8 -mt-5 h-full"><FaImage icon="FaFileImage" className="text-slate-400  text-4xl cursor-pointer text-center mx-auto flex " />
                    <span className="text-[#2E65F3]"> <br /> Upload a file</span> or drag and drop <br /> PNG, JPG, JPEG up to 10MB </h1>
                    </label>
                    <input type="file" name="gambar" id="gambar" className="hidden"/>
                </div>
                <button className="px-5 py-3 border-[#006D33] border-2 mt-5 rounded-md text-[#006D33] hover:bg-[#006D33] hover:text-white">Unggah</button>
                <div className="flex space-x-5">
                    <label htmlFor="rating" className="block mt-5">Kualitas Produk</label>
                    <div className="mt-5">
                        <Star className="mt-5"/>
                    </div>   
                </div>
                <div className="flex space-x-5">
                    <button className="px-8 py-2 border-[#006D33] border-2 mt-5 rounded-md text-[#006D33] bg-[#006D33] text-white hover:text-black hover:bg-white">Kirim Pesan</button>
                    <button className="px-8 py-2 border-[#006D33] border-2 mt-5 rounded-md text-[#006D33] bg-[#006D33] text-white hover:text-black hover:bg-white">Cancel</button>
                </div>
                
                
            </form>
        </div>
        </>
    )
}