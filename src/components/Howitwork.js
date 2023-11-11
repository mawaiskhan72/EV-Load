import React from 'react'
import One from '../Images/one.svg'
import Tick from '../Images/tick.svg'
import Two from '../Images/two.svg'
import Three from '../Images/three.svg'

function Howitwork() {
  return (
    <div className='bg-[#f4f4f4] mt-[450px] '> 

<div className="flex justify-center ">
      <div className="flex-1 h-px bg-gray-300 mt-5"></div>
      <div class=" bg-white rounded-[200px] w-[230px]  cursor-pointer">
<p class="text-center font-bold text-[28px]"><span>How It </span><span class="text-[#52f3b8]">Works</span></p>
</div>
      <div className="flex-1 h-px bg-gray-300 mt-5"></div>
    </div>

<div className='flex pl-32 relative gap-5 pt-20'>
  <div>
  <img className='pt-7 w-20' src={One}/>
  </div>
  <div>
  <img className='absolute top-[120px] left-[203px]' src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[500px]'>
  <p className='font-bold text-[24px]'>Authorize Us access To Obtain Your <br/> <span className='text-[#41a983]'>Facilities Utility Data</span></p>
  <p className='pt-2'>Begin a new EV charging infrastructure feasibility analysis or <br/> model by inputting energy requirements, existing technology <br/> data, and known constraints.</p>
  </div>
</div>

<div className='flex relative gap-5 pt-16 pl-[490px]'>
  <div>
  <img className='pt-5 w-28' src={Two}/>
  </div>
  <div>
  <img className='absolute top-[100px] left-[600px]' src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[480px]'>
  <p className='font-bold text-[20px]'>Process The Granular Big Data Sources On <br/> <span className='text-[#41a983]'>Our Cloud Platform</span></p>
  <p className='pt-2 text-[14px]'>Define strategy to maximize government grants/funding, reduce <br/>utility costs and demand charges, maximize operation during grid <br/> outages, and let Xendee automatically find the best solutions for you.</p>
  </div>
</div>

<div className='flex relative pl-44 gap-5 pt-16'>
  <div>
  <img className='pt-10 w-28 ' src={Three}/>
  </div>
  <div>
  <img className='absolute top-[110px] left-[283px]' src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[480px]'>
  <p className='font-bold text-[23px]'>Receive NEC-compliant Electrical Load <br/> <span className='text-[#41a983]'>Study computation</span></p>
  <p className='pt-2 text-[14px]'>Reduce interconnection times by leveraging our extensive <br/>reports. Explore the optimal technologies for your EV charging <br/>ifrastructure, check the balance of system costs.</p>
  </div>
</div>

<div class="border-t border-green-700 mt-12 mb-14"></div>

    </div>
  )
}

export default Howitwork