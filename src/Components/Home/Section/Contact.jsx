import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import FindMe from '../../Common/FindMe'

const Contact = () => {
  return (
    <section className='px-[20px] md:px-[50px] lg:px-[80px] text-center pb-[100px]'>
      <SectionTitle title={"Contact Me"} subTitle={"CONTACT"}/>

      <div className='text-start grid grid-cols-2 mt-10'>
            <div className=' bg-darkPrimary shadow-custom-dark max-w-[400px] p-5 rounded-md'>
                <img src="img/handshake.jpg" className='rounded-sm h-[30%] w-full' alt="" />

                <h1 className='text-primary text-[30px] font-[700] mt-5'>TASIN MUHAIMINUL</h1>
                <p className='text-secondary text-[14px]'>Junior Front-end Developer and Desinger</p>
                <p className='text-secondary text-[14px] mt-5 '>I'm available for freelance work . Contact me via Call or Email</p>

                <p className='text-secondary text-[14px] mt-5'>Phone: <span>01824427215</span></p>
                <p className='text-secondary text-[14px]'>Phone: <span>01794382332</span></p>
                <p className='text-secondary text-[14px] mt-5'>Email: <span>tasinmuhaiminul@gmail.com</span></p>
                <FindMe/>
            </div>

            <div className=' bg-darkPrimary shadow-custom-dark  p-5 rounded-md'>hello world</div>
      </div>
    </section>
  )
}

export default Contact
