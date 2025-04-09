import { Button } from '@nextui-org/react'
import React from 'react'
import Buttons from './Button'

const Navbar = ({scrollToSection, homeRef, portfolioRef,featureRef, packagesRef, contactRef}) => {
  return (
    <>
        <nav className='px-[20px] w-full max-w-screen-xl h-20  flex justify-between items-center backdrop-blur-2xl fixed z-50'>
            <div className="logo flex items-center justify-center text-primary text-2xl font-bold border-b-2 px-4 rounded border-primary">
                <p className='transform rotate-12'>T</p>
                <p className='transform -rotate-12'>S</p>
                <p className='transform rotate-12 '>N</p>
                <p className='transform rotate-12'>.</p>
            </div>

            <ul className='w-full hidden md:flex justify-end gap-5 md:gap-10 text-primary font-semibold me-5 '>
              <li onClick = {() => scrollToSection(homeRef)} className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Home</li>
              <li onClick = {() => scrollToSection(portfolioRef)} className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Portfolio</li>
              <li onClick = {() => scrollToSection(featureRef)} className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Features</li>
              <li onClick = {() => scrollToSection(packagesRef)} className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Packages</li>
              <li onClick = {() => scrollToSection(contactRef)} className='transition-all  duration-300 cursor-pointer hover:text-[#ff4c82]'>Contact</li>
            </ul>

            {/* <div>
               <Buttons name={"Hire Me"} className={"m-0"}/>
            </div> */}
        </nav> 
    </>
  )
}

export default Navbar
