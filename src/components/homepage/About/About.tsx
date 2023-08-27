import React from 'react';

const aboutCheckMarks = [
  { description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' },
  { description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' },
  { description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' },
];

const About = () => {
  return (
    <div className='h-[90vh] w-full bg-[rgba(255,173,173,0.2)] bg-opacity-30'>
      <div className='flex h-[90vh] w-full flex-col items-center justify-evenly py-10 sm:flex-row sm:py-0'>
        <div className='aboutGridContainer'>
          <div className='aboutFlexBox flex max-w-[1620px] md:flex-row flex-col-reverse flex-nowrap items-center gap-16 p-8'>
            <div className='aboutFlexBoxContainer flex items-center justify-center md:w-2/5'>
              <div className='aboutImageContent rounded-[64px] rounded-r-none rounded-br-md rounded-tr-md bg-[rgb(255,173,173)]/20 p-3'>
                <img
                  className='h-[250px] md:h-[500px] w-[700px] rounded-[64px] rounded-r-none rounded-br-md rounded-tr-md object-cover object-left'
                  src='/images/Colossal-Academy-1.jpg'
                  alt=''
                />
              </div>
            </div>

            <div className='flex flex-col items-start md:w-3/5 w-full'>
              <div className='aboutFlexBoxContainer w-[100%] items-center justify-center'>
                <h1 className=' font-blackmango text-[3em] lg:text-[3.5em] font-normal leading-[1.25em] sm:leading-[1em]'>
                  Expert Educator{' '}
                  <span className='font-blackmango text-primary-500 ml-0'>
                    Shiren Rattigan
                  </span>
                </h1>
                <p className='mt-8 w-full text-[1.25em] lg:text-[1.5em] leading-[1.25em]'>
                Welcome to the world of transformative education led by Shiren Rattigan. With years of experience and a passion for teaching, Shiren is dedicated to helping educators reach their fullest potential.
                </p>
              </div>
              <div className='ml-6 mt-12 lg:flex w-full flex-col gap-2 hidden'>
                {aboutCheckMarks.map((item, index) => (
                  <div className='flex w-full items-center justify-center gap-8 sm:justify-start'>
                    <div className='bg-primary-500 h-[32px] w-[32px] rounded-full'></div>
                    <p className='text-[16px] font-normal text-gray-500 lg:text-[20px]'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className='mt-12 flex w-full items-center gap-4 text-[1.3em] font-semibold'>
                <a href="/about">
                  <div className=''>
                    <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1)] p-3 py-4 text-center text-[18px] font-bold text-white transition-all hover:cursor-pointer hover:bg-[rgb(255,193,193)] hover:shadow-lg'>
                      Get Started Today
                    </div>
                  </div>
                </a>
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
