import React from 'react'

const Button = (props) => {
  return (
  <div className='px-4 lg:px-2 py-4'>
      <button className=' text-white font-[Poppins] px-10 md:px-6 p-3 bg-[#4A3D2E] rounded-full hover:border-[#4A3D2E] hover:border-2 hover:bg-white hover:text-[#4A3D2E]
    transition-transform duration-200 ease-in-out transform hover:scale-105 my-8 md:my-0'>
      {props.children}
    </button>
  </div>
  )
}

export default Button