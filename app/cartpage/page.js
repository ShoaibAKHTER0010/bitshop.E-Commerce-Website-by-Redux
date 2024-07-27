"use client";
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../libs/cartSlice';
import { clearCart } from '../../libs/cartSlice';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    alert(" One item has been removed from your card")
    dispatch(removeItem());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleBuy = () => {
    prompt("enter 'yes' to conform your choice ")
    alert(`Purchase successful! 😊`);

    dispatch(clearCart());
  };

  return (
    <div className=" mx-auto  flex flex-col justify-center items-center h-[100%]">
      <Navbar/>
      <h1 className="text-4xl font-bold text-center text-gray-800 py-10">Store Cart 🛒</h1>
      <div className='px-6'>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty please select some items 😢</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={item.image} alt={item.title} width={500} height={800} className="h-40 w-full object-contain mb-4" />
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-lg font-bold mb-4">${item.price}</p>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  onClick={ handleRemoveItem }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-center mt-8">
          <button 
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 mx-2"
            onClick={ handleClearCart }
          >
            Clear Cart
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 mx-2"
            onClick={handleBuy}
          >
            Buy..
          </button>
        </div>
      )}
    <div className='flex justify-center items-center pb-4'>
    <button className=" text-white font-[Poppins] px-8 p-3 bg-[#4A3D2E] rounded-full hover:border-black hover:border-2 
    transition-transform duration-200 ease-in-out transform hover:scale-105text-center mt-10 md:mt-16 hover:shadow-2xl  ">
        <Link href="/" >
          Go back for shoping
        </Link>
      </button>
    </div>

    </div>
  );
};

export default CartPage;

  