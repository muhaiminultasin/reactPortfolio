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
        },
        stagger:{
          each:0.2,
        },
      })
    },ServicesConentRef );

    return () => {
      context.revert();
    }
  },[]);

  

  return (
    <div ref={ServicesConentRef}  className='px-[20px] md:px-[80px] bg-blur-lg text-start  text-[18px]'>
      <p className='text-secondary'>Are you looking for a friendly front-end developer who can turn your ideas into stunning digital experiences? You've come to the right place! With a solid background in HTML, CSS, JavaScript, and React, I specialize in crafting engaging and responsive user interfaces. I believe in collaboration and take the time to understand your unique vision and needs. By discussing your project goals and desired features, I ensure the final product aligns perfectly with your brand. Attention to detail is key for me—I aim to create designs that are not only visually appealing but also perform smoothly across all devices. Whether you're launching a new platform, refreshing an existing site, or adding interactive elements, I’m dedicated to delivering results that exceed your expectations. Let’s team up to bring your ideas to life! I look forward to creating an amazing digital experience for you.</p>
    </div>
  )
}

export default ServicesConent;
