import React from 'react';

const WhoIs = () => {
  return (
    <div className='aboutHeroContainer flex flex-col items-center justify-center py-16'>
      <div className='WhoIsHeaderContainer flex flex-col items-center justify-center'>
        <h1
          id='whyworkheader'
          className='mb-4 text-4xl font-bold text-gray-800 md:mb-6 font-blackmango'
        >
          Who is{' '}
          <span className='text-[rgb(255,173,173)]'>Shiren Rattigan</span>?
        </h1>
        <p className='mb-12 max-w-[70ch] text-center text-[20px] text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className='aboutGridContainer'>
        <div className='aboutFlexBox flex max-w-[1620px] flex-row-reverse flex-nowrap items-center gap-16 p-8'>
          <div className='aboutFlexBoxContainer flex w-[100%] items-center justify-center'>
            <div className='aboutImageContent h-[500px] w-[700px]'>
              <img
                className='h-[500px] w-[700px] rounded-[64px] rounded-tr-[64px] object-cover object-right'
                src='/images/Colossal-Academy-1.jpg'
                alt=''
              />
            </div>
          </div>

          <div className='aboutFlexBoxContainer w-[100%] items-center justify-center'>
            <p className='text-right lg:text-2xl text-lg'>
              As an educator of unparalleled expertise, Shiren has been invited
              to share her insights at some of the world's most esteemed
              educational platforms.
              <br />
              <br />
              From her captivating panel discussion at Harvard University on
              microschooling to her inspiring appearances at SXSW Edu and UC
              Berkeley extenisons, Shiren has left an indelible mark on the
              minds of educators and learners alike. Her groundbreaking work has
              also attracted the attention of media outlets, earning her a
              well-deserved spotlight.
              <br />
              <br />
              Her expertise in fostering a love for learning and cultivating
              critical thinking skills sets her apart as a microschool owner par
              excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;
