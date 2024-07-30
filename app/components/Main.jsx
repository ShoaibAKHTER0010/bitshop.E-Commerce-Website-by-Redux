
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Balancer from 'react-wrap-balancer'

const Main = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl pt-10 md:pt-6 lg:pt-10 '>
            {/* main-div */}
            <div className='w-full flex flex-col md:flex-row px-3 md:px-8'>
                {/* first--div */}
                <div className='w-full md:w-1/2 text-white py-6 md:py-10 lg:py-16 flex flex-col items-center md:items-start'>
                  {/* paragraph */}
                 <div className=" text-center md:text-start text-[#4A3D2E] text-[40px] md:text-[52px] lg:text-[63px] font-extrabold font-['Manrope'] capitalize leading-[45px] md:leading-[65px] lg:leading-[82px] ">
                <h2> <Balancer>Dive into a world of <span className='inline-flex text-[#46382A]'>endless fashion</span> <br className='md:block' /> possibilities</Balancer></h2>
                 </div>
                    <p className="text-[#4A3D2E] text-[14px] md:text-[19px] font-normal font-['Manrope'] leading-[22px] md:leading-[28px] lg:leading-[38px] py-10 text-center md:text-start">We Dive into a realm of endless fashion possibilities. Explore our diverse collections and redefine your style. Your fashion journey begins here</p>

                    {/* button side */}
                    
                    <div className='w-full flex flex-col md:flex-row gap-6 md:gap-12 pt-28  md:pt-10 pr-12 md:pr-0'>
                      {/* button--1 */}
                    <button className=' text-white font-[Poppins] px-12 md:px-10 lg:px-10 py-3  md:py-2 lg:py-3  bg-[#4A3D2E] rounded-full hover:border-black hover:border-2 
    transition-transform duration-200 ease-in-out transform hover:scale-105 ml-8 md:ml-0 leading-8 md:leading-tight lg:leading-8'><Link href="/reduxshop">Explore Now</Link>
    </button>

      {/* button--2 */}
      <button className=' text-[#4A3D2E] font-[Poppins]  px-12 md:px-10 lg:px-10 py-3  md:py-2 lg:py-3 rounded-full border-black border-2 hover:bg-[#4A3D2E] hover:text-white
    transition-transform duration-200 ease-in-out transform hover:scale-105 ml-8 md:ml-0'>Contact us
    </button>

                    </div>
                    
                    <p className='pt-10 text-[#4A3D2E]'>Choose your Brand we give <span className='inline-flex text-lg text-[#60b690]'>20%</span> discount for all</p>
                  

                </div>
                {/* second-div */}
                <div className='w-full md:w-1/2 flex justify-center py-10 md:py-0'>
            
                  <Image
  src="/images/main-img.png"
  alt="main-image"
  width={800} height={600}/>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Main