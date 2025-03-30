import Link from 'next/link'
import React, { useState } from 'react'

const Header = (props) => {
  const logOutHandeler = () =>{
    props.changeUser('')
  }
  return (
    <div className=' text-white text-2xl font-medium p-3'>
        <div className='flex justify-between' >
            <h3 className=''>Hello, <span className='text-blue-800 text-4xl font-bold'>{props.data.name}...👋 </span> </h3>
            <button className='bg-transparent border hover:bg-[#2c2c7c] transition duration-250 rounded-md px-3 py-1' onClick={logOutHandeler}> Logout </button>
        </div>
    </div>
  )
}

export default Header 