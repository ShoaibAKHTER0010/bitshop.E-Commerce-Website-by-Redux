
import Image from 'next/image';
import React from 'react'

const Discover = () => {
  return (
    <section className='w-full py-10'>
        <main className='mx-auto max-w-7xl '>
            {/* heading section */}
            <div className="w-full text-white text-center text-[45px] font-extrabold font-['Manrope'] leading-[50px] py-16">
           <h2> <span  className='block text-[#60b690]'>DISCOVER</span>  NEW COLLECTION</h2>
            </div>
            {/* main-div */}
            <div className='w-full flex flex-col md:flex-row gap-16 justify-center items-center'>
            
            {/* first-div   */}
            <div className='transition-transform duration-300 ease-in-out transform hover:scale-105'>
            <Image
  src="/images/disc/diff-1.png"
  alt="main-image"
  width={500} height={800}/>
            </div>

            {/* second-div */}
            <div className='flex flex-col gap-6'>
                {/* child-one  */}
                <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
                <Image
  src="/images/disc/diff-2.png"
  alt="main-image"
  width={500} height={800}/>
                </div>

                {/* child-2 */}
                <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
                <Image
  src="/images/disc/diff-3.png"
  alt="main-image"
  width={500} height={800}/>
                </div>
            </div>
            </div>
        </main>
    </section>
  )
}

export default Discover