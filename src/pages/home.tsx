import * as React from 'react';

import Footer from '@/components/global/Footer/Footer';
import Navbar from '@/components/global/Navbar/Navbar';
import Newsletter from '@/components/global/Newsletter/Newsletter';
import Homelayout from '@/components/homepage/Homelayout'

export default function home() {
  return (
    <div>
        <Navbar />
        <Homelayout />
        <Newsletter />
        <Footer />
    </div>
  )
}