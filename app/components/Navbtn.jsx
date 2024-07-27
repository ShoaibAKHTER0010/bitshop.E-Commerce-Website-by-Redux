import React from 'react'

const Button = (props) => {
  return (
  <div className=' pb-4'>
      <button className=' text-white font-[Poppins] px-16 md:px-4 xl:px-6 p-3 md:p-2 lg:p-3  bg-[#4A3D2E] hover:bg-blue-300 rounded-full md:rounded-2xl xl:rounded-full  my-8 md:my-0 leading-7 md:leading-tight lg:leading-7'>
      {props.children}
    </button>
  </div>
  )
}

export default Button