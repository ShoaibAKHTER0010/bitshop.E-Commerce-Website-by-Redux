import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

const Wedding = () => {
  return (
    <section className='w-full py-6' id='wedding'>
        <main className='mx-auto max-w-7xl '>
           
            {/* heading section */}
            <div className="w-full text-[#4A3D2E] text-center text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-24">

        
           <h2>THE <br />WEDDING COLLECTION</h2>
            </div>
             {/* main--div */}
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 bg-[#EFDCC7] rounded-xl'>

                {/* first-div */}
                <div className='w-full flex justify-center items-center md:w-[30vw]  px-6 md:px-0  md:ml-4 py-4'>
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
                <div className='w-full flex flex-col  gap-6 py-[4rem] bg-[#EFDCC7] md:bg-white rounded-b-xl -mt-0 md:-mt-20 px-10 md:px-4 '>
                      {/* button--1 */}
                    <button className=' text-white font-[Poppins] px-10 p-4 bg-[#4A3D2E] rounded-full hover:border-black hover:border-2 
    transition-transform duration-300 ease-in-out transform hover:scale-75'> <Link href="/wedding">Shop Now</Link>
    </button>

      {/* button--2 */}
      <button className=' text-[#4A3D2E] hover:text-white font-[Poppins] px-10 p-4  rounded-full border-black border-2 hover:bg-[#4A3D2E]
    transition-transform duration-300 ease-in-out transform hover:scale-75 '><Link href="/cartpage">Explore Now</Link>
    </button>

                    </div>

                   {/* image */}
                    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 px-6 md:px-0'>
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