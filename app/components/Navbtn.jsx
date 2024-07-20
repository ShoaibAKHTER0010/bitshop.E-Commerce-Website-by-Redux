import React from 'react'

const Button = (props) => {
  return (
  <div className='px-4 lg:px-2 py-4'>
      <button className=' text-white font-[Poppins] px-10 md:px-3 p-3 bg-[#a35377] rounded-[6.04px] hover:border-gray-200 hover:border-2 hover:bg-[#ac7e93]
    transition-transform duration-300 ease-in-out transform hover:scale-110 my-8 md:my-0'>
      {props.children}
    </button>
  </div>
  )
}

export default Button