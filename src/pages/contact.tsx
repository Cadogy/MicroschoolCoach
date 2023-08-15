import * as React from 'react';

import Footer from '@/components/global/Footer/Footer';
import Navbar from '@/components/global/Navbar/Navbar';
import Newsletter from '@/components/global/Newsletter/Newsletter';
import Contactlayout from '@/components/contactpage/Contactlayout'

export default function contact() {
  return (
    <div>
        <Navbar />
        <Contactlayout />
        <Newsletter />
        <Footer />
    </div>
  )
}