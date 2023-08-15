import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

const Hero = () => {
  return (
    <div>
      <div className='aboutHeroContainer flex h-[90vh] items-center justify-center'>
        <div className='aboutGridContainer'>
          <div className='aboutFlexBox flex max-w-[90rem] flex-nowrap items-center p-6'>
            <div className='aboutFlexBoxContainer flex w-[100%] items-center justify-center'>
              <div className='aboutImageContent h-[500px] w-[500px]'>
                <img
                  className='rounded-bl-[64px] rounded-br-[64px] rounded-tl-[64px]'
                  src='/images/shiren-headshot.jpeg'
                  alt=''
                />
              </div>
            </div>

            <div className='aboutFlexBoxContainer w-[100%] items-center justify-center'>
              <h1 className='mb-12'>
                The
                <span className='px-1 text-[rgb(255,173,173)]'>
                  Microschool
                </span>
                Maven
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
              <div className='authorHeroVideoButton'>
                <h4 className='mt-6 flex flex-row items-center gap-3 font-medium text-[rgb(255,173,173)]'>
                  <BsPlayCircle className='h-[32px] w-[32px]' />
                  Watch Shiren’s Microschool In-Action
                </h4>
              </div>
              <div className='mt-8'>
                <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1);] p-3 text-center text-[18px] font-bold text-white'>
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
