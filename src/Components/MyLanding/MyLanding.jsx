import React from 'react'
import Hero from './section/Hero'
import Importance from './section/Importance'

const MyLanding = () => {
  return (
    <section className='space-y-16 px-2 md:px-10 lg:px-20'>
      <Hero/>
      <Importance/>
    </section>
  )
}

export default MyLanding
