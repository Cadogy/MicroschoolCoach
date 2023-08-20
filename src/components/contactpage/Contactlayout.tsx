import React from 'react';

const Contactlayout = () => {
  return (
    <div className='bg-primary-500/30 relative flex h-full flex-col items-center gap-16 py-32 text-gray-700'>
      <div className='absolute inset-0 origin-bottom-left transform bg-gradient-to-b from-white to-[rgba(255,173,173,0.2)]'></div>
      <div className='z-[100] flex w-full flex-col items-center justify-center gap-6'>
        <h1 className='text-center text-[3.5em] font-normal font-blackmango'>
          Got <span className='text-primary-500'>Questions</span>? I’ve got{' '}
          <span className='text-primary-500'>Answers</span>.
        </h1>
        <p className='m-auto max-w-[968px] text-center text-[1.5em] leading-10'>
        I'm here to provide you with the answers and clarity you seek. Education is a journey, and I'm here to guide you every step of the way. Whether it's about microschooling, innovative teaching methods, or educational strategies, I'm here to help. Reach out to me for insights that will empower your educational experience.{' '}
        </p>
      </div>
      <div className='z-[100] mx-auto rounded-[1.5rem] bg-white p-10 md:w-2/3 lg:w-[68%]'>
        <form action=''>
          <div className='mb-5 flex items-center'>
            <label
              htmlFor='name'
              className='mr-4 inline-block w-20 text-left text-gray-700 font-blackmango font-semibold tracking-widest'
            >
              Name
            </label>
            <input
              name='name'
              id='name'
              type='text'
              placeholder='Your name'
              className='hover:border-b-primary-500/60 focus:border-b-primary-500 flex-1 border-b-2 border-white border-b-gray-400 py-2 placeholder-gray-300 outline-none focus:border-white focus:ring-0'
            ></input>
          </div>

          <div className='mb-5 flex items-center'>
            <label
              htmlFor='email'
              className='mr-4 inline-block w-20 text-left text-gray-700 font-blackmango font-semibold tracking-widest'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              className='hover:border-b-primary-500/60 focus:border-b-primary-500 flex-1 border-b-2 border-white border-b-gray-400 py-2 placeholder-gray-300 outline-none focus:border-white focus:ring-0'
            ></input>
          </div>

          <div className='mb-5 flex items-center'>
            <label
              htmlFor='phone'
              className='mr-4 inline-block w-20 text-left text-gray-700 font-blackmango font-semibold tracking-widest'
            >
              Phone
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Your phone number'
              className='hover:border-b-primary-500/60 focus:border-b-primary-500 flex-1 border-b-2 border-white border-b-gray-400 py-2 placeholder-gray-300 outline-none focus:border-white focus:ring-0'
            ></input>
          </div>

          <div className='mb-10 flex items-center'>
            <label
              htmlFor='message'
              className='mr-4 inline-block w-20 text-left text-gray-700 font-blackmango font-semibold tracking-widest'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Send a message so I know how I can best help!'
              rows={4}
              className='hover:border-b-primary-500/60 focus:border-b-primary-500 flex-1 border-b-2 border-white border-b-gray-400 py-2 placeholder-gray-300 focus:border-white focus:ring-0'
            />
          </div>

          <div className='text-right'>
            <button className='border-primary-500 bg-primary-500 rounded-xl border-2 px-8 py-3 text-xl font-black text-white transition-all hover:-translate-y-1 hover:shadow-md'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactlayout;
