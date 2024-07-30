"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../libs/cartSlice';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { trimDescription } from '../utils/Trimer';



const Winter = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    alert(`${product.title}, has been selected`);

    dispatch(addItem(product));
  };

  return (
    <main className=" w-full bg-[#F1DFCA] ">
        <Navbar/>
      <div className=" mx-auto  max-w-7xl flex flex-col justify-center items-center px-10 ">
        <h1 className=" text-[#4A3D2E] text-[35px] md:text-[45px] font-extrabold font-['Manrope'] leading-[35px] md:leading-[50px] py-16 text-center">Winter Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col border-2 border-slate-400 ">
                <Image src={product.image} alt={product.title} width={500} height={800} className="h-40 md:h-48 w-48 md:w-full object-contain mb-4" />
                <h2 className="text-sm md:text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4 flex-1 overflow-auto leading-tight">{trimDescription(product.description, 100)}</p>
                <p className="text-sm md:text-lg font-bold mb-4">${product.price}</p>
                <button 
                  className="text-[#4A3D2E]  font-[Poppins] px-6 p-2 mt-8  rounded-full border-black  border-2 bg-white hover:bg-[#EFDCC7]
    transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
           <div className='flex w-full justify-center items-center gap-10 h-[40vh] '>
             <p className="text-center font-bold leading-9">Loading products...  </p>
             <div className='loading '></div>
           </div>
          )}
        </div>
        <div className="text-center mt-8 text-black font-bold py-10">
          <Link href="/" className=' hover:underline underline-offset-8 text-pretty'>
            Discover more
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Winter ;