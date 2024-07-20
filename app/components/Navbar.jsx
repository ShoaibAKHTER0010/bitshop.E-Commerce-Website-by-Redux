import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import React, { useState } from 'react'
import Button from './Navbtn';

const Navbar = () => {
    const Links = [
        { name: "About us", link: "/" },
        { name: "Wedding collections", link: "/" },
        { name: "Summer collections", link: "/" },
        { name: "Discover new", link: "/" },
        { name: "Shop now", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='w-full bg-[#a13b69]'>
            <div className='md:flex items-center justify-between max-auto max-w-7xl'>
                <div className="pl-7">
                    <Image src="/images/bit/bit-logo.PNG" alt="logo" width={250} height={200} className='transition-transform duration-300 ease-in-out transform hover:scale-110 w-[200] md:w-[250] h-[150] md:h-[200]' />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
                    {open ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
                </div>

                <div className={`md:flex md:items-center md:pb-0 py-10 md:static absolute bg-[#a13b69] w-full md:w-auto pl-14 transition-all duration-500 ease-in-out ${open ? 'top-20 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'}`}>
                    <ul className='md:flex gap-10 justify-center items-center'>
                        {Links.map((link) => (
                            <li key={link.name} className="flex-wrap text-lg md:text-xs font-normal font-['Inter'] uppercase leading-[45px] md:leading-[15px] lg:leading-[35px] hover:border-t-2 hover:border-b-2 hover:border-white hover:translate-y-3 hover:transition-all duration-100 mb-0 md:mb-6">
                                <a href={link.link} className='text-white transition ease-in-out hover:shadow-xl duration-200'>{link.name}</a>
                            </li>
                        ))}
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
