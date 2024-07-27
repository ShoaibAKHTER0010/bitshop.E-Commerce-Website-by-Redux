import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import React, { useState } from 'react'
import Button from './Navbtn';
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';

const Navbar = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/" },
        { name: "Wedding collections", link: "/wedding" },
        { name: "Winter collections", link: "/winter" },
        { name: "Shop now", link: "/reduxshop" },
    ];

    const [open, setOpen] = useState(false);

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

    return (
        <div className='w-full bg-[#EFDCC7] border-b-2 border-slate-400'>
            <div className='md:flex items-center justify-between max-w-7xl'>
                <div className="">
                    <Image src="/images/bit/bit-logo.PNG" alt="logo" width={250} height={200} className='transition-transform duration-300 ease-in-out transform hover:scale-105 w-[150] md:w-[200] h-[100] md:h-[150]' />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
                    {open ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
                </div>

                <div className={`md:flex md:items-center md:pb-0 py-4 md:static absolute bg-[#EFDCC7] w-full md:w-auto pl-10 md:pl-3 transition-all duration-500 ease-in-out ${open ? 'top-20 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'}`}>
                    <ul className='md:flex gap-10 md:gap-4 lg:gap-10 justify-center items-center'>
                        {Links.map((link) => (
                            <li key={link.name} className="flex-wrap text-lg md:text-xs font-normal font-['Inter'] uppercase leading-[45px] md:leading-[15px] lg:leading-[20px] xl:leading-[30px] hover:border-t-2 hover:border-b-2 hover:border-black hover:translate-y-2
                            hover:transition-all duration-100 mb-0 md:mb-6">
                                <a href={link.link} className='text-[#4A3D2E] transition ease-in-out hover:shadow-xl duration-200'>{link.name}</a>
                            </li>
                        ))}
                        <div className='pb-0 md:pb-4 py-6 md:py-0'>
                        <Link href="/cartpage" passHref >
        <FiShoppingCart size={30} color="green"  onClick={handleClick}
          className={`transform transition duration-200 ease-in-out ${clicked ? 'scale-90' : 'hover:scale-110'}`}>
            </FiShoppingCart> 
      </Link>
                        </div>
                        <Button>
                            Get Started
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
