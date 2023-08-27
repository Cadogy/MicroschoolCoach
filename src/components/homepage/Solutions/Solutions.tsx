import React from 'react';

const coachingSolutions = [
  {
    title: 'Starting Your Own Microschool From Scratch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
  {
    title: 'From Homeschooling to Microschooling',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
  {
    title: 'Department of Education (DOE) Accredidation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
];

const Solutions = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-16 py-20 text-gray-700 lg:py-40'>
      <div className='flex max-w-[900px] flex-col gap-6 text-center'>
        <h2 className='font-blackmango text-primary-500 text-[3em] md:text-[3.5em] font-normal leading-[1.1em]'>
          The Perfect Educator Solutions
        </h2>
        <p className='px-4 text-[1.5em] leading-[1.25em]'>
        Our carefully crafted solutions provide educators with the tools and strategies needed to thrive in today's dynamic educational landscape.
        </p>
      </div>
      <div className='flex flex-wrap justify-around gap-y-6'>
        {coachingSolutions.map((solution, index) => (
          <div
            key={index}
            className='hover:bg-primary-500/10 hover:border-primary-500 group flex md:h-[400px] h-[280px] mx-6 md:w-[400px] flex-col justify-between rounded-3xl border-[1px] border-[rgb(255,255,255)] p-6 shadow-xl transition-all hover:border-[1px]'
          >
            <div className='flex items-center lg:hidden'>
              <div className='bg-primary-500/40 border-primary-500/40 group-hover:border-primary-500 h-[60px] min-w-[60px] rounded-xl border-[1px] transition-all group-hover:scale-110 group-hover:rounded-none flex lg:hidden scale-90'></div>
              <h3 className='font-junge text-[24px] font-normal flex lg:hidden ml-4'>
                {solution.title}
              </h3>
            </div>
            <div className='bg-primary-500/40 border-primary-500/40 group-hover:border-primary-500 h-[60px] w-[60px] rounded-xl border-[1px] transition-all group-hover:scale-110 group-hover:rounded-none hidden lg:flex'></div>
            <h3 className='font-junge text-[24px] font-normal mt-4 hidden lg:flex'>
              {solution.title}
            </h3>
            <p>{solution.description}</p>
            <button className='border-primary-500 text-primary-500 hover:bg-primary-500 rounded-xl border-2 hover:py-4 py-3 text-[18px] transition-all  hover:text-white hover:shadow-md translate-y-1'>
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
