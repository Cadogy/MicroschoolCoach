import * as React from 'react';

import Footer from '@/components/global/Footer/Footer';
import Navbar from '@/components/global/Navbar/Navbar';
import Newsletter from '@/components/global/Newsletter/Newsletter';
import Homelayout from '@/components/homepage/Homelayout';
import Seo from '@/components/Seo';

export default function home() {
  return (
    <div>
      <Seo
        title='Creating Microschools & Educational Institutions | TheMicroschoolCoach'
        description=''
        url='/'
      />
      <Navbar />
      <Homelayout />
      <Newsletter />
      <Footer />
    </div>
  );
}
