import React from 'react'

import About from '@/components/homepage/About/About';
import Accolades from '@/components/homepage/Accolades/Accolades';
import Hero from '@/components/homepage/Hero/Hero';
import Solutions from '@/components/homepage/Solutions/Solutions';
import Testimonials from '@/components/homepage/Testimonials/Testimonials';

const homelayout = () => {
  return (
    <div>
      <Hero />
      <Accolades />
      <Solutions />
      <About />
      <Testimonials />
    </div>
  )
}

export default homelayout