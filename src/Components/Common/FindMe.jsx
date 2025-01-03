import React from 'react';
import { FaFacebookF,FaInstagram ,FaLinkedinIn  } from "react-icons/fa";


const FindMe = () => {

    const icons = [
        {
            img: <FaFacebookF className='text-primary  '/>,
            link:"https://www.facebook.com/muhaiminultasin"
        },
        {
            img: <FaInstagram className='text-primary  '/>,
        },
        {
            img: <FaLinkedinIn className='text-primary '/>,
        },
    ]

  return (
    <div className=' mb-0 opacity-1'>
        <p className='text-secondary text-[14px] text-center md:text-start'>FIND ME WITH</p>
        <div className='flex w-fit md:w-full  mx-auto md:mx-0 gap-5 mt-5'>
            {
                icons.map( ({img,link},i) => {
                    return <div key={i} className='bg-darkPrimary w-[50px] h-[40px] flex justify-center items-center text-center shadow-custom-dark hover:shadow-lg cursor-pointer transition-all duration-300'>
                    <a href={link} target='_blank'>
                    <div>
                        {img}
                    </div>
                    </a>
                </div>
                })
            }
        </div>
    </div>
  )
}

export default FindMe
