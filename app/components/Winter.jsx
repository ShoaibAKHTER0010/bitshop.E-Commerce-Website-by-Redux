import React from 'react'

const Winter = () => {
  return (
    <section className='w-full py-10'>
        <main className='max-w-7xl mx-auto'>
            {/* heading section */}
            <div className="w-full text-white text-center text-[45px] font-extrabold font-['Manrope'] leading-[50px] py-16">
           <h2>THE <br /> <span className='inline-flex text-[#60b690]'>WINTER</span> COLLECTION</h2>
            </div>

            {/* main-div */}
            <div className='w-full flex flex-col gap-10'>
           
           {/* first-div////////////////////////////////////////////////////////// */}
           <div className='flex flex-col md:flex-row gap-10 '>
            {/* child-1  */}
            <div className='w-full md:w-1/2 image-1 ' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-1.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Women</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-gray-200 border-2 bg-[#ac7e93] hover:bg-[#a35377]
    transition-transform duration-300 ease-in-out transform hover:scale-110 '>Shop Now
    </button>
        </div>
            </div>
            
            {/* child-2  */}
            <div className='w-full md:w-1/2 image-2' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-2.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Children </h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-gray-200 border-2 bg-[#ac7e93] hover:bg-[#a35377]
    transition-transform duration-300 ease-in-out transform hover:scale-110 '>Shop Now
    </button>
        </div>
            </div>
            


           </div>

 
           {/* second-div////////////////////////////////////////////////////////// */}
           <div className='flex flex-col md:flex-row gap-10 '>
            {/* child-1  */}
            <div className='w-full md:w-1/2 image-2' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-3.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12'>
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Mens</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-gray-200 border-2 bg-[#ac7e93] hover:bg-[#a35377]
    transition-transform duration-300 ease-in-out transform hover:scale-110 '>Shop Now
    </button>
        </div>
            </div>
            
            {/* child-2  */}
            <div className='w-full md:w-1/2 image-1' id='fltr' style={{
      backgroundImage: 'url("/images/winter/bg-4.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    
    }}>
        {/* sub-child-1 */}
        <div className='w-1/2 px-6 py-12' >
          <h2 className="text-white text-[30px] font-extrabold font-['Manrope'] leading-[32.70px]">Couples</h2>
          <p className=" text-white text-[15px] font-semibold font-['Manrope'] leading-relaxed tracking-tight py-6">Revamp your look with our contemporary mens fashion, where comfort meets style. Elevate your confidence, one outfit at a time.</p>

          <button className=' text-white font-[Poppins] px-6 p-2 mt-8  rounded-full border-gray-200 border-2 bg-[#ac7e93] hover:bg-[#a35377]
    transition-transform duration-300 ease-in-out transform hover:scale-110 '>Shop Now
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