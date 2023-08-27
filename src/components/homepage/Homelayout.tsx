import React from 'react'

import About from '@/components/homepage/About/About';
import Accolades from '@/components/homepage/Accolades/Accolades';
import Hero from '@/components/homepage/Hero/Hero';
import Solutions from '@/components/homepage/Solutions/Solutions';
import Testimonials from '@/components/homepage/Testimonials/Testimonials';
import Inline from '@/components/global/Calendly/Inline';

const homelayout = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Accolades />
      <Solutions />
      <About />
      <Testimonials />
      {/* <Inline /> */}
    </div>
  )
}

export default homelayout