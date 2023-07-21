import React from "react";
import { useParams } from "react-router-dom";
import kacang from "../../assets/Kacang.jpg";
import tas from "../../assets/Handcraft.jpg";
import rizkyart from "../../assets/Rizkyart.jpg";
import Sosmed from "../Sosmed/Sosmed";

const DetailProduk = () => {
  const Desc = [
    {
      id: 1,
      title: "Phit Nut",
      img: kacang,
      content:
        "Phit Nut merupakan UMKM yang bergerak di usaha makanan ringan yang berlokasi di Desa Besuki Kecamatan Besuki Kabupaten Tulungagung.",
      manfaat:
        " Kacang goreng mengandung karbohidrat yang memberikan energi. Ini dapat memberikan dorongan energi yang dibutuhkan untuk aktivitas sehari-hari atau sebagai camilan yang memuaskan.",
    },
    {
      id: 2,
      title: "Wiwit Hand Craft",
      content: "Wiwit Hand Craft  Merupakan sebuah UMKM yang bergerak dibidang kerajinan khusunya kerajinan tangan. Wiwit Handcraft memiliki berbagai macam jenis kerajinan mulai dari tas, gelang maupun hiasan rumah.  ",
      img: tas,
      manfaat: ""
    },
    // Add more card data as needed
    {
      id: 3,
      title: "Tiga Bersaudara Rizky Art",
      content: "Content of Card 3",
      img: rizkyart,
    },
    {
      id: 4,
      title: "Harmer Marmer",
      content: "Content of Card 4",
    },
  ];

  const { id } = useParams();
  const selectedProduct = Desc.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  // const imgSrc = require(`../../../assets/${selectedProduct.img}.jpg`);
  return (
    <>
      <h1 className="text text-4xl font-[Poppins] mb-5 font-bold text-center">
        PASAR BESUKI
      </h1>
      <div className="lg:flex   text-black lg:px-20">
        <div className=" justify-center mx-auto border-2">
          <img src={selectedProduct.img} className="h-[44rem]" alt="" />
        </div>
        <div className=" lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <h1 className="text-2xl font-bold text ">{selectedProduct.title}</h1>
          <p className="text-justify ">{selectedProduct.content}</p>
          <h1 className="font-bold mt-5 ">Kegunaan</h1>
          <p className="">{selectedProduct.manfaat}</p>
          <div className="mt-10">
            <h1 className="text-center font-bold mb-2">Hubungi kami disini</h1>
            <Sosmed />
          </div>

          <div className="mt-5 flex space-x-20 w-fit p-4">
            <div className="">
              <button className="bg-[#006F2B]  w-full text-white py-3 px-10 mt-5">
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
