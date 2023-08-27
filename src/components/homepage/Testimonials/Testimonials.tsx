import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import person1 from '/public/images/person1.png';
import person2 from '/public/images/person2.png';
import person3 from '/public/images/person3.png';

const testimonials = [
  {
    img: person1, // Update with your image paths
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Jessie J',
    role: 'Acme LTD',
  },
  {
    img: person2, // Update with your image paths
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Nick V',
    role: 'Malika Inc.',
  },
  {
    img: person3, // Update with your image paths
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Amelia W',
    role: 'Panda AI',
  },
];

const Testimonials = () => {
  // useRef to store a reference to the testimonials container element
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0); // Active testimonial index
  const [autorotate, setAutorotate] = useState<boolean>(true); // Autoplay state
  const autorotateTiming: number = 7000; // Autoplay interval in milliseconds

  // Autoplay logic using useEffect
  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [active, autorotate]);

  // Function to fix the height of the testimonials container
  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  // Fix the height on initial render
  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className='my-16 md:my-32 flex h-full w-full flex-col items-center justify-center'>
      <div className='mb-16 flex max-w-[1200px] flex-col gap-6 text-center'>
        <h2 className='font-blackmango text-primary-500 text-[3rem] md:text-[3.5em] font-normal leading-[1.1em] px-8'>
          Coaching <span className='text-[rgb(0,0,0)]'>Success</span> Stories
        </h2>
        <p className='m-auto max-w-[70ch] px-4 text-[1.25rem] md:text-[1.5rem] leading-[1.25em]'>
          Coaching with Shiren has made a difference in the lives ofa myriad of educators. Here's what some of our clients have to say:
        </p>
      </div>
      <div className='mx-auto w-full max-w-3xl text-center'>
        {/* Container for testimonial images */}
        <div className='relative h-32'>
          {/* Background circle */}
          <div className='before:from-primary-500/25 before:via-primary-500/5 before:to-primary-500/0 pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:via-25% before:to-75%'>
            {/* Container for testimonial image masks */}
            <div className='flex h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]'>
              {/* Map through testimonials and display images */}
              {testimonials.map((testimonial, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  className='absolute inset-0 -z-10 h-full'
                  enter='transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first'
                  enterFrom='opacity-0 -rotate-[60deg]'
                  enterTo='opacity-100 rotate-0'
                  leave='transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700'
                  leaveFrom='opacity-100 rotate-0'
                  leaveTo='opacity-0 rotate-[60deg]'
                >
                  {/* Display testimonial image */}
                  <Image
                    className='relative left-1/2 top-11 -translate-x-1/2 rounded-full'
                    src={testimonial.img}
                    width={100}
                    height={100}
                    alt={testimonial.name}
                  />
                </Transition>
              ))}
            </div>
          </div>
        </div>
        {/* Text section */}
        <div className='mb-9 transition-all delay-300 duration-150 ease-in-out'>
          <div className='relative flex flex-col' ref={testimonialsRef}>
            {/* Map through testimonials and display quotes */}
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                enter='transition ease-in-out duration-500 delay-200 order-first'
                enterFrom='opacity-0 -translate-x-4'
                enterTo='opacity-100 translate-x-0'
                leave='transition ease-out duration-300 delay-300 absolute'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 translate-x-4'
                beforeEnter={() => heightFix()} // Call a function before entering transition
              >
                {/* Display testimonial quote */}
                <div className="text-2xl font-normal text-gray-500 before:content-['\201C'] after:content-['\201D'] px-10">
                  {testimonial.quote}
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons for selecting testimonials */}
        <div className='-m-1.5 flex flex-wrap justify-center'>
          {/* Map through testimonials and display selection buttons */}
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`focus-visible:ring-primary-300 m-2 inline-flex justify-center whitespace-nowrap rounded-xl px-5 py-3 font-semibold shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring dark:focus-visible:ring-gray-700 ${
                active === index
                  ? 'bg-primary-500 shadow-primary-950/10 text-white'
                  : 'hover:bg-primary-100 bg-white text-gray-500'
              }`}
              onClick={() => {
                setActive(index);
                setAutorotate(false);
              }} // Set active testimonial and disable autorotation
            >
              {/* Display testimonial name and role */}
              <span className='font-blackmango'>{testimonial.name} - {testimonial.role}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
