import React from 'react'
import BackgroundImg from '../Images/backgroundimg.png'
import Logo from '../Images/logo.svg'
import Icon from '../Images/icon.svg'
import Canada from '../Images/CA.svg'
import US from '../Images/US.svg'
import Machines from '../Images/machines.svg'
import Slider from '../Images/slider.svg'

function navbar() {
  return (  

<div>
<div className='default1'>
    <div className='flex justify-center gap-14 pt-16'>
      <div className='flex gap-32'>
  <div>
    <img src={Logo}/>
    </div>
  
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

    <div className='default flex justify-center pt-44 gap-4'>

      <div className=''>
      <p className='font-bold text-[40px] text-black'>Accelerate <span className='font-bold text-[40px] text-[#4db38d]'>EV Charging</span></p>
      <p className='mt-3 font-bold text-[40px] text-black rounded-[200px] bg-white px-8 w-[580px] text-center'>Infrastructure Deployment</p>

      <div className='flex pt-2'>
      <p className='font-semi-bold text-[40px] text-black'>And <span className='font-bold text-[40px] text-black'>Permitting In</span></p>
      <img className='pt-[18px]' src={Canada}/>
      <img className='pt-[18px]' src={US}/>
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
<img  className='pt-20 pb-12 ' src={Machines}/>
</div>


</div>
    </div>
   <div className='pt-16   pb-24 items-center flex justify-center' >
   <img src={Slider} />
   </div>
    
    </div>

    
  )
}

export default navbar