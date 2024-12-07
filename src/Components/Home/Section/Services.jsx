import React from 'react'

const Services = () => {

    const services = [
        {
            img:"",
            title:"Landing Page ",
            desc:"Professional Landing Page Design and Development Services. Whether you have a Figma or PSD design, we will meticulously transform it into a functional and visually appealing landing page. If you don’t have a design ready, we’ll take care of creating a custom, professional design based to your needs.",
        },
        {
            img:"",
            title:"Landing Page ",
            desc:"Professional Landing Page Design and Development Services. Whether you have a Figma or PSD design, we will meticulously transform it into a functional and visually appealing landing page. If you don’t have a design ready, we’ll take care of creating a custom, professional design based to your needs.",
        },
        {
            img:"",
            title:"Landing Page ",
            desc:"Professional Landing Page Design and Development Services. Whether you have a Figma or PSD design, we will meticulously transform it into a functional and visually appealing landing page. If you don’t have a design ready, we’ll take care of creating a custom, professional design based to your needs.",
        },
    ]

  return (
    <section className='px-[20px] md:px-[80px] pb-[100px]'>
      <h1 className="text-center text-[40px] text-primary">Our Services</h1>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        {services.map( ({title,desc},i) => {
            return <div key={i} className='p-5 rounded-lg mt-5'>
                    <h1 className='text-[25px] font-[500]'>{title}</h1>
                    <p className='font-[300] text-Peragraph mt-5'>{desc}</p>
            </div>
            
        })}
      </div>
    </section>
  )
}

export default Services;
