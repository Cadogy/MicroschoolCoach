import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] flex md:flex-row flex-col-reverse justify-center items-center 2xl:px-0 md:px-12 px-4 2xl:gap-24 md:gap-16'>
      <div className='2xl:w-1/3 md:w-1/2 w-full h-full flex flex-col justify-center items-center text-gray-700'>
        <h1 className='font-junge font-medium xl:text-[4.5em] text-[3.5em] leading-[1em]'>
          Your <span className='text-primary-500'>Educator Journey</span> Starts Here
        </h1>
        <p className='w-full my-[6%] xl:text-[1.5em] text-[1.25em] leading-[1.75em]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='w-full xl:text-[1.3em] text-[1.1em] font-junge font-semibold flex lg:gap-6 lg:flex-row flex-col'>
          <button className='bg-primary-500 lg:w-1/2 w-full h-[70px] font-extrabold rounded-[0.6rem]'>
            Book Private Session
          </button>
          <div className='lg:w-1/2 w-full h-full flex items-center'>
            <a href='/contact' className='underline'>
              Have questions? Reach out now! →
            </a>
          </div>
        </div>
      </div>
      <div className='2xl:w-1/3 md:w-1/2 w-full md:h-full h-[90%] md:mt-0 mt-6 flex justify-center items-center'>
        <div className='bg-gray-400 w-full sm:h-[80%] h-full max-w-[800px] rounded-[7rem] rounded-tr-none'>
          <img src="your-image-src.jpg" alt="Your Alt Text" />
        </div>
      </div>
    </div>
  );
};

export default Hero;