import {React,useEffect, useRef} from 'react';
import {gsap} from "gsap";
import Buttons from '../../Common/Button'

const Banner = ({onContactClick}) => {

  const bannerRef = useRef();

  useEffect( () => {
    const context = gsap.context( () => {
      gsap.from(bannerRef.current.querySelector("#bannerItems"), {
        x:100,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
          trigger:bannerRef.current,
          start:"top 70%",
          end:"top 40%",
          scrub:2,
        },
        stagger:{
          each:0.2,
        },
      })
    },bannerRef );

    return () => {
      context.revert();
    }
  },[]);

  return (
    <section ref={bannerRef} className='px-[20px] md:px-[80px] '>
      <div id='bannerItems' className='text-center bg-darkPrimary shadow-custom-dark rounded-xl px-5 py-10'>
      <h1 className='text-[25px] font-[700] text-secondary'>As a skilled front-end developer, I specialize in creating responsive, intuitive, and visually engaging websites that deliver exceptional user experiences.</h1>
      <Buttons onClick={onContactClick} className="bg-darkPrimary text-primary rounded-sm" name="Contact Me"></Buttons>
      </div>
    </section>
  )
}

export default Banner;
