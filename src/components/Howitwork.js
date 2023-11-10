import React from 'react'
import One from '../Images/one.svg'
import Tick from '../Images/tick.svg'
import Two from '../Images/two.svg'
import Three from '../Images/three.svg'

function Howitwork() {
  return (
    <div className='bg-[#f4f4f4] pt-16 '> 



<div className="flex justify-center ">
      <div className="flex-1 h-px bg-gray-300 mt-3"></div>
      <div class=" bg-white rounded-[200px] w-[150px] cursor-pointer">
<p class="text-center font-bold "><span>How It </span><span class="text-[#52f3b8]">Works</span></p>
</div>
      <div className="flex-1 h-px bg-gray-300 mt-3"></div>
    </div>

<div className='flex pt-20'>
  <div>
  <img src={One}/>
  </div>
  <div>
  <img src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[500px]'>
  <p className='font-bold text-[25px]'>Authorize Us access To Obtain Your <br/> <span className='text-[#41a983]'>Facilities Utility Data</span></p>
  <p className='pt-2'>Begin a new EV charging infrastructure feasibility analysis or <br/> model by inputting energy requirements, existing technology <br/> data, and known constraints.</p>
  </div>
</div>

<div className='flex pt-20'>
  <div>
  <img src={Two}/>
  </div>
  <div>
  <img src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[500px]'>
  <p className='font-bold text-[25px]'>Authorize Us access To Obtain Your <br/> <span className='text-[#41a983]'>Facilities Utility Data</span></p>
  <p className='pt-2'>Begin a new EV charging infrastructure feasibility analysis or <br/> model by inputting energy requirements, existing technology <br/> data, and known constraints.</p>
  </div>
</div>

<div className='flex pt-20'>
  <div>
  <img src={Three}/>
  </div>
  <div>
  <img src={Tick}/>
  </div>
  <div className='bg-white rounded-2xl py-6 px-8 w-[500px]'>
  <p className='font-bold text-[25px]'>Authorize Us access To Obtain Your <br/> <span className='text-[#41a983]'>Facilities Utility Data</span></p>
  <p className='pt-2'>Begin a new EV charging infrastructure feasibility analysis or <br/> model by inputting energy requirements, existing technology <br/> data, and known constraints.</p>
  </div>
</div>

    </div>
  )
}

export default Howitwork