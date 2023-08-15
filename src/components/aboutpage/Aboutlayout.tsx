import Hero from '@/components/aboutpage/About/Hero';
import WhoIs from '@/components/aboutpage/About/WhoIs';
import WhyShiren from '@/components/aboutpage/About/WhyShiren';
import React from 'react';

const Aboutlayout = () => {
  return (
    <div>
      <Hero />
      <WhyShiren />
      <WhoIs />
    </div>
  );
};

export default Aboutlayout;
