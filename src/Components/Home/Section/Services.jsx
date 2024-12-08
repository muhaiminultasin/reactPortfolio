import React from 'react'
import { AiOutlineProfile } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { GiCompanionCube } from "react-icons/gi";
import SectionTitle from '../../Common/SectionTitle'

const Services = () => {

    const services = [
        {
            img:<AiOutlineProfile className='text-primary my-3 text-[30px]'/>,
            title:"Personal Portfolio ",
            desc:"Professional Landing Page Design and Development Services. Whether you have a Figma or PSD design, we will meticeeds.",
        },
        {
            img:<IoBookSharp className='text-primary my-3 text-[30px]'/>,
            title:"Landing Page ",
            desc:"Professional Landy transform it into a functional and visually appealing landing page. If you don’t have a design ready, we’ll take care of creating a custom, professional design based to your needs.",
        },
        {
            img:<GiCompanionCube className='text-primary my-3 text-[30px]'/>            ,
            title:"Agency Website ",
            desc:"Professional Landing Page Design and Development Services. Whether you have a Figma or PSD design, we will meticulously transform it into a functional and visually appealing landing page. If you don’t haneeds.",
        },
    ]

  return (
    <section className='px-[20px] md:px-[50px] lg:px-[80px] pb-[100px]'>
      <SectionTitle title={"What I Do"} subTitle={"FEATURES"}/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mt-5'>
        {services.map( ({img,title,desc},i) => {
            return <div key={i} className=' max-w-[400px] max-h-[400px] bg-darkPrimary shadow-custom-dark p-5 rounded-lg mt-5 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300 '>
              <div>{img}</div>
                    <h1 className='text-[25px] font-[500] '>{title}</h1>
                    <p className='font-[300] text-secondary mt-5'>{desc}</p>
            </div>
            
        })}
      </div>
    </section>
  )
}

export default Services;
