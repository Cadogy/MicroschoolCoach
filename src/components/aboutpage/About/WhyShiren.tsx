import React from 'react';

const WhyShiren = () => {
  return (
    <div>
      <div className='aboutHeroContainer flex flex-col items-center justify-center bg-[rgba(255,173,173,0.2)] py-16'>
        <div className='WhyWorkHeaderContainer flex flex-col items-center justify-center'>
          <h1
            id='whyworkheader'
            className='mb-4 text-4xl font-bold text-gray-800 md:mb-6'
          >
            Why Work with{' '}
            <span className='text-[rgb(255,173,173)]'>Shiren</span>?
          </h1>
          <p className='mb-12 max-w-[70ch] text-center text-[20px] text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='aboutFlexBox mt-6 flex w-[80%] gap-16 p-6'>
          <div className='aboutFlexBoxContainer flex w-[100%] flex-col items-center justify-center text-center'>
            <img
              className='w-[100px] rounded-3xl bg-[rgb(255,173,173)] p-4'
              src='/images/icons/laptop--v1.png'
              alt=''
            />
            <p className='mt-4 max-w-[30ch] text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className='aboutFlexBoxContainer flex w-[100%] flex-col items-center justify-center text-center'>
            <img
              className='w-[100px] rounded-3xl bg-[rgb(255,173,173)] p-4'
              src='/images/icons/price-comparison.png'
              alt=''
            />
            <p className='mt-4 max-w-[30ch] text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className='aboutFlexBoxContainer flex w-[100%] flex-col items-center justify-center text-center'>
            <img
              className='w-[100px] rounded-3xl bg-[rgb(255,173,173)] p-4'
              src='/images/icons/expensive-2.png'
              alt=''
            />
            <p className='mt-4 max-w-[30ch] text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className='aboutFlexBoxContainer flex w-[100%] flex-col items-center justify-center text-center'>
            <img
              className='w-[100px] rounded-3xl bg-[rgb(255,173,173)] p-4'
              src='/images/icons/map-marker.png'
              alt=''
            />
            <p className='mt-4 max-w-[30ch] text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShiren;
