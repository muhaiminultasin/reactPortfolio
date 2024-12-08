import React from 'react'
import SectionTitle from '../../Common/SectionTitle'

const ProjectShowCase = () => {
  const Projects= [
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
  ]
  return (
    <section className='py-[100px] px-[20px] md:px-[50px] lg:px-[80px] text-center'>
      <SectionTitle title={"My Portfolio"} subTitle={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 text-start'>
        {
          Projects.map(({img,title,type},i)=>{
            return <div key={i} className='bg-darkPrimary shadow-custom-dark p-5 rounded-xl'>
            <img src={img} alt="" className='rounded-md'/>
            <div className='mt-5 text-secondary'>
              <h1 className='font-[300]'>{title}</h1>
              <p>{type} </p>
            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}

export default ProjectShowCase
