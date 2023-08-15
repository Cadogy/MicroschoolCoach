import React from 'react';

const Hero = () => {
  return (
    <div className='relative flex h-[90vh] w-full flex-col-reverse items-center justify-center overflow-hidden px-4 md:flex-row md:gap-16 md:px-12 2xl:gap-24 2xl:px-0'>
      <div className='absolute inset-0 origin-bottom-left transform bg-gradient-to-b from-white to-[rgba(255,173,173,0.2)]'></div>
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center text-gray-700 md:w-1/2 2xl:w-1/3'>
        <h1 className='font-junge text-[3.5em] font-medium leading-[1em] xl:text-[4.5em]'>
          Your <span className='text-primary-500'>Educator Journey</span> Starts
          Here
        </h1>
        <p className='my-[6%] w-full text-[1.5em] leading-[1.25em]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex w-full flex-col items-center text-[1.1em] font-semibold lg:flex-row lg:gap-6 xl:text-[1.3em]'>
          <div className=''>
            <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1)] p-3 py-4 text-center text-[18px] font-bold text-white transition-all hover:cursor-pointer hover:bg-[rgb(255,193,193)] hover:shadow-lg'>
              Learn more
            </div>
          </div>
          <div className='flex h-full w-full items-center'>
            <a
              href='/contact'
              className='group flex flex-col transition-all hover:text-[rgba(255,173,173,1)]'
            >
              <span className='text-md'>Have questions?</span>
              <span className='text-sm'>Reach out now! →</span>
            </a>
          </div>
        </div>
      </div>
      <div className='aboutImageContent relative z-10 flex h-[500px] w-[500px] flex-col items-start rounded-2xl rounded-bl-[28px] rounded-tl-[74px] bg-[rgb(255,173,173)]/20 p-3'>
        <img
          className='rounded-bl-[64px] rounded-br-[12px] rounded-tl-[64px] rounded-tr-[8px]'
          src='/images/shiren-headshot.jpeg'
          alt=''
        />
        <img className='-mt-12 w-[182px]' src='/images/people.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
