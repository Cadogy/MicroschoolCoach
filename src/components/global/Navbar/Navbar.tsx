import React, { useState } from 'react';
import logo1 from '/public/images/logo-1.png';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop */}
      <div className='relative z-[999] m-auto sm:flex hidden h-[10vh] w-[94%]'>
        <div className='flex w-[200px] translate-x-4 translate-y-2 items-center justify-center'>
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
      {/* Mobile */}
      <div className='relative z-[999] m-auto flex sm:hidden h-[8vh] w-full'>
        <div className='flex w-[200px] translate-x-2 items-center justify-center'>
          <a href='/'>
            <Image src={logo1} alt='' className='w-full' />
          </a>
        </div>
        <div className='flex h-full w-full items-center justify-end pr-4'>
          <button
            onClick={toggleMobileMenu}
            className='text-gray-700 hover:text-primary-500 transition-colors focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className='absolute top-[8vh] left-0 w-full bg-gray-100 p-4' style={{ zIndex: 1000 }}>
            {/* Mobile menu links */}
            <a href='/about' className='block my-2 font-junge hover:text-primary-500 transition-all'>
              About
            </a>
            <a href='/contact' className='block my-2 font-junge hover:text-primary-500 transition-all'>
              Contact
            </a>
            <a href='/blog' className='block my-2 font-junge hover:text-primary-500 transition-all'>
              Blog
            </a>
            <a href='/resources' className='block my-2 font-junge hover:text-primary-500 transition-all'>
              Resources
            </a>
            {/* Mobile menu "Book Now" button */}
            <div className='w-full mt-4 rounded-lg bg-[rgba(255,173,173,1)] p-3 py-[0.85rem] text-center text-[18px] font-bold text-white transition-all hover:cursor-pointer hover:bg-[rgb(255,193,193)] hover:shadow-lg'>
              Book Now
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;