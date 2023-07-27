import React from "react";
import { useParams } from "react-router-dom";
import kacang from "../../assets/Kacang.jpg";
import tas from "../../assets/Handcraft.jpg";
import rizkyart from "../../assets/Rizkyart.jpg";
import Harmer from "../../assets/Harmer.jpg";
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
      instagram : "https://www.instagram.com/phit.nut/",
      whatsapp: "https://wa.me/081331893141"

    },
    {
      id: 2,
      title: "Wiwit Hand Craft",
      content:
        "Wiwit Hand Craft  Merupakan sebuah UMKM yang bergerak dibidang kerajinan khusunya kerajinan tangan. Wiwit Handcraft memiliki berbagai macam jenis kerajinan mulai dari tas, gelang maupun hiasan rumah.  ",
      img: tas,
      manfaat:
        "Usaha Handcraft bisa menjadi aksesoris yang bisa dimanfaatkan dalam berbagai hal seperti tas yang berguna untuk membawa apapun, serta hiasan hiasan yang bisa dijadikan sebagai pajangan yang bernilai kreatifitas tinggi",
        instagram : "https://www.instagram.com/wiwit.handcraft/",
        whatsapp: "https://wa.me/081331893141"
    },
    // Add more card data as needed
    {
      id: 3,
      title: "Tiga Bersaudara Rizky Art",
      content:
        "Menyediakan barang barang yang berguna untuk kebutuhan sehari hari.",
      img: rizkyart,
      manfaat:
        "Rizky art menyediakan berbagai macam kerajinan seperti kerajinan kayu yang bisa berguna sebagai hiasan dan juga sebagai barnag yang berguna untuk kebutuhan sehari hari.",
        instagram : "https://www.instagram.com/rizkyart/",
        whatsapp: "https://wa.me/081331893141"
    },
    {
      id: 4,
      title: "Harmer Marmer",
      content:
        "Marmer adalah batuan metamorf yang terkenal karena keindahannya, daya tahan, dan berbagai kegunaan praktisnya",
      img: Harmer,
      manfaat:
        "Marmer digunakan untuk menghiasi interior dan eksterior bangunan karena keindahan dan kemewahannya yang khas, marmer juga berguna untuk sebagai hiasan",
        instagram : "https://www.instagram.com/harmer.marmer/",
        whatsapp: "https://wa.me/081249969287"
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
      <div className="lg:flex   text-black lg:px-20 px-10">
        <div className=" justify-center mx-auto border-2">
          <img src={selectedProduct.img} className="lg:h-[44rem]" alt="" />
        </div>
        <div className=" lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <h1 className="text-2xl font-bold text ">{selectedProduct.title}</h1>
          <p className="text-justify ">{selectedProduct.content}</p>
          <h1 className="font-bold mt-5 ">Kegunaan</h1>
          <p className="">{selectedProduct.manfaat}</p>
          <div className="mt-10">
            <h1 className="text-center font-bold mb-2">Hubungi kami disini</h1>
            <div className="  ">
              <div className=" items-center flex mx-auto justify-center content-center  ">
                <ul className="flex space-x-5">
                  <li className="">
                    <a
                      className="   m-2   "
                      href={selectedProduct.instagram}
                      role="button"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-instagram fa-2x mt-2 text-black"></i>
                    </a>
                  </li>
                  <li className="hov">
                    <a
                      href={selectedProduct.whatsapp}
                      role="button"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa-brands fa-whatsapp fa-2x mt-2 text-black"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5 flex space-x-20 w-fit p-4">
            <div className="">
              {/* <button className="bg-[#006F2B]  w-full text-white py-3 px-10 mt-5">
                Beli
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
