import React from 'react'
import Inner from '@/components/Inner';
import Picture from '../../../public/images/3.jpg'
import Image from 'next/image';

export default function index() {
  return (
    <Inner>
       <div className='h-[200vh] flex'>
        <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
          <p className="text-[5vw]">About</p>
          <p className="max-w-[50%] text-center">Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
          <div className='relative w-[50%] h-[40vh]'>
            <Image 
              src={Picture}
              placeholder='blur'
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
        </div>
    </Inner>
  )
}
