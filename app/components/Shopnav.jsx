"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ShopNav = () => {
  return (
    <section className='w-full '>
      <main className=' flex justify-between items-center px-10 py-3 bg-[#EFDCC7] border-b-2 border-black'>
        {/* first-div */}
        <div className='flex gap-2'>
          {/* child-one */}
        <div className="logo-2">
                    <Image src="/images/bit/bit-logo-2.png" alt="logo" width={600} height={800} className=' transition-transform duration-300 ease-in-out transform hover:scale-105 w-[50px] md:w-[70px] h-[50px] md:h-[70px]' />
                </div>
        {/* child-two */}
        <div className="text-[#4A3D2E]  text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-2">
         <h2>Shop</h2>
        </div>
        </div>

      {/* second-div */}
      <div className='flex'>
        <ul className='flex gap-10 text-black'>
          <li className=" text-lg  font-normal font-['Inter'] uppercase leading-[20px] lg:leading-[30px] hover:border-t-2 hover:border-b-2 hover:border-black hover:translate-y-2 hover:transition-all duration-150 ">
            <Link href='/'>Home</Link>
          </li>

          <li className=" text-lg font-normal font-['Inter'] uppercase leading-[20px] lg:leading-[30px] hover:border-t-2 hover:border-b-2 hover:border-black hover:translate-y-2 hover:transition-all duration-150 ">
            <Link href='/cartpage'>My Card</Link>
          </li>
        </ul>
      </div>

      </main>
    </section>
  );
};

export default ShopNav;
