// Tujuan.js
import React from "react";
import Card from "../Article/Card";
import Gelombang from "./assetsTentang/gelombang (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tujuan = () => {
  const cardData = [
    { id: 1, title: "Phit Nut", content: "Content of Card 1", img : "Kacang" },
    { id: 2, title: "Wiwit Hand Craft", content: "Content of Card 2", img : "Handcraft" },
    // Add more card data as needed
    { id: 3, title: "Tiga Bersaudara Rizky Art", content: "Content of Card 3" , img : "Rizkyart"},
    { id: 4, title: "Harmer Marmer", content: "Content of Card 4", img : "Kacang" },
    
  ];
 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="#pesan">
      <div className="Tujuan mt-40  bg-white">
        <div className="w-full">
          <img src={Gelombang} alt="" data-aos="" />
        </div>
      </div>
      <div className="my-10 px-6 md:px-24">
        <div className="">
          <h1 className="text-4xl text-center font-bold">Produk</h1>
        </div>
        <div className="box-border shadow-xl w-full">
          <Slider {...sliderSettings} className="mx-auto">
            {cardData.map((card) => (
              <Card
                img={card.img}
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Tujuan;
