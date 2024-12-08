import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import FindMe from '../../Common/FindMe'
import Buttons from '../../Common/Button'

const Contact = () => {
  return (
    <section className='px-[20px] md:px-[50px] lg:px-[80px]  text-center pb-[100px]'>
      <SectionTitle title={"Contact Me"} subTitle={"CONTACT"}/>

      <div className='text-start grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 mt-10'>
            <div className=' bg-darkPrimary shadow-custom-dark max-w-[400px] p-5 rounded-md'>
                <img src="img/handshake.jpg" className='rounded-sm h-[30%] w-full' alt="" />

                <h1 className='text-primary text-[30px] font-[700] mt-5'>TASIN MUHAIMINUL</h1>
                <p className='text-secondary text-[14px]'>Junior Front-end Developer and Desinger</p>
                <p className='text-secondary text-[14px] mt-5 '>I'm available for freelance work . Contact me via Call or Email</p>

                <p className='text-secondary text-[14px] mt-5'>Phone: <span>01824427215</span></p>
                <p className='text-secondary text-[14px]'>Whatsapp: <span>01794382332</span></p>
                <p className='text-secondary text-[14px] mt-5'>Email: <span>tasinmuhaiminul@gmail.com</span></p>
                <FindMe/>
            </div>

            <div className=' bg-darkPrimary shadow-custom-dark  p-5 rounded-md '>
                <form action="">
                  
                  <div className='flex flex-col text-secondary'>
                    <label htmlFor="name" className='mt-4'>Name:</label>
                    <input type="text" id='name' name='name' required className='bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2'/>
                    <label htmlFor="phone" className='mt-4'>Phone Number:</label>
                    <input type="text" id='phone' name='phone' required className='bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2'/>

                    <label htmlFor="email" className='mt-4'>Email:</label>
                    <input type="email" id='email' name='email' required className='bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2'/>

                    <label htmlFor="subject" className='mt-4'>Subject:</label>
                    <input type="text" id='subject' name='subject' required className='bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2'/>

                    <label htmlFor="message" className='mt-4'>Message</label>
                    <textarea name="message" id="message"  className='bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2 min-h-[120px]'></textarea>
                  </div>

                  <div  className='  md:mt-10 mt-5'>
                    <Buttons name={"Send Message"} className='text-primary ' />
                  </div>

                </form>
            </div>
      </div>
    </section>
  )
}

export default Contact
