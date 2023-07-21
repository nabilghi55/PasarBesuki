// Tujuan.js
import React from "react";
import Card from "../UMKM/Card";
import Gelombang from "./assetsTentang/gelombang (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kacang from "../../assets/Kacang.jpg";
import tas from "../../assets/Handcraft.jpg";
import rizkyart from "../../assets/Rizkyart.jpg";
const Tujuan = () => {
  const cardData = [
    {
      id: 1,
      title: "Phit Nut",
      content:
        "Phit Nut merupakan usaha kacang goreng yang berada di Desa Besuki Kecamatan Besuki Kabupaten Tulungagung",
      img: kacang,
      linkTo: "/belanja/1",
    },
    {
      id: 2,
      title: "Wiwit Hand Craft",
      content: "Content of Card 2",
      img: tas,
      linkTo: "/belanja/2",
    },
    // Add more card data as needed
    {
      id: 3,
      title: "Tiga Bersaudara Rizky Art",
      content: "Content of Card 3",
      img: rizkyart,
      linkTo: "/belanja/3",
    },
    {
      id: 4,
      title: "Harmer Marmer",
      content: "Content of Card 4",
      img: "Kacang",
      linkTo: "/belanja/4",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="#pesan">
      <div className="Tujuan mt-40  bg-white">
        <div className="w-full pt-40">
          <img src={Gelombang} alt="" />
        </div>
      </div>
      <div className="my-10 px-6 md:px-24">
        <div className="">
          <h1 className="text-4xl text-center font-bold">Produk</h1>
        </div>
        <div className=" justify-center mx-auto items-center  w-full ">
          <div className="lg:flex-wrap lg:flex justify-center items-center text-center  mx-auto">
            {cardData.map((card) => (
              <div className="mr-10 mt-4  mx-auto">
                <Card
                  linkTo={card.linkTo}
                  img={card.img}
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  content={card.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tujuan;
