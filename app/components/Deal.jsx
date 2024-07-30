import React from 'react'
import Timer from './timer'
import Image from 'next/image'
import Link from 'next/link'

const Deal = () => {
  return (
    <section className='w-full py-16'>
        <main className='mx-auto max-w-7xl bg-[#EFDCC7] p-8 md:p-12 lg:p-16 rounded-2xl'>
            {/* main-div */}
            <div className='flex  flex-col-reverse md:flex-row gap-0 md:gap-20 lg:gap-28 xl:gap-36'>
                {/* first-div */}
                <div className='w-full flex flex-col items-center md:items-start space-y-10 md:w-1/2 pt-16 md:pt-0 lg:pt-16'>
                <h2 className="text-[#232323] text-[30px] md:text-[40px] font-bold font-['Manrope'] leading-[35px]md:leading-[47.70px]">Deal of the day</h2>
                <p className=" text-[#5b5b5b] text-lg font-semibold font-['Manrope'] leading-[25px] md:leading-loose ">Select the ideal winter coat for an extended period at the <br /> best price available, but act quickly, as this exclusive deal <br /> is only valid for today.</p>

                {/* child-div......timer */}
                <div className=''>
                <Timer/>
                </div>
                {/* button  */}
               <div>
                 <button className='text-[#232323] px-16 py-3 text-base font-bold bg-slate-50 hover:bg-[#B0B0B0] rounded-xl border-slate-200 border-2'>
                 <Link href="/reduxshop">Shop Now</Link>                </button>
               </div>
                </div>

                {/* second-div */}
                <div className='w-full md:w-1/2 flex justify-center'>
                <Image
  src="/images/deal.png"
  alt="deal-image"
  width={500} height={800}/>

                </div>
            </div>
        </main>

    </section>
  )
}

export default Deal