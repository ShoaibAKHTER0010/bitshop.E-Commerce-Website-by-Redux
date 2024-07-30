import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import React, { useState } from 'react'
import Button from './Navbtn';
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import useProductCount from '../Customhooks';

const Navbar = ({ products }) => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about" },
        { name: "Wedding collections", link: "#wedding" },
        { name: "Winter collections", link: "#winter" },
        { name: "Shop now", link: "/reduxshop" },
    ];

    const productCount =useProductCount(products);

    const [open, setOpen] = useState(false);

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

    return (
        <div className='w-full bg-[#EFDCC7] border-b-2 border-slate-400 lower-div'>
            <div className='md:flex items-center justify-between max-w-7xl'>
                <div className="">
                    <Image src="/images/bit/bit-logo.png" alt="logo" width={500} height={800} className='transition-transform duration-300 ease-in-out transform hover:scale-105 w-[150px] md:w-[250px] h-[100] md:h-[150]' />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer -mt-4 md:hidden  z-50'>
                    {open ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
                </div>

                <div className={`md:flex md:items-center md:pb-0 py-4 md:static absolute bg-[#EFDCC7] w-full md:w-auto pl-10 md:pl-3 transition-all duration-500 ease-in-out ${open ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'}`}>
                    <ul className='md:flex gap-10 md:gap-4 lg:gap-10 justify-center items-center'>
                        {Links.map((link) => (
                            <li key={link.name} className="flex-wrap text-lg md:text-xs font-normal font-['Inter'] uppercase leading-[45px] md:leading-[15px] lg:leading-[20px] xl:leading-[30px] hover:border-t-2 hover:border-b-2 hover:border-black hover:translate-y-2
                            hover:transition-all duration-100 mb-0 md:mb-4">
                                <a href={link.link} className='text-[#4A3D2E] transition ease-in-out hover:shadow-xl duration-200'>{link.name}</a>
                            </li>
                        ))}
                        {/* shop-icon div */}
                       <div className='flex'>
                       <div className=' pb-0 md:pb-4 py-6 md:py-0'>
                        <Link href="/cartpage" passHref > 
        <FiShoppingCart size={30} color="green"  onClick={handleClick}
          className={`transform transition duration-200 ease-in-out ${clicked ? 'scale-90' : 'hover:scale-110'}`}>
            </FiShoppingCart> 
      </Link>    
      </div>  <div className='inline-flex mt-9 md:mt-3  text-xs text-red-700'>{productCount}</div>
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
