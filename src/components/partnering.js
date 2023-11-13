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

function partnering() {
  return (
    <div className="bg-[#f5f5f5] pt-2 pb-16">
      <div className="flex justify-center">
        <div className="flex-1 h-px bg-gray-300 mt-5"></div>
        <div class=" bg-white rounded-[200px] w-[230px] cursor-pointer border border-[#4eb48e] ">
          <p class="text-center font-bold text-[28px]">Partnering</p>
        </div>
        <div className="flex-1 h-px bg-gray-300 mt-5"></div>
      </div>

      <div className="max-w-[1220px] mx-auto pt-16">
        <div className="grid grid-cols-4 gap-12">
          
          <div className="w-full">
            <img src={Imgone} />
            <p className="text-[#4bac88] font-bold pt-2 text-[25px]">EV Charging<span className="text-black">Infrastructure Developers</span>
            </p>
            <p className="pt-2 text-[16px] pe-6">
              Leading the charge in creating a sustainable EV charging
              infrastructure worldwide.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgtwo} />
            <p className="text-[#4bac88] font-bold pt-2 text-[25px]">Energy Storage <span className="text-black">Developers</span>
            </p>
            <p className="pt-2 text-[16px] pe-6">
            Innovative energy storage developers powering a sustainable future for electric vehicle charging. 
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgthree} />
            <p className="text-black font-bold pt-2 text-[25px]">
            Utilities
            </p>
            <p className="pt-2 text-[16px]">
            Your one-stop source for real-time EV charging data, rates, and availability to help optimize your electric vehicle <br/> charging.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgfour} />
            <p className="text-[#4bac88] font-bold pt-2 text-[25px]">
            Infrastructure<span className="text-black"> Finance Partners</span>
            </p>
            <p className="pt-2 text-[16px] pe-">
            Connecting EV owners to state and federal funding agencies for efficient charging.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>


          <div className="w-full">
            <img src={Imgfive} />
            <p className="text-[#4bac88] text-[25px] font-bold pt-2">Engineering <span className="text-black">Firms</span> </p>
            <p className="pt-2 text-[16px]">
            Top engineering firms specializing in electric vehicle infrastructure, innovation, and sustainable energy solutions. Leading the EV revolution.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgsix} />
            <p className="text-[#4bac88] gap-2 text-[25px] font-bold pt-2">Permitting<span className="text-black"> Authorities</span> </p>
            <p className="pt-2 text-[16px]">
            Connect with local permitting authorities for streamlined EV charging infrastructure approval and compliance guidance.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgseven} />
            <p className="text-[#4bac88] text-[25px] font-bold pt-2">Business<span className="text-black"> Owners</span> </p>
            <p className="pt-2 text-[16px]">
            Connect with local permitting authorities for streamlined EV charging infrastructure approval and compliance guidance.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>

          <div className="w-full">
            <img src={Imgeight} />
            <p className="text-[#4bac88] text-[25px] font-bold pt-2">Fleet<span className="text-black"> Managers</span> </p>
            <p className="pt-2 text-[16px]">
            Expert fleet managers optimizing electric vehicle operations, enhancing efficiency, and promoting sustainable transportation on our website.
            </p>

            <div className="flex gap-3 pt-3 text-[#4bac88] font-bold cursor-pointer">
              <p>CONTACT US</p>
              <img src={Arrow} />
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-green-700 mt-12 mb-14"></div> 
    </div>
  );
}

export default partnering;
