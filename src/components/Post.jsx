import React from 'react'
import '../App.css'
function Post({ imagen, titulo }) {
  return (
    <div className='my-10'>
      <div className='relative w-[400px] h-[267px] md:w-[337px] md:h-[227px] lg:w-[300px] lg:h-[217px] 2xl:w-[500px] 2xl:h-[400px]  text-center mx-auto overflow-hidden group'>
        <div className="relative">
          <img
            src={`${imagen}`}
            className='mx-auto duration-500 transition-transform absolute top-0 left-0'
            alt=""
          />
          <div className="absolute top-0 left-0 w-[437px] h-[268px] lg:h-[200px] 2xl:h-[332px] 2xl:w-[500px] bg-black opacity-0 duration-500 group-hover:opacity-50 transition-opacity"></div>
        </div>
      </div>
      <h2 className='text-3xl font-semibold uppercase font-playfair text-center my-4 text-gray-900 text'>
        {titulo}
      </h2>
    </div>
  )
}

export default Post