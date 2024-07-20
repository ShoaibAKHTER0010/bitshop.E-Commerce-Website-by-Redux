
import Image from 'next/image';
import React from 'react'

const Main = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl pt-10 md:pt-6 lg:pt-10 '>
            {/* main-div */}
            <div className='w-full flex flex-col md:flex-row   pl-4 md:pl-0 '>
                {/* first--div */}
                <div className='w-full md:w-1/2 text-white py-6 md:py-10 lg:py-16 flex flex-col items-center md:items-start'>
                  {/* paragraph */}
                 <div className=" text-center md:text-start text-stone-100 text-[45px] md:text-[52px] lg:text-[63px] font-extrabold font-['Manrope'] capitalize leading-[50px] md:leading-[65px] lg:leading-[82px] ">
                 Dive into a world <br className='md:block' /> of <span className='inline-flex text-[#60b690]'>endless fashion</span> <br className='md:block' /> possibilities
                 </div>
                    <p className="text-stone-300 text-[14px] md:text-[19px] font-normal font-['Manrope'] leading-[22px] md:leading-[28px] lg:leading-[38px] py-10 text-center md:text-start">We Dive into a realm of endless fashion possibilities. Explore our diverse collections and redefine your style. Your fashion journey begins here</p>

                    {/* button side */}
                    
                    <div className='w-full flex flex-col md:flex-row gap-6 md:gap-12 pt-16 md:pt-10 pr-12 md:pr-0'>
                      {/* button--1 */}
                    <button className=' text-white font-[Poppins] px-10 p-4 bg-[#a35377] rounded-full hover:border-gray-200 hover:border-2 hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-110 ml-8 md:ml-0'>Explore Now
    </button>

      {/* button--2 */}
      <button className=' text-white font-[Poppins] px-10 p-4  rounded-full border-gray-200 border-2 hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-110 ml-8 md:ml-0'>Contact us
    </button>

                    </div>
                    
                    <p className='pt-10'>Choose your Brand we give <span className='inline-flex text-lg text-[#60b690]'>20%</span> discount for all</p>
                  

                </div>
                {/* second-div */}
                <div className='w-full md:w-1/2 flex justify-center items-center px-6 md:px-4 lg:px-0 py-10 md:py-0'>
            
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