import React from 'react'
import Button from "../../Common/Button";

const Hero = () => {
  return (
    <section className='px-[80px] pt-[140px] pb-[20px] text-center'>
      <h1 className="text-[70px] font-[900] text-primary text-center">Web Solutions</h1>
      <h1 className="text-[30px] font-[700] text-white max-w-[650px] mx-auto mt-5 leading-[40px]">Front-End Development, Crafting Modern & Responsive Web Solutions.</h1>
      
      <div className="flex gap-5 w-fit mx-auto">
      <Button name={"View My Work"} className={""} />
      <Button name={"Contact Me"} className={""} />
      </div>
    </section>
  )
}

export default Hero
