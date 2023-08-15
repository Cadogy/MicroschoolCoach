import React, { useState, useEffect } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

const Hero = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute inset-0 origin-bottom-left transform bg-gradient-to-b from-white to-[rgba(255,173,173,0.2)]'></div>
      <div className='relative z-10 flex h-[90vh] w-full flex-col-reverse items-center justify-center px-4 md:flex-row md:gap-16 md:px-12 2xl:gap-24 2xl:px-0'>
        <div className='aboutGridContainer'>
          <div className='aboutFlexBox flex max-w-[90rem] flex-nowrap items-center p-6'>
            <div className='aboutFlexBoxContainer flex w-[100%] items-center justify-center'>
              <div className='aboutImageContent flex h-[500px] w-[500px] flex-col items-end rounded-2xl rounded-bl-[74px] rounded-tl-[74px] bg-[rgb(255,173,173)]/20 p-3'>
                <img
                  className='rounded-bl-[64px] rounded-br-[64px] rounded-tl-[64px] rounded-tr-[8px]'
                  src='/images/shiren-headshot.jpeg'
                  alt=''
                />
                <img
                  className='-mt-12 w-[182px]'
                  src='/images/people.png'
                  alt=''
                />
              </div>
            </div>

            <div className='aboutFlexBoxContainer w-[100%] items-center justify-center'>
              <h1 className='font-junge mb-12 flex text-[3em] font-medium leading-[1em] xl:text-[3.5em]'>
                The
                <span className='mx-2 flex text-[rgb(255,173,173)]'>
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
                <div className='w-[240px] rounded-lg bg-[rgba(255,173,173,1);] p-3 py-4 text-center text-[18px] font-bold text-white'>
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
