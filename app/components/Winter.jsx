import React from 'react'
import Link from 'next/link'

const Winter = () => {
  return (
    <section className='w-full py-10'id='winter'>
        <main className='max-w-7xl mx-auto'>
            {/* heading section */}
            <div className="w-full text-[#4A3D2E] text-center text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-16">
              
           <h2>THE <br /> WINTER COLLECTION</h2>
            </div>

            {/* main-div */}
            <div className='w-full flex flex-col gap-10'>
           
           {/* first-div////////////////////////////////////////////////////////// */}
           <div className='flex flex-col md:flex-row gap-10 justify-center items-center px-6 md:px-0'>
            {/* child-1  */}
            <div className='w-full md:w-[500px] h-[300px] md:h-[350px] image-1 container ' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-1.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12 text'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Women</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-[#4A3D2E] hover:text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-black border-2 hover:border-white bg-white hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-105 '><Link href="/winter">Shop Now</Link>
    </button>
        </div>
            </div>
            
            {/* child-2  */}
            <div className='w-full md:w-[500px] h-[300px] md:h-[350px] image-2 container' id='fltr'  style={{
      backgroundImage: 'url("/images/winter/bg-2.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12 text'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Children </h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

        
          <button className=' text-[#4A3D2E] hover:text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-black border-2 hover:border-white bg-white hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-105 '><Link href="/winter">Shop Now</Link>
    </button>
        </div>
            </div>
            


           </div>

 
           {/* second-div////////////////////////////////////////////////////////// */}
           <div className='flex flex-col md:flex-row gap-10 justify-center items-center px-6 md:px-0 '>
            {/* child-1  */}
            <div className='w-full md:w-[500px] h-[300px] md:h-[350px] image-2 container' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-3.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12 text'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Mens</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

        
          <button className=' text-[#4A3D2E] hover:text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-black border-2 hover:border-white bg-white hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-105 '><Link href="/winter">Shop Now</Link>
    </button>
        </div>
            </div>
            
            {/* child-2  */}
            <div className='w-full md:w-[500px] h-[300px] md:h-[350px] image-1 container' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-4.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12 text' >
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Couples</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-[#4A3D2E] hover:text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-black border-2 hover:border-white bg-white hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-105 '><Link href="/winter">Shop Now</Link>
    </button>
        </div>
            </div>
            


           </div>


            </div>
        </main>

    </section>
  )
}

export default Winter