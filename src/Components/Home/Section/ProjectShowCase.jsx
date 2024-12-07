import React from 'react'

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
    <section className='py-[100px] px-[20px] md:px-[80px]'>
      <h1 className='text-center text-primary  text-[40px] '>Projects Showcase</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {
          Projects.map(({img,title,type},i)=>{
            return <div key={i} className='bg-black rounded-xl'>
            <img src={img} alt="" className='rounded-xl'/>
            <div className='p-5'>
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
