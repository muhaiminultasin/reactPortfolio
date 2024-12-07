import React from 'react'

const ProjectShowCase = () => {
  const Porijects= [
    {
      img:"",
      title:"",
      type:"",
    },
    {

    },
    {

    },
    {

    },
  ]
  return (
    <section className='py-[100px] px-[20px] md:px-[80px]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
        <div className='bg-black rounded-xl'>
          <img src="img/creative.png" alt="" className='rounded-xl'/>
          <div className='p-5'>
            <h1 className='font-[300]'>degic Web</h1>
            <p>Landing Page </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowCase
