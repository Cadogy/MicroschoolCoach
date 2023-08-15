import React from 'react';

const aboutCheckMarks = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
];

const About = () => {
  return (
    <div className='h-[90vh] w-full bg-[rgba(255,173,173,0.2)] bg-opacity-30'>
      <div className='flex h-[90vh] w-full flex-col items-center justify-evenly py-10 sm:flex-row sm:py-0'>
        <div className='flex h-full max-h-[80%] w-full max-w-[800px] items-center justify-center sm:w-1/2'>
          <div className='h-full w-[80%] max-w-[800px] rounded-[7rem] rounded-tl-none bg-gray-400 sm:rounded-r-none sm:rounded-tl-[7rem]'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='flex h-full max-h-[80%] w-full max-w-[800px] flex-col items-center px-10 pt-10 text-gray-700 sm:w-1/2 sm:justify-evenly sm:px-0 sm:pr-10 sm:pt-0'>
          <div>
            <h1 className='font-junge text-[3.5em] font-medium leading-[1.25em] sm:leading-[1em] xl:text-[4.5em]'>
              Expert Educator:{' '}
              <span className='text-primary-500 ml-0 md:ml-6'>
                Shiren Rattigan
              </span>
            </h1>
            <p className='w-full text-[1em] leading-[1.75em] xl:text-[1.5em]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='mb-4 flex w-full flex-col gap-4'>
            {aboutCheckMarks.map((item, index) => (
              <div className='flex w-full items-center justify-center gap-8 sm:justify-start'>
                <div className='bg-primary-500 h-[40px] w-[40px] rounded-full'></div>
                <p className='text-[16px] font-semibold lg:text-[26px]'>
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            ))}
          </div>
          <div className='font-junge flex w-full flex-col gap-4 text-[1.3em] font-semibold lg:flex-row lg:gap-10'>
            <button className='border-primary-500 font-junge bg-primary-500 rounded-xl border-2 px-14 py-4 font-black text-white transition-all hover:-translate-y-1 hover:shadow-md'>
              Start with Shiren
            </button>
            <div className='ml-2 flex h-full items-center lg:ml-0 lg:w-1/2'>
              <a href='/contact' className='underline'>
                Find out more about Shiren now! →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
