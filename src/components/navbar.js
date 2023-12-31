import React from 'react'
import BackgroundImg from '../Images/backgroundimg.png'
import Logo from '../Images/logo.svg'
import Icon from '../Images/icon.svg'
import Canada from '../Images/CA.svg'
import US from '../Images/US.svg'
import Vector from '../Images/Vector.svg'
import Sliderimg1 from '../Images/sliderimg1.svg'
import Sliderimg2 from '../Images/sliderimg2.svg'
import Sliderimg3 from '../Images/sliderimg3.svg'
import Sliderimg4 from '../Images/sliderimg4.svg'
import Sliderimg5 from '../Images/sliderimg5.svg'
import Sliderimg6 from '../Images/sliderimg6.svg'
import Machines from '../Images/machines.svg'
import Marquee from "react-fast-marquee";
import Button from '../Images/btn.png'

function navbar() {
  return (  

<div>
<div className='default1 relative z-10 xl:block lg:hidden md:hidden sm:hidden hidden'>
    <div className='flex justify-center gap-14 pt-16'>
      <div className='flex gap-32'>
  <div>
    <img src={Logo}/>
    </div>
  
  <div >
  <div className='flex gap-20'>
  <div class="bg-white m-0 px-10 py-4 gap-12 cursor-pointer flex justify-center rounded-[100px] w-[450px]">
  <p class="text-black font-family-Montserrat font-bold bottom">Home</p>
  <p class="font-family-Montserrat text-gray-500 bottom">Product</p>
  <p class="font-family-Montserrat text-gray-500 bottom">Partnering</p>
  <p class="font-family-Montserrat text-gray-500 bottom ">Contact</p>
  </div>
  </div>

  </div>
  
<div className='flex gap-3'>
<div class="bg-[#4db38d] w-[200px] px-4 py-2 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-white font-bold font-family-Montserrat text-uppercase pt-2 m-0 px-3 py-2">GET A REPORT</p>
<img className='w-5' src={Icon}/>
</div>
  
<div class="bg-white w-[120px] py-2 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-black font-bold font-family-Montserrat text-uppercase  m-0 px-3 py-2">LOG IN</p>
</div>
</div>
</div>


    </div>

    <div className='default flex justify-center pt-44 gap-4'>

      <div className=''>
      <p className='font-bold text-[40px] text-black'>Accelerate <span className='font-bold text-[40px] text-[#4db38d]'>EV Charging</span></p>
      <p className='mt-3 font-bold text-[40px] text-black rounded-[200px] bg-white px-8 w-[580px] text-center'>Infrastructure Deployment</p>

      <div className='flex pt-2'>
      <p className='font-semi-bold text-[40px] text-black'>And <span className='font-bold text-[40px] text-black'>Permitting In</span></p>
      <img className='pt-[16px]' src={Canada}/>
      <img className='pt-[16px]' src={US}/>
      </div>

      <div>
        <p className='text-[20px]'>For a fraction of time and cost, determine your site’s electrical charging <br/>
          capacity with our NEC-Compliant cloud native solution</p>
      </div>

    <div className='flex gap-7 pt-10'>
      <div class="bg-black w-[180px] px-4 py-2 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-white  font-bold font-family-Montserrat text-uppercase pt-2 m-0 px-3 py-1">SEE A DEMO</p>
<img className='w-5' src={Icon}/>
</div>

<div class="bg-[#4db38d] w-[320px] px-4 py-2 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-white font-bold font-family-Montserrat text-uppercase pt-2 m-0 px-3 py-2">REQUEST A FREE SITE ANALYSIS</p>
<img className='w-5' src={Icon}/>
</div>
</div>
</div>

<div>
<img  className='pt-20 pb-12 z-10' src={Machines}/>
</div>

<div>
  <img className='absolute w-60 -z-40 top-48 right-60' src={Vector} />
</div>
</div>
    </div>


    <div className='default1 relative z-10  xl:hidden lg:block md:block sm:block block'>
    <div className='flex justify-center gap-80 px-2 pt-16'>

  <div>
    <img className='w-10%' src={Logo}/>
    </div>

<div className='xl:hidden lg:block md:block sm:block block'>
  <img src={Button} />
</div>
    </div>

    <div className='default relative pt-32 flex flex-col items-center'>

<div>
    <div>
  <img className='absolute w-60 -z-40 top-6 left-24 sm:top-8 sm:left-[260px] md:top-10  md:right-[410px]' src={Vector} />
</div>
      
<div>
<img  className='pt-20 pb-12 z-10' src={Machines}/>
</div>
</div>

      <div className=''>
      <p className='font-bold text-[41px] text-black'>Accelerate <span className='font-bold text-[40px] text-[#4db38d]'>EV Charging</span></p>
      <p className='mt-3 font-bold text-[40px] text-black rounded-[200px] bg-white text-center'>Infrastructure Deployment</p>

      <div className='flex pt-2'>
      <p className='font-semi-bold text-[40px] text-black'>And <span className='font-bold text-[40px] text-black'>Permitting In</span></p>
      <img className='pt-[16px]' src={Canada}/>
      <img className='pt-[16px]' src={US}/>
      </div>

      <div>
        <p className='text-[20px]'>For a fraction of time and cost, determine your site’s electrical <br/>
        charging capacity with our NEC-Compliant cloud native solution</p>
      </div>

    <div className='pt-10 flex flex-col items-center'>
<div class="bg-[#4db38d] w-[350px] px-4 py-1 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-white font-bold font-family-Montserrat text-uppercase pt-2 m-0 px-3 py-2">REQUEST A FREE SITE ANALYSIS</p>
<img className='w-5' src={Icon}/>
</div>

<div class="bg-black w-[350px] mt-4 mb-14 px-4 py-1 flex justify-center cursor-pointer rounded-[100px]" >
<p class="text-white  font-bold font-family-Montserrat text-uppercase pt-2 m-0 px-3 py-1">SEE A DEMO</p>
<img className='w-5' src={Icon}/>
</div>
</div>
</div>


</div>
    </div>
  <Marquee>
    <div className='flex justify-center pt-16 pb-16 space-x-20'>
    <img src={Sliderimg1} />
    <img src={Sliderimg2} />
    <img src={Sliderimg3} />
    <img src={Sliderimg4} />
    <img src={Sliderimg5} />
    <img src={Sliderimg6} />
</div>
  </Marquee>

    
    </div>

    
  )
}

export default navbar