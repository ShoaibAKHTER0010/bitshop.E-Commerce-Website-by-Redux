import Image from 'next/image';

import React from 'react'

const Wedding = () => {
  return (
    <section className='w-full py-12'>
        <main className='mx-auto max-w-7xl '>
           
            {/* heading section */}
            <div className="w-full text-white text-center text-[45px] font-extrabold font-['Manrope'] leading-[50px] py-16">
           <h2>THE <br /> <span className='inline-flex text-[#60b690]'>WEDDING</span> COLLECTION</h2>
            </div>
             {/* main--div */}
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 bg-[#ac7e93] rounded-xl'>

                {/* first-div */}
                <div className='w-full flex justify-center items-center md:w-[30vw] ml-4 py-4'>
                    <div>
                    <Image
  src="/images/wed/wed-3.jpg"
  alt="image 1"
  width={800} height={600} className='rounded-xl'/>
                    </div>

                </div>

                
                {/* second-div */}
                <div className='w-full md:w-[40vw] flex flex-col-reverse md:flex-col md gap-4 justify-center items-center'>
                    {/* button side */}
                <div className='w-full flex flex-col  gap-6 py-[4rem] bg-[#ac7e93] md:bg-[#b66087] rounded-b-xl -mt-0 md:-mt-20 px-10 md:px-4 '>
                      {/* button--1 */}
                    <button className=' text-white font-[Poppins] px-10 p-4 bg-[#a35377] rounded-full hover:border-gray-200 hover:border-2 hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-75'>Shop Now
    </button>

      {/* button--2 */}
      <button className=' text-white font-[Poppins] px-10 p-4  rounded-full border-gray-200 border-2 hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-75 '>Explore Now
    </button>

                    </div>

                   {/* image */}
                    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 md:pl-0'>
                    <Image
  src="/images/wed/wed-2.jpg"
  alt="image 2"
  width={800} height={600} className='rounded-xl'/>
                    </div>

                </div>

                   {/* third-div */}
                   <div className='w-[30vw] py-4 hidden md:flex pr-4'>
                    <div>
                    <Image
  src="/images/wed/wed-1.jpg"
  alt="image 3"
  width={800} height={600} className='rounded-xl'/>
                    </div>

                </div>
                


            </div>
        </main>
    </section>
  )
}

export default Wedding