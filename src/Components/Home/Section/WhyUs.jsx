import { FaCheck } from 'react-icons/fa';
import React from 'react'
import SectionTitle from "../../Common/SectionTitle"

const WhyUs = () => {

    const list = [
        {text:"We excel at creating responsive, visually stunning, and user-friendly interfaces using cutting-edge technologies like React, CSS frameworks, and JavaScript"},
        {text:"Focus on building user-friendly, responsive, and visually appealing designs."},
        {text:"Fast load times and performance optimization for a smooth user experience."},
        {text:"Collaborative approach, working closely with teams and clients to understand their needs."},
        {text:"Proven track record of delivering projects on time and within budget."},
    ]

  return (
    <section className='px-[20px] md:px-[50px] lg:px-[80px]  items-center pb-[80px] '>

        <SectionTitle title={"Benefits From Us"}/>
        
        <p className='font-[300] text-secondary'>We excel at creating responsive, visually stunning, and user-friendly interfaces using cutting-edge technologies like React, CSS frameworks, and JavaScript.</p>
        <div className='grid row grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center'>
        <div>
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

        <div className=' overflow-hidden '>
            <video controls muted width="600" className='mx-auto rounded-lg'>
                <source src='/Vedio/Vedio1.mp4' type='video/mp4'/>
            </video>
        </div>
        </div>
    </section>
  )
}

export default WhyUs
