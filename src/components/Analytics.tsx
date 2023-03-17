import React from 'react'
import Image from 'next/image'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <Image src="/img/laptop.jpg" className="w-[500px] mx-auto my-4" width={100} height={100} alt=""/>
        </div>
    </div>
  )
}

export default Analytics
