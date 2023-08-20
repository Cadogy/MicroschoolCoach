import React from 'react';
import logo1 from '/public/images/logo-1.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='relative z-[999] m-auto flex h-[10vh] w-[94%]'>
      <div className='flex w-1/6 translate-x-8 translate-y-4 items-center justify-center'>
        <a href='/'>
          <Image src={logo1} alt='' className='w-full' />
        </a>
      </div>
      <div className='flex h-full w-full items-center text-[20px] font-medium text-gray-700'>
        <div className='flex h-full w-full items-center justify-center divide-x-2'>
          <a
            href='/about'
            className='font-junge hover:text-primary-500 px-10 transition-all'
          >
            About
          </a>
          <a
            href='/contact'
            className='font-junge hover:text-primary-500 px-10 transition-all'
          >
            Contact
          </a>
          <a
            href='/blog'
            className='font-junge hover:text-primary-500 px-10 transition-all'
          >
            Blog
          </a>
          <a
            href='/resources'
            className='font-junge hover:text-primary-500 px-10  transition-all'
          >
            Resources
          </a>
        </div>
        <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1)] p-3 py-[0.85rem] text-center text-[18px] font-bold text-white transition-all hover:cursor-pointer hover:bg-[rgb(255,193,193)] hover:shadow-lg'>
          Book Now
        </div>
      </div>
    </div>
  );
};

export default Navbar;
