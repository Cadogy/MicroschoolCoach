import React from 'react'

const coachingSolutions = [
  {
    title: 'Start Your Own Microschool From Scratch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
  {
    title: 'From Homeschooling to Microschooling',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
  {
    title: 'Department of Education (DOE) Accredidation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
  },
]

const Solutions = () => {
  return (
    <div className='h-full flex flex-col lg:py-40 py-20 justify-center items-center gap-16 text-gray-700'>
      <div className='text-center max-w-[900px] flex flex-col gap-6'>
        <h2 className='font-junge lg:text-[3.25rem] text-[2.75rem] leading-[1.1em] text-primary-500'>The Perfect Educator Solutions</h2>
        <p className='leading-[1.25em] px-4 lg:text-[1.75rem] text-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='flex flex-wrap justify-center xl:gap-28 lg:gap-20 md:gap-12 gap-10'>
        {coachingSolutions.map((solution, index) => (
          <div key={index} className='w-[400px] h-[400px] rounded-3xl shadow-xl p-6 flex flex-col justify-between border-2 border-gray-700 hover:rounded-none transition-all group'>
            <div className='bg-primary-500 w-[60px] h-[60px] rounded-xl group-hover:rounded-none group-hover:scale-110 transition-all'></div>
            <h3 className='font-junge text-[26px]'>{solution.title}</h3>
            <p>{solution.description}</p>
            <button className='border-2 border-primary-500 rounded-xl py-3 text-primary-500 text-[18px] font-black font-junge hover:bg-primary-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all'>
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solutions
