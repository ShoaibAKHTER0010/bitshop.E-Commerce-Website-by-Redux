import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl'>
               {/* heading section */}
            <div className="w-full text-[#4A3D2E] text-center text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-10">
           <h2> Hear What Our Satisfied <br /> Clients Have to Say</h2>
            </div>

            {/* main-div */}
            <div className='flex flex-col p-6 gap-4'>
              {/* first-div */}
              <div className='flex flex-col md:flex-row gap-4'>
                {/* client-1 */}
                <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-1.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-1.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>

                 {/* client-2 */}
                 <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-2.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-2.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>

                 {/* client-3 */}
                 <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-1.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-3.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>
                </div>


                 {/* second-div */}
              <div className='flex flex-col md:flex-row gap-4'>
                {/* client- 4*/}
                <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-1.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-4.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>

                 {/* client-5 */}
                 <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-2.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-5.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>

                 {/* client-6 */}
                 <div className='border-2 border-[#EFDCC7] p-6 rounded-xl space-y-4'>
                <Image src="/images/clients/Stars-2.png" alt="rating" width={600} height={800} className='w-40'/>
                <p className='text-[#5b5b5b] text-base font-medium leading-normal'>Exceptional design expertise! The teams creativity and precision turned my fashion vision into a stunning reality. Their commitment to excellence shines through in every detail, making them my top choice for fashion design</p>
                <Image src="/images/clients/client-6.png" alt="rating" width={600} height={800} className='w-40'/>
                </div>

              </div>

            </div>
        </main>

    </section>
  )
}

export default Clients