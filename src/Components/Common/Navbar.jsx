import { Button } from '@nextui-org/react'
import React from 'react'
import Buttons from './Button'

const Navbar = () => {
  return (
    <>
        <nav className='px-[20px] w-full h-20  flex justify-between items-center backdrop-blur-2xl fixed z-50'>
            <div className="logo flex items-center justify-center text-primary text-2xl font-bold">
                <p className='transform rotate-12'>T</p>
                <p className='transform -rotate-12'>S</p>
                <p className='transform rotate-12 '>N</p>
                <p className='transform rotate-12'>.</p>
            </div>

            <ul className='w-full flex justify-end gap-5 md:gap-10 text-primary font-semibold me-5 md:me-20 lg:me-32'>
              <li className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Home</li>
              <li className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Portfolio</li>
              <li className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Features</li>
              <li className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Packages</li>
              <li className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Contact</li>
            </ul>

            <div>
               <Buttons name={"Hire Me"} className={"m-0"}/>
            </div>
        </nav> 
    </>
  )
}

export default Navbar
