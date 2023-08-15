import * as React from 'react';

import CTA from '@/components/global/CTA/cta';
import Navbar from '@/components/global/Navbar/Navbar';
import Aboutlayout from '@/components/aboutpage/Aboutlayout';
import Footer from '@/components/global/Footer/Footer';

export default function contact() {
  return (
    <div>
        <Navbar />
        <Aboutlayout />
        <CTA />
        <Footer />
    </div>
  )
}