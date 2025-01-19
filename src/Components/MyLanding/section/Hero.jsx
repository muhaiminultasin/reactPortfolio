import React from 'react'
import hero_image from "/public/img/Landing2.png"
import Buttons from '../../Common/Button'

const Hero = () => {
  return (
    <div className="flex flex-col lg:h-screen lg:reltive">

        <div className=' text-center lg:absolute pt-20 lg:pt-52 z-50'>
            <h1 className='lg:w-3/4 mx-auto text-white text-2xl lg:text-4xl font-bold'>আপনার ব্যবসার জন্য আধুনিক পোর্টফোলিও এবং রিঅ্যাক্ট ল্যান্ডিং পেজ তৈরি করুন!</h1>
            <img src={hero_image} alt="T" className='h-full pt-20 lg:hidden'/>
            <p className='text-white text-xl lg:2xl mt-5'>পেশাদার ডিজাইন এবং ফাস্ট লোডিং ল্যান্ডিং পেজ, যা আপনার বিক্রি বাড়াতে সাহায্য করবে।</p>

            <div>
              <Buttons name={"Contact Me"} className={"text-inherit bg-white font-semibold"}/>
            </div>
        </div>

        <div className='hidden lg:h-full lg:opacity-30 lg:flex justify-center items-center'>
          <img src={hero_image} alt="T" className='h-full pt-20'/>
        </div>
    </div>
  )
}

export default Hero;
