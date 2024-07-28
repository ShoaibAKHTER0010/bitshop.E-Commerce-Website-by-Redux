import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-[#EFDCC7] border-t-2 border-slate-400'>
        <main className='mx-auto max-w-7xl'>
            {/* main-div */}
            <div className=' flex flex-col justify-center items-center gap-8'>
                {/* first-div */}
                <div className='bg-white py-1 px-16 shadow-xl -mt-10 lower-div border-2 border-slate-400 rounded-xl'>
                    <p className="text-center text-[#232323] text-base font-semibold font-['Inter'] capitalize leading-[50px]">
                    Follow us on Instagram: @mainplume/fashion
                    </p>
                </div>

                {/* 2nd-div */}
                <div>
                    <ul className="flex gap-6 md:gap-10 text-[#4A3D2E] flex-wrap text-xs font-normal font-['Inter'] uppercase leading-[15px] lg:leading-[20px] xl:leading-[30px] ">
                        <li className='hover:underline underline-offset-4'>
                            <Link href="">Home</Link>
                        </li>

                        <li className='hover:underline underline-offset-4'>
                            <Link href="">About us</Link>
                        </li>

                        <li className='hover:underline underline-offset-4'>
                            <Link href="">Discover new</Link>
                        </li>

                        <li className='hover:underline underline-offset-4'>
                            <Link href="">Shop now</Link>
                        </li>
                    </ul>

                </div>
                {/* third div */}
                <div className='py-4'>
                <p className="text-[#2c2c2c] text-sm font-normal font-['Inter'] leading-7">© Copyright 2021, All Rights Reserved</p>
                </div>

            </div>
        </main>

    </footer>
  )
}

export default Footer