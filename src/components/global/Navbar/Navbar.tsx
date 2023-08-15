import React from 'react';
import logo1 from '/public/images/logo-1.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex relative z-[999]'>
      <div className='w-1/6 flex justify-center items-center translate-x-8 translate-y-4'>
        <a href="/home">
          <Image src={logo1} alt="" className='w-full' />
        </a>
      </div>
      <div className='w-full h-full flex items-center font-junge font-medium text-[20px] text-gray-700'>
        <div className='w-full h-full flex justify-center items-center divide-x-2'>
          <a href="/about" className="px-10 hover:text-primary-500 transition-all">About</a>
          <a href="/blog" className="px-10 hover:text-primary-500 transition-all">Blog</a>
          <a href="/contact" className="px-10 hover:text-primary-500 transition-all">Contact</a>
          <a href="/resources" className="px-10 hover:text-primary-500  transition-all">Resources</a>
        </div>
        <button className='bg-primary-500 hover:bg-primary-400 mr-10 text-white font-primary hover:shadow-md transition-all max-w-[200px] w-[240px] rounded-lg  p-3 py-4 text-center text-[18px] font-bold'>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;