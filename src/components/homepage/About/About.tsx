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
        <div className='aboutGridContainer'>
          <div className='aboutFlexBox flex max-w-[1620px] flex-row flex-nowrap items-center gap-16 p-8'>
            <div className='aboutFlexBoxContainer flex w-[100%] items-center justify-center'>
              <div className='aboutImageContent h-[500px] w-[700px]'>
                <img
                  className='h-[500px] w-[700px] rounded-[64px] rounded-tr-[64px] object-cover object-right'
                  src='/images/Colossal-Academy-1.jpg'
                  alt=''
                />
              </div>
            </div>

            <div className='flex flex-col items-start'>
              <div className='aboutFlexBoxContainer w-[100%] items-center justify-center'>
                <h1 className=' font-junge text-[3.5em] font-normal leading-[1.25em] sm:leading-[1em]'>
                  Expert Educator{' '}
                  <span className='font-junge text-primary-500 ml-0'>
                    Shiren Rattigan
                  </span>
                </h1>
                <p className='mt-8 w-full text-[1.5em] leading-[1.25em]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <div className='mt-12 flex w-full flex-col gap-2'>
                {aboutCheckMarks.map((item, index) => (
                  <div className='flex w-full items-center justify-center gap-8 sm:justify-start'>
                    <div className='bg-primary-500 h-[32px] w-[32px] rounded-full'></div>
                    <p className='text-[16px] font-normal text-gray-500 lg:text-[20px]'>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                ))}
              </div>

              <div className='mt-12 flex w-full flex-col items-center gap-4 text-[1.3em] font-semibold lg:flex-row'>
                <div className=''>
                  <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1)] p-3 py-4 text-center text-[18px] font-bold text-white transition-all hover:cursor-pointer hover:bg-[rgb(255,193,193)] hover:shadow-lg'>
                    Get Started Today
                  </div>
                </div>
                <div className='ml-2 flex h-full items-center lg:ml-0 lg:w-1/2'>
                  <a href='/contact' className='text-sm'>
                    Find out more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
