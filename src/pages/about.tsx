import * as React from 'react';

import CTA from '@/components/global/CTA/cta';
import Navbar from '@/components/global/Navbar/Navbar';
import Aboutlayout from '@/components/aboutpage/Aboutlayout';
import Footer from '@/components/global/Footer/Footer';
import Seo from '@/components/Seo';

export default function contact() {
  return (
    <div>
      <Seo
        title='About Shiren | TheMicroschoolCoach'
        description=''
        url='/about'
      />
      <Navbar />
      <Aboutlayout />
      <CTA />
      <Footer />
    </div>
  );
}
