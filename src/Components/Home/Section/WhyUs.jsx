import {React, useEffect, useRef} from 'react'
import {gsap} from "gsap"
import { FaCheck } from 'react-icons/fa';
import SectionTitle from "../../Common/SectionTitle"

const WhyUs = () => {

    const  benefitsRef = useRef();

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.from(benefitsRef.current.querySelectorAll("h1,p,#content, #contentImage"), {
              x:100,
              duration:0.5,
              opacity:0,
              scrollTrigger:{
                trigger:benefitsRef.current,
              },
              stagger:{
                each:0.2,
              },
    
            });
        }, benefitsRef);
    
        return () => context.revert(); 
    }, []);

    const list = [
        {text:"I focus on every detail to ensure your website is visually appealing and user-friendly."},
        {text:"Free domain for one year"},
        {text:"Fast load times and performance optimization for a smooth user experience."},
        {text:"Collaborative approach, working closely with teams and clients to understand their needs."},
        {text:"I have a track record of not just meeting deadlines, but exceeding expectations while staying within budget."},
    ]

  return (
    <section ref={benefitsRef} className='px-[20px] md:px-[50px] lg:px-[80px]  items-center pb-[80px] '>

        <SectionTitle title={"Why Choose Me"}/>
        
        <p className='font-[300] text-secondary'>We excel at creating responsive, visually stunning, and user-friendly interfaces using cutting-edge technologies like React, CSS frameworks, and JavaScript.</p>
        <div className='grid row grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center'>
        <div id='content'>
            <div className='mt-5 col-span-4'>
                <ul>
                    {
                        list.map( ({text},i) => {
                            return <li key={i} className='flex gap-4 mt-5  items-center text-secondary'><FaCheck className='w-[30px] text-primary'></FaCheck> {text}</li>
                        })
                    }
                </ul>
            </div>
        </div>

        <div id='contentImage' className=' overflow-hidden '>
            <video controls muted width="600" className='mx-auto rounded-lg'>
                <source src='/Vedio/Vedio1.mp4' type='video/mp4'/>
            </video>
        </div>
        </div>
    </section>
  )
}

export default WhyUs
