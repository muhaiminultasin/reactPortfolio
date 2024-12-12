import {React, useEffect, useRef} from 'react'
import {gsap} from "gsap"
import FindMe from '../../Common/FindMe';
import SkillOn from '../../Common/SkillOn';

const Hero = () => {

  const  heroRef = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
        gsap.from(heroRef.current.querySelectorAll("p, h1"), {
            x: 100,
            duration: 0.5,
            opacity:0,
            stagger:{
              each:0.2,
            }
        });
    }, heroRef);

    return () => context.revert(); 
}, []);

  return (
    <section id='hero' ref={heroRef} className='px-[20px] md:px-[50px] lg:px-[80px] pt-[140px] pb-[20px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      <div>
        <p className="text-base font-[300] text-white">Hi, I'm </p>
        <h1 className='text-primary text-[40px] font-[700] leadin'>TASIN MUHAIMINUL</h1>
        <h1 className="text-[30px] font-[500] text-white max-w-[650px] leading-[40px]">Front-End Developer</h1>
        <p className='text-secondary mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ut doloremque minima. Reprehenderit cumque, quas fugit in alias dolorem dolor, iste vero distinctio atque, eveniet temporibus ducimus cum explicabo ex.</p>

        <div className=" mt-10 md:mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
          <FindMe/>
          <SkillOn/>
        </div>
        

      </div>
      <div>
      </div>
    </section>
  )
}

export default Hero
