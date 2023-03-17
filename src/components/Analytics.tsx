import React from 'react'
import Image from 'next/image'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image 
          src="/img/laptop.jpg" 
          className='w-[500px] mx-auto my-4' 
          width={500} height={500} alt='laptop'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICs DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Unlock the power of your data with our cutting-edge analytics app! 
            Gain deeper insights into your business operations & make data-driven decisions 
            that drive success.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get started
          </button>
        </div>
      </div>
      
    </div> 
  )
}

export default Analytics
