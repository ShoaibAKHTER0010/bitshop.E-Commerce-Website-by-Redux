import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Slider = () => {
  return (
    <section className='w-full pt-16'>
        <main className=''>
        <Marquee className='upper-div'>
            {/* main-div */}
            <div className='flex gap-6'>
                {/* first-slide */}
               
                    <div className='w-[200px] md:w-auto pl-6'>
                    <Image
  src="/images/slide/slide-1.png"
  alt="deal-image"
  width={500} height={800} className='w-full'/>
                    </div>
 
             

                  {/* 2nd-slide */}
                  
                    <div className='w-[200px] md:w-auto'>
                    <Image
  src="/images/slide/slide-2.png"
  alt="deal-image"
  width={500} height={800} className='w-full' />
                    </div>
 
               

                  {/* 3rd-slide */}
                
                    <div className='w-[200px] md:w-auto'>
                    <Image
  src="/images/slide/slide-3.png"
  alt="deal-image"
  width={500} height={800} className='w-full' />
                    </div>
 
              

                  {/* 4th-slide */}
                 
                    <div className='w-[200px] md:w-auto'>
                    <Image
  src="/images/slide/slide-4.png"
  alt="deal-image"
  width={500} height={800} className='w-full' />
                    </div>
 
               

  {/* 5th-slide */}
 
                    <div className='w-[200px] md:w-auto'>
                    <Image
  src="/images/slide/slide-5.png"
  alt="deal-image"
  width={500} height={800} className='w-full' />
                    </div>
 
                

            </div>
            </Marquee>
            
        </main>

    </section>
  )
}

export default Slider