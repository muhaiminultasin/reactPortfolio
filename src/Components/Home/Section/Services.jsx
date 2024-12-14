import {React, useEffect, useRef} from 'react'
import {gsap} from "gsap"
import { AiOutlineProfile } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { GiCompanionCube } from "react-icons/gi";
import SectionTitle from '../../Common/SectionTitle'

const Services = () => {

  const  servicesRef = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
        gsap.from(servicesRef.current.querySelectorAll("h1,p,#items"), {
          x:100,
          opacity:0,
          scrollTrigger:{
            trigger:servicesRef.current,
            
          },
          stagger:{
            each:0.2,
          },

        });
    }, servicesRef);

    return () => context.revert(); 
}, []);

    const services = [
        {
            img:<AiOutlineProfile className='text-primary my-3 text-[30px]'/>,
            title:"Personal Portfolio ",
            desc:"Transform Your Personal Portfolio with Expert Design and Development Services! Whether you have a stunning Figma layout or a polished PSD design, we are here to bring your vision to life. Let's create something extraordinary together!",
        },
        {
            img:<IoBookSharp className='text-primary my-3 text-[30px]'/>,
            title:"Landing Pages ",
            desc:"Professional Landy specializes in designing effective and visually appealing landing pages. If you don't have a design, we can create a custom solution tailored to your needs.",
        },
        {
            img:<GiCompanionCube className='text-primary my-3 text-[30px]'/>            ,
            title:"Agency Websites ",
            desc:"I specialize in designing modern agency websites that engage audiences and strengthen brand identity. By utilizing responsive layouts and seamless animations, I ensure an exceptional user experience.",
        },
    ]

  return (
    <section id='services' ref={servicesRef} className='px-[20px] md:px-[50px] lg:px-[80px] pb-[100px]'>
      <SectionTitle  title={"What I Do"} subTitle={"FEATURES"}/>

      <div id='items' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mt-5'>
        {services.map( ({img,title,desc},i) => {
            return <div id='item'  key={i} className=' max-w-[400px] max-h-[400px] bg-darkPrimary shadow-custom-dark p-5 rounded-lg mt-5 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300 '>
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
