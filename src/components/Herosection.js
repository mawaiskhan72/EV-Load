import React from 'react'
import Backgroundrectangular from '../Images/blackRectangle.png'
import Cross from '../Images/cross-circle.svg'
import Meter from '../Images/meter.svg'

function Herosection() {
  return (
    <div className='default2 bg-[#f5f5f5]'>

      <div className='pl-10 py-16'>
      <p class="text-white font-family-Montserrat text-capitalize ">Electrical Load Study Is A Pivotal Component For Determining <br/>The Remaining Electrical Capacity to install An EVSE</p>
      <p class="text-white pt-3 font-semi-bold text-[23px] font-family-Montserrat text-capitalize ">Presently Electrical Load Studies Are Error <br/>Prone, Time Consuming And Expensive</p>
      <p class="text-white pt-4 text-[17px] first-letter:font-family-Montserrat text-capitalize">Electrical Load Study Calculation Process</p>

      <div className='flex gap-4 text-[#ce0b00] pt-4'>
         <img src={Cross} />
         <p>Square footage</p>
         </div> 

         <div className='flex gap-4 text-[#ce0b00] pt-3'>
         <img src={Cross} />
         <p>Equipment nameplate info</p>
         </div>

         <div className='flex gap-4 text-[#ce0b00] pt-3'>
         <img src={Cross} />
         <p>Install meters to record demand for 30 days</p>
        </div>

         <div>
        <img src={Meter}/>
      </div>
      </div>

     

      <div className='w-80 h-40 bg-[#3fa780]'>
      </div>    
    </div>
  )
}

export default Herosection