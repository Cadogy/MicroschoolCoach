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
        <h2 className='font-junge text-primary-500 text-[3.5em] font-normal leading-[1.1em]'>
          The Perfect Educator Solutions
        </h2>
        <p className='px-4 text-[1.5em] leading-[1.25em]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-20 xl:gap-28'>
        {coachingSolutions.map((solution, index) => (
          <div
            key={index}
            className='hover:bg-primary-500/10 hover:border-primary-500 group flex h-[400px] w-[400px] flex-col justify-between rounded-3xl border-[1px] border-[rgb(255,255,255)] p-6 shadow-xl transition-all hover:rounded-none hover:border-[1px]'
          >
            <div className='bg-primary-500/40 border-primary-500/40 group-hover:border-primary-500 h-[60px] w-[60px] rounded-xl border-[1px] transition-all group-hover:scale-110 group-hover:rounded-none'></div>
            <h3 className='font-junge text-[24px] font-normal'>
              {solution.title}
            </h3>
            <p>{solution.description}</p>
            <button className='border-primary-500 text-primary-500 hover:bg-primary-500 rounded-xl border-2 py-3 text-[18px] transition-all hover:-translate-y-1 hover:text-white hover:shadow-md'>
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
