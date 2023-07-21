import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kacang from "../assets/Kacang.jpg";
import tas from "../assets/Handcraft.jpg";
import rizkyart from "../assets/Rizkyart.jpg";
import Card from "../components/UMKM/Card";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const DetailUsaha = () => {
  const cardData = [
    {
      id: 1,
      title: "Phit Nut",
      content: "Content of Card 1",
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
    <div id="#pesan" className="">
      <NavBar />
      <div className="pt-10 px-24">
        <h1 className="text text-center text-7xl ">UMKM</h1>
        <p className="mt-5">
          Desa Besuki memiliki beberapa UMKM yang bergerak diberbagai macam
          bidang : 
        </p>
      </div>
      <div className="p-10">
        <div className="mx-auto  justify-center items-center ">
          <div className="flex-wrap flex justify-center">
            {cardData.map((card) => (
              <div className="  mr-10 mt-2  ">
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
      <Footer />
    </div>
  );
};

export default DetailUsaha;
