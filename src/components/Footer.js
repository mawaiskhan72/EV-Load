import React from 'react'
import aboutus1 from '../Images/aboutus1.svg'
import aboutus2 from '../Images/aboutus2.svg'
import aboutus3 from '../Images/aboutus3.svg'
import Socail from '../Images/Social.svg'

function Footer() {
  return (

    <div id="contact" className="scroll-mt-24">
    <div class="lg:flex pl-12 justify-center pb-28 gap-24">

<div className='pt-24' >
    <div>
    <p class=" font-family-Montserrat text-black font-semibold">CUSTOMER STORIES</p>
        <p class="text-[34px] pt-1"><span class="text-black font-bold font-family-Montserrat">What Our Partners Said </span><span class="font-bold text-[#51b792]">About Us.</span></p>
    </div>
    <p class="pt-3">Our Al-powered software accelerates scalable, cost- efficient <br/> charging and storage infrastructure deployment. Gain a <br/> competitive edge on the future of electric mobility.</p>
</div>

<div className='bg-black w-[510px] rounded-3xl relative z-8  mt-32'>

<div className='text-white py-8 pl-60 '>
  <p>Amet minim mollit non deserunt <br/> ullamco est sit aliqua dolor do<br/> amet sint. Velit officia consequat <br/> duis enim velit mollit.</p>
  <p className='text-[#b4b4b4] pt-3'>Elisa Grant</p>
  <p className='text-[#b4b4b4]'>Legacy Solutions Engineer</p>
  <img className='absolute left-6 bottom-14' src={aboutus1} />
  <img className='absolute bottom-44 left-[410px] -z-40' src={aboutus2} />
  <img className='absolute top-28 right-[270px] bottom-0 -z-40' src={aboutus3} />
</div>
</div>
    </div>


<div className='text-[#999999] w-[100%] bg-black py-4 px-36 justify-center xl:block lg:block md:hidden sm:hidden hidden'>

<div className='gap-40 flex'>
<div className='flex gap-10'>
  <p>Terms & Conditions</p>
  <p>Privacy Policy</p>
  </div>
  <div>

  <div>
  <p>© Copyright 2023, All Rights Reserved by EV.load </p>
  </div>
  </div>

<div>
  <img className='cursor-pointer' src={Socail} />
</div>
</div>

  </div>


  <div className='text-[#999999] w-[100%] bg-black py-6 flex justify-center xl:hidden lg:hidden flex-col '>

  <div className='flex justify-center'>
  <img className='cursor-pointer' src={Socail} />
</div>

<div className='flex justify-center pt-6 gap-20'>
  <p>Terms & Conditions</p>
  <p>Privacy Policy</p>
  </div>

  <div className='flex justify-center pt-10'>
  <p>© Copyright 2023, All Rights Reserved by EV.load </p>
  </div>

  </div>

    </div>
  )
}

export default Footer