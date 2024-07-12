import React, { useState } from "react";
import Korzinkaicon from "./navbar-logos/korzinka-icon";
import Like from "./navbar-logos/like-icon";
import Search from "./navbar-logos/serach-icon";
import StartIcon from "./navbar-logos/start-icon";
import Logo from "./navbar-logos/logo";
import { TopsaleData } from "../ProductData/ProductData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerLogo from "../assets/BannerLogo.png";
import ProductDetail from "./productDetail";

const user = true;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  auto: true,
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
};

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const btnName = user ? "Profile" : "Kirish";

  return (
    <>
      <div className="bg-white mx-auto p-4 flex items-center justify-between">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 gap-24">
            <div className="w-[91px] h-[35px]">
              <Logo />
            </div>

            <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center">
              <StartIcon />
              <span className="p-1">KATALOG</span>
            </button>
          </div>
          <div className="flex items-center border border-solid border-gray-300 rounded-[10px]">
            <input
              type="text"
              placeholder="Maxsulotlarni izlash"
              className="flex-grow mx-4 px-4 py-2 rounded-l-full focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-[10px]">
              <Search />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-[10px]">
              <Like />
            </div>
            <div className="bg-blue-100 p-3 rounded-[10px]">
              <Korzinkaicon />
            </div>
            <button className="bg-gradient-to-r from-purple-300 to-pink-300 text-gray-700 px-4 py-2 rounded-md">
              {btnName}
            </button>
          </div>
        </div>
      </div>
      <div className="container pt-[25px] rounded-[20px] ">
        <Slider {...settings}>
          <img className="rounded-[10px]" src={BannerLogo} alt="" />
          <img className="rounded-[10px]" src={BannerLogo} alt="" />
          <img className="rounded-[10px]" src={BannerLogo} alt="" />
        </Slider>
      </div>

      <div className="bg-blue-50 p-8 container">
        <h2 className="text-2xl font-bold mb-6">Eng ko'p sotilgan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {TopsaleData.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 relative"
            >
              {product.badge && (
                <span
                  className={`absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-sm rounded-br-lg ${
                    product.badge === "Top sale"
                      ? "bg-red-500"
                      : "bg-orange-500"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="h-[190px]">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-xl font-bold mb-2">{product.price}</p>
                <p className="text-gray-500 mb-4">{product.order}</p>
              </div>

              <div className="flex justify-between items-center">
                {" "}
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Sotib olish
                </button>
                <button>
                  <Korzinkaicon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-white border border-gray-300 rounded-lg px-8 py-2 w-full ">
            Koproq korish
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
