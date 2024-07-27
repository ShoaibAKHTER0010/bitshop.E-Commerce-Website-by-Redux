import Image from 'next/image';
import React from 'react'

const Gifts = () => {
  return (
    <section className='w-full '>

        
      <main className='mx-auto max-w-7xl px-6 md:px-4 ' >

         {/* heading section */}
         <div className="w-full text-[#4A3D2E] text-center text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-16">

         <div className="logo-2 w-[250px]">
          
                    <Image src="/images/bit/bit-logo-2.png" alt="logo" width={600} height={800} className=' transition-transform duration-300 ease-in-out transform hover:scale-105 w-[50px] md:w-[70px] h-[50px] md:h-[70px]' />
                </div>
           <h2> GIFT <br /> FOR OUR CLIENTS</h2>
            </div>
           

       {/* main-div */}
        <div className='w-full flex flex-col gap-4 md:gap-8 justify-center items-center' >

        {/*first -div */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-14 '>
            {/* child-1  */}
            <div className='shadow-lg hover:shadow-xl'>
            <Image
  src="/images/bit/bit-1.PNG"
  alt="main-image"
  width={500} height={800} className='rounded-xl'/>
            </div>

             {/* child-2  */}
             <div className='shadow-lg hover:shadow-xl'>
            <Image
  src="/images/bit/bit-3.PNG"
  alt="main-image"
  width={500} height={800} className='rounded-xl'/>
            </div>

        </div>

         {/*second -div */}
         <div className='flex gap-4 md:gap-6 flex-col md:flex-row'>
            {/* child-1  */}
            <div className='shadow-lg hover:shadow-xl'>
            <Image
  src="/images/bit/bit-2.PNG"
  alt="main-image"
  width={500} height={800} className='rounded-xl'/>
            </div>

             {/* child-2  */}
             <div className='shadow-lg hover:shadow-xl'>
            <Image
  src="/images/bit/bit-5.PNG"
  alt="main-image"
  width={500} height={800} className='rounded-xl'/>
            </div>

        </div>


         
        </div>
        <div className='w-full text-center py-10'><h3 className="text-black text-[20px] md:text-[30px] font-extrabold font-['Manrope'] leading-[25px] md:leading-[32.70px]">Expressing Our Gratitude with a Special Gift</h3>
            <p className="text-[#CDBA9F] ] text-[15px] font-semibold font-['Manrope'] leading-relaxed py-4">This gift is a small symbol of our immense gratitude for your loyalty and trust.</p>
            </div>
      </main>
    </section>
  )
}

export default Gifts