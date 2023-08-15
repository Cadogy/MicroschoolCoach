import React from 'react';
import logo1 from '/public/images/logo-1.png';
import Image from 'next/image';


const Navbar = () => {
    return (
    <div className='w-full h-[10vh] flex'>
      <div className='w-1/6 flex justify-center items-center translate-x-8 translate-y-4'>
          <Image src={logo1} alt="" className='w-full' />
      </div>
      <div className='w-full h-full flex items-center font-junge font-semibold text-[24px] text-gray-800'>
        <div className='w-full h-full flex justify-end items-center'>
          <a href="/about" className="px-8 py-4 rounded-3xl rounded-b-none hover:-translate-y-1 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 transition-all">About</a>
          <a href="/blog" className="px-8 py-4 rounded-3xl rounded-b-none hover:-translate-y-1 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 transition-all">Blog</a>
          <a href="/contact" className="px-8 rounded-3xl rounded-b-none py-4 hover:-translate-y-1 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 transition-all">Contact</a>
          <a href="/resources" className="px-8 py-4 rounded-3xl rounded-b-none hover:-translate-y-1 hover:text-primary-500  hover:bg-primary-500 hover:bg-opacity-30 transition-all">Resources</a>
        </div>
        <button className='w-full bg-primary-500 hover:bg-primary-400 px-8 py-4 mr-10 rounded-xl font-medium text-white font-primary hover:shadow-xl transition-all max-w-[250px]'>
          Book Now
        </button>
      </div>  
    </div>
  );
};

export default Navbar;
