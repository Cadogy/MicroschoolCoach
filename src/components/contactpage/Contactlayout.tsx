import React from 'react'

const Contactlayout = () => {
  return (
  <div className="bg-primary-500/30 h-full py-32 flex flex-col items-center my-4 gap-16 text-gray-700">
    <div className='w-full flex flex-col justify-center items-center gap-6'>
        <h1 className='text-[3em] font-junge'>Got <span className='text-primary-500'>Questions</span>? I’ve got <span className='text-primary-500'>Answers</span>.</h1>
        <p className='w-2/3 text-[1.5em] leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
    </div>
    <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded-[1.5rem]">
      <form action="">

        <div className="flex items-center mb-5">
          <label for="name" className="w-20 inline-block text-left mr-4 text-gray-500">Name</label>
          <input name="name" id="name" type="text" placeholder="Your name" className="border-b-2 border-white border-b-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-white hover:border-b-primary-500/60 focus:border-b-primary-500 focus:ring-0"></input>
        </div>

        <div className="flex items-center mb-5">
          <label for="email" className="w-20 inline-block text-left mr-4 text-gray-500">Email</label>
          <input type="email" name="email" id="email" placeholder="Your email address" className="border-b-2 border-white border-b-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-white hover:border-b-primary-500/60 focus:border-b-primary-500 focus:ring-0"></input>
        </div>

        <div className="flex items-center mb-5">
          <label for="phone" className="w-20 inline-block text-left mr-4 text-gray-500">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="Your phone number" className="border-b-2 border-white border-b-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-white hover:border-b-primary-500/60 focus:border-b-primary-500 focus:ring-0"></input>
        </div>

        <div className="flex items-center mb-10">
            <label htmlFor="message" className="w-20 inline-block text-left mr-4 text-gray-500">Message</label>
            <textarea name="message" id="message" placeholder="Send a message so I know how I can best help!" rows="4" className="border-b-2 border-white border-b-gray-400 flex-1 py-2 placeholder-gray-300 hover:border-b-primary-500/60 focus:border-white focus:border-b-primary-500 focus:ring-0" />
          </div>
          
        <div className="text-right">
          <button className="py-3 px-8 bg-primary-500 text-green-100 font-bold rounded">Submit</button>
        </div>
          
      </form>
    </div>
  </div>
  )
}

export default Contactlayout