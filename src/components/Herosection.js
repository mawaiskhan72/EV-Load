import React from 'react'
import Backgroundrectangular from '../Images/blackRectangle.png'
import Cross from '../Images/cross-circle.svg'
import Meter from '../Images/meter.svg'
import Meter2 from '../Images/meter2.svg'
import Tic from '../Images/tic.svg'

function Herosection() {
  return (

    <div>

    <div className='flex justify-center relative'>
      <div className='hero default2 pl-10 mr-56 py-14 absolute'>
      <p class="text-white text-[15px] font-family-Montserrat text-capitalize ">Electrical Load Study Is A Pivotal Component For Determining <br/>The Remaining Electrical Capacity to install An EVSE</p>
      <p class="text-white text-[20px] pt-3 font-bold font-family-Montserrat text-capitalize ">Presently Electrical Load Studies Are Error <br/>Prone, Time Consuming And Expensive</p>
      <p class="text-white text-[17px] pt-4 font-semi-bold first-letter:font-family-Montserrat text-capitalize">Electrical Load Study Calculation Process</p>

      <div className='flex gap-4  text-[#ce0b00] pt-4'>
         <img className='w-[20px]' src={Cross} />
         <p className='text-[13px]'>Square footage</p>
         </div> 

         <div className='flex gap-4  text-[#ce0b00] pt-4'>
         <img className='w-[20px]' src={Cross} />
         <p className='text-[13px]'>Equipment nameplate info</p>
         </div> 

         <div className='flex gap-4  text-[#ce0b00] pt-4'>
         <img className='w-[20px]' src={Cross} />
         <p className='text-[13px]'>Install meters to record demand for 30 days</p>
         </div>    
        </div>

         <div>
        <img className='absolute right-12  z-50 top-12 w-[750px] h-[275px]' src={Meter}/>
      </div>

      <div className='w-[30%] absolute right-0 h-[370px] bg-[#3fa780] pl-4 pb-4 rounded-l-[35px]'>
      </div>
    </div>

    <div className='flex justify-center relative lg:mt-[500px]'>

    <div className='w-[30%] absolute left-0 h-[370px] bg-[#3fa780] pl-4 pb-4 rounded-r-[35px]'>
      </div>

         <div>
        <img className='absolute left-12 z-50 top-14 w-[750px] h-[275px]' src={Meter2}/>
      </div>

      
      <div className='hero default2 pl-[240px] ml-56 py-12 absolute'>
      <p class="text-white text-[15px] font-family-Montserrat text-capitalize ">Benefits</p>
      <p class="text-white text-[20px] pt-3 font-bold font-family-Montserrat text-capitalize ">We Expedite Your EV Charger Installation <br/>And Permitting.</p>
      <p class="text-white text-[17px] pt-4 font-semi-bold first-letter:font-family-Montserrat text-capitalize">For A Fraction Of Cost And Time For 10% Of <br/> The Cost And Time:</p>

      <div className='flex gap-4 text-[#41a983] pt-4'>
         <img className='w-[20px]' src={Tic} />
         <p className='text-[13px]'>NEC-compliant Electrical Load Study Calculation</p>
         </div> 

         <div className='flex gap-4 text-[#41a983] pt-4'>
         <img className='w-[20px]' src={Tic} />
         <p className='text-[13px]'>1 year utility data</p>
         </div> 

         <div className='flex gap-4 text-[#41a983] pt-4'>
         <img className='w-[20px]' src={Tic} />
         <p className='text-[13px]'>No expensive hardware require to record load</p>
         </div>    
        </div>

      
    </div>
    
    </div>
  )
}

export default Herosection