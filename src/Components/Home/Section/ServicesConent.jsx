import {React,useEffect, useRef} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ServicesConent = () => {

  const ServicesConentRef = useRef();

  useEffect( () => {
    const context = gsap.context( () => {
      gsap.from(ServicesConentRef.current.querySelector("p"), {
        x:100,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
          trigger:ServicesConentRef.current,
          start:"top 70%",
          end:"top 40%",
          markers:true,
          scrub:2,
        }
      })
    },ServicesConentRef );

    return () => {
      context.revert();
    }
  },[]);

  

  return (
    <div ref={ServicesConentRef}  className='px-[20px] md:px-[80px] py-[90px] bg-blur-lg text-start md:text-center text-[18px]'>
      <p className='text-secondary'>Are you looking for a professional front-end developer to bring your ideas to life? Look no further! With expertise in HTML, CSS, JavaScript, and React, I create stunning, responsive, and user-friendly interfaces based on your needs.</p>
    </div>
  )
}

export default ServicesConent
