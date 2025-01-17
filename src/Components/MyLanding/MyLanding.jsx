import React from 'react'
import Hero from './section/Hero'
import Importance from './section/Importance'

const MyLanding = () => {
  return (
    <section className='fle flex-col space-y-32 '>
      <Hero/>
      <Importance/>
    </section>
  )
}

export default MyLanding
