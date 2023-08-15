import React from 'react'

const aboutCheckMarks = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
]

const About = () => {
  return (
    <div className='bg-primary-500 bg-opacity-30 w-full h-[90vh]'>
      <div className='w-full h-[90vh] flex sm:flex-row flex-col justify-evenly items-center sm:py-0 py-10'>
        <div className='w-full sm:w-1/2 h-full max-w-[800px] max-h-[80%] flex justify-center items-center'>
          <div className='bg-gray-400 w-[80%] h-full max-w-[800px] rounded-[7rem] sm:rounded-r-none sm:rounded-tl-[7rem] rounded-tl-none'>
            <img src="" alt="" />
          </div>
        </div>
        <div className='w-full sm:w-1/2 h-full max-w-[800px] max-h-[80%] flex flex-col sm:justify-evenly items-center sm:pr-10 sm:px-0 px-10 text-gray-700 sm:pt-0 pt-10'>
          <div>
            <h1 className='font-junge font-medium xl:text-[4.5em] text-[3.5em] sm:leading-[1em] leading-[1.25em]'>
              Expert Educator: <span className='text-primary-500 ml-0 md:ml-6'>Shiren Rattigan</span>
            </h1>
            <p className='w-full xl:text-[1.5em] text-[1em] leading-[1.75em]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='w-full flex flex-col gap-4 mb-4'>
            {aboutCheckMarks.map((item, index) => (
              <div className='w-full flex items-center gap-8 justify-center sm:justify-start'>
                <div className='w-[40px] h-[40px] bg-primary-500 rounded-full'></div>
                <p className='lg:text-[26px] text-[16px] font-semibold'>Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
          <div className='w-full text-[1.3em] font-junge font-semibold flex lg:gap-10 gap-4 lg:flex-row flex-col'>
            <button className='border-2 border-primary-500 rounded-xl py-4 px-14 font-black font-junge bg-primary-500 text-white hover:shadow-md hover:-translate-y-1 transition-all'>
              Start with Shiren
            </button>
            <div className='lg:w-1/2 h-full flex items-center lg:ml-0 ml-2'>
              <a href='/contact' className='underline'>
                Find out more about Shiren now! →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
