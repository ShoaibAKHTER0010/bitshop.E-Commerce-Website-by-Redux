import Image from 'next/image';
import React, { useState } from 'react'
import Button from './Navbtn';

const Navbar = () => {
    let Links =[
      {name:"About us",link:"/"},
      {name:"Wedding collections",link:"/"},
      {name:"Summer collections",link:"/"},
      {name:"Parties collections",link:"/"},
      {name:"Shop now",link:"/"},
     
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full  bg-[#a13b69] '>
      <div className='md:flex items-center justify-between  max-auto max-w-7xl'>
      <div className=""><Image src="/images/bit/bit-logo.PNG" alt="A photo" width={250} height={200} className='transition-transform duration-300 ease-in-out transform hover:scale-110' />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

<div className=''>
      <ul className={`md:flex gap-8 md:items-center md:pb-0 pb-12 absolute md:static bg-[#a13b69] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-o pl-9 pr-10 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-300px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className="flex-wrap text-xs font-normal font-['Inter'] uppercase leading-[25px] lg:leading-[50px] hover:border-t-2 hover:border-b-2 hover:border-white hover:translate-y-3 hover:transition-transform ">
              <a href={link.link} className='text-white transition   ease-in-out hover:shadow-lg duration-500'>{link.name}</a>
             
            </li>
          ))
        }
        <Button>
          Get Started
        </Button>
      </ul>
      </div>

      </div>
    </div>
  )
}

export default Navbar