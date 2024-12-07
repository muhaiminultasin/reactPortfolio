import React from 'react'
import Buttons from '../../Common/Button'

const Banner = () => {
  return (
    <section className='px-[20px] md:px-[80px] '>
      <div className='text-center bg-darkPrimary shadow-custom-dark rounded-xl px-5 py-10'>
      <h1 className='text-[25px] font-[700] text-secondary'>As a skilled front-end developer, I specialize in creating responsive, intuitive, and visually engaging websites that deliver exceptional user experiences.</h1>
      <Buttons className="bg-darkPrimary text-primary rounded-sm" name="Contact Me"></Buttons>
      </div>
    </section>
  )
}

export default Banner
