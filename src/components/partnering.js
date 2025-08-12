import React from "react";
import Arrow from "../Images/Arrow.svg";
import Imgone from "../Images/imgone.svg";
import Imgtwo from "../Images/imgtwo.svg";
import Imgthree from "../Images/imgthree.svg";
import Imgfour from "../Images/imgfour.svg";
import Imgfive from "../Images/imgfive.svg";
import Imgsix from "../Images/imgsix.svg";
import Imgseven from "../Images/imgseven.svg";
import Imgeight from "../Images/imgeight.svg";

function Partnering() {
  const items = [
    {
      img: Imgone,
      titleGreen: "EV Charging",
      titleBlack: "Infrastructure Developers",
      desc: "Leading the charge in creating a sustainable EV charging infrastructure worldwide."
    },
    {
      img: Imgtwo,
      titleGreen: "Energy Storage",
      titleBlack: "Developers",
      desc: "Innovative energy storage developers powering a sustainable future for electric vehicle charging."
    },
    {
      img: Imgthree,
      titleGreen: "",
      titleBlack: "Utilities",
      desc: "Your one-stop source for real-time EV charging data, rates, and availability to help optimize your electric vehicle charging."
    },
    {
      img: Imgfour,
      titleGreen: "Infrastructure",
      titleBlack: "Finance Partners",
      desc: "Connecting EV owners to state and federal funding agencies for efficient charging."
    },
    {
      img: Imgfive,
      titleGreen: "Engineering",
      titleBlack: "Firms",
      desc: "Top engineering firms specializing in electric vehicle infrastructure, innovation, and sustainable energy solutions."
    },
    {
      img: Imgsix,
      titleGreen: "Permitting",
      titleBlack: "Authorities",
      desc: "Connect with local permitting authorities for streamlined EV charging infrastructure approval and compliance guidance."
    },
    {
      img: Imgseven,
      titleGreen: "Business",
      titleBlack: "Owners",
      desc: "Helping business owners integrate EV charging into their properties for customer convenience and sustainability."
    },
    {
      img: Imgeight,
      titleGreen: "Fleet",
      titleBlack: "Managers",
      desc: "Expert fleet managers optimizing electric vehicle operations, enhancing efficiency, and promoting sustainable transportation."
    }
  ];

  return (
    <div
      id="partnering"
      className="bg-[#f5f5f5] pt-12 pb-12 scroll-mt-24 overflow-x-hidden" // prevent horizontal scroll
    >
      <div className="flex items-center justify-center px-4">
        <div className="flex-1 h-px bg-gray-300 hidden sm:block"></div>
        <div className="bg-white rounded-full px-6 py-2 border border-[#4eb48e] mx-4">
          <p className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px]">
            Partnering
          </p>
        </div>
        <div className="flex-1 h-px bg-gray-300 hidden sm:block"></div>
      </div>

      <div className="w-full px-4 pt-10">
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            max-w-[1250px] mx-auto
          "
        >
          {items.map((item, index) => (
            <div key={index} className="w-full text-center sm:text-left">
              <img
                src={item.img}
                alt={item.titleBlack}
                className="w-full h-auto max-w-full"
              />
              <p className="text-[#4bac88] font-bold pt-2 text-lg sm:text-xl md:text-2xl">
                {item.titleGreen}{" "}
                {item.titleBlack && (
                  <span className="text-black">{item.titleBlack}</span>
                )}
              </p>
              <p className="pt-2 text-sm sm:text-base text-gray-700">
                {item.desc}
              </p>
              <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer items-center justify-center sm:justify-start">
                <p className="text-sm sm:text-base">CONTACT US</p>
                <img src={Arrow} alt="Arrow" className="w-4 sm:w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-green-700 mt-12 mb-8"></div>
    </div>
  );
}

export default Partnering;
