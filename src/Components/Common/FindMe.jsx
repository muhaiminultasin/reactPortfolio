import React from 'react';
import { FaFacebookF,FaInstagram ,FaLinkedinIn  } from "react-icons/fa";


const FindMe = () => {

    const icons = [
        {
            img: <FaFacebookF />,
            href:""
        },
        {
            img: <FaInstagram />,
        },
        {
            img: <FaLinkedinIn />,
        },
    ]

  return (
    <div className='mt-5 mb-0'>
        <p className='text-secondary text-[14px]'>FIND ME WITH</p>
        <div className='flex gap-5 mt-5'>
            {
                icons.map( ({img},i) => {
                    return <div key={i} className='bg-darkPrimary w-[50px] h-[40px] flex justify-center items-center shadow-custom-dark'>
                    <a href="">
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