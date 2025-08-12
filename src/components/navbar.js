import React, { useState } from "react";
import BackgroundImg from "../Images/backgroundimg.png";
import Logo from "../Images/logo.svg";
import Icon from "../Images/icon.svg";
import Canada from "../Images/CA.svg";
import US from "../Images/US.svg";
import Vector from "../Images/Vector.svg";
import Sliderimg1 from "../Images/sliderimg1.svg";
import Sliderimg2 from "../Images/sliderimg2.svg";
import Sliderimg3 from "../Images/sliderimg3.svg";
import Sliderimg4 from "../Images/sliderimg4.svg";
import Sliderimg5 from "../Images/sliderimg5.svg";
import Sliderimg6 from "../Images/sliderimg6.svg";
import Machines from "../Images/machines.svg";
import Marquee from "react-fast-marquee";
import Button from "../Images/btn.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-10">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-transparent">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-32 md:w-40" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 items-center">
          <div className="bg-white px-8 py-3 rounded-full flex gap-8">
            <a href="#home" className="text-black font-bold cursor-pointer">Home</a>
            <a href="#product" className="text-gray-500 cursor-pointer">Product</a>
            <a href="#partnering" className="text-gray-500 cursor-pointer">Partnering</a>
            <a href="#contact" className="text-gray-500 cursor-pointer">Contact</a>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#4db38d] px-4 py-2 flex items-center rounded-full cursor-pointer">
              <p className="text-white font-bold uppercase mr-2">GET A REPORT</p>
              <img className="w-5" src={Icon} />
            </div>
            <div className="bg-white px-4 py-2 flex items-center rounded-full cursor-pointer">
              <p className="text-black font-bold uppercase">LOG IN</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <img
            src={Button}
            alt="Menu"
            className="w-10 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          {/* Sidebar Panel */}
          <div className="fixed inset-y-0 right-0 w-64 bg-white z-50 shadow-lg p-6 flex flex-col gap-4 lg:hidden">
            <a href="#home" className="text-black font-bold" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#product" className="text-gray-700" onClick={() => setMenuOpen(false)}>Product</a>
            <a href="#partnering" className="text-gray-700" onClick={() => setMenuOpen(false)}>Partnering</a>
            <a href="#contact" className="text-gray-700" onClick={() => setMenuOpen(false)}>Contact</a>
            <div className="bg-[#4db38d] px-4 py-2 flex items-center rounded-full cursor-pointer">
              <p className="text-white font-bold uppercase mr-2">GET A REPORT</p>
              <img className="w-5" src={Icon} />
            </div>
            <div className="bg-white px-4 py-2 flex items-center rounded-full border border-black cursor-pointer">
              <p className="text-black font-bold uppercase">LOG IN</p>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 pt-10 lg:pt-20 relative">
        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="font-bold text-3xl lg:text-5xl text-black">
            Accelerate{" "}
            <span className="text-[#4db38d]">EV Charging</span>
          </p>
          <p className="mt-3 font-bold text-2xl lg:text-4xl bg-white rounded-full px-6 py-2 inline-block">
            Infrastructure Deployment
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
            <p className="text-xl font-semibold">
              And <span className="font-bold">Permitting In</span>
            </p>
            <img src={Canada} className="w-8" />
            <img src={US} className="w-8" />
          </div>
          <p className="mt-4 text-gray-700 text-lg">
            For a fraction of time and cost, determine your site’s electrical
            charging capacity with our NEC-Compliant cloud native solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <div className="bg-black px-6 py-3 flex items-center rounded-full cursor-pointer">
              <p className="text-white font-bold uppercase mr-2">SEE A DEMO</p>
              <img className="w-5" src={Icon} />
            </div>
            <div className="bg-[#4db38d] px-6 py-3 flex items-center rounded-full cursor-pointer">
              <p className="text-white font-bold uppercase mr-2">
                REQUEST A FREE SITE ANALYSIS
              </p>
              <img className="w-5" src={Icon} />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 relative">
          <img src={Machines} alt="Machines" className="max-w-xs lg:max-w-md" />
          <img
            className="absolute w-40 -z-10 top-0 right-0"
            src={Vector}
            alt="Vector"
          />
        </div>
      </div>

      {/* Logo Slider */}
      <Marquee>
        <div className="flex gap-20 py-16 px-10">
          <img src={Sliderimg1} />
          <img src={Sliderimg2} />
          <img src={Sliderimg3} />
          <img src={Sliderimg4} />
          <img src={Sliderimg5} />
          <img src={Sliderimg6} />
        </div>
      </Marquee>
    </div>
  );
}

export default Navbar;
