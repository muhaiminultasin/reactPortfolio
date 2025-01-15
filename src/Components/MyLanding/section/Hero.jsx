import React from 'react'
import hero_image from "../../../../public/img/Landing2.png"

const Hero = () => {
  return (
    <div className="w-full ">
        <img src={hero_image} alt="" className='md:h-[70vh] mx-auto pt-20'/>
        <div className='flex flex-col  items-center mt-10'>
            <h1 className='text-primary text-2xl  lg:text-4xl text-center font-bold lg:font-[900] w-full lg:w-[80%] mx-auto'>আপনার ব্যবসার জন্য আধুনিক পোর্টফোলিও এবং রিঅ্যাক্ট ল্যান্ডিং পেজ তৈরি করুন!</h1>
            <p className='text-white text-xl lg:2xl mt-5 text-center'>পেশাদার ডিজাইন এবং ফাস্ট লোডিং ল্যান্ডিং পেজ, যা আপনার বিক্রি বাড়াতে সাহায্য করবে।</p>
        </div>
    </div>
  )
}

export default Hero
