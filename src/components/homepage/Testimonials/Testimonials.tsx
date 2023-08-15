import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import person1 from '/public/images/person1.png';
import person2 from '/public/images/person2.png';
import person3 from '/public/images/person3.png';

const testimonials = [
  {
    img: person1, // Update with your image paths
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: 'Jessie J',
    role: 'Acme LTD'
  },
  {
    img: person2, // Update with your image paths
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: 'Nick V',
    role: 'Malika Inc.'
  },
  {
    img: person3, // Update with your image paths
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: 'Amelia W',
    role: 'Panda AI'
  }
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
    <div className='w-full h-full my-32 flex flex-col justify-center items-center'>
      <div className='text-center max-w-[900px] flex flex-col gap-6 mb-16'>
        <h2 className='font-junge lg:text-[3.25rem] text-[2.75rem] leading-[1.1em] text-primary-500'>Hear what my clients have to say about coaching.</h2>
        <p className='leading-[1.25em] px-4 lg:text-[1.75rem] text-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Container for testimonial images */}
        <div className="relative h-32">
          {/* Background circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-500/25 before:via-primary-500/5 before:via-25% before:to-primary-500/0 before:to-75% before:rounded-full before:-z-10">
            {/* Container for testimonial image masks */}
            <div className="h-32 flex [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
              {/* Map through testimonials and display images */}
              {testimonials.map((testimonial, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  className="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                >
                  {/* Display testimonial image */}
                  <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width={100} height={100} alt={testimonial.name} />
                </Transition>
              ))}
            </div>
          </div>
        </div>
        {/* Text section */}
        <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
          <div className="relative flex flex-col" ref={testimonialsRef}>
            {/* Map through testimonials and display quotes */}
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 -translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-out duration-300 delay-300 absolute"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-4"
                beforeEnter={() => heightFix()} // Call a function before entering transition
              >
                {/* Display testimonial quote */}
                <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D'] font-junge">
                  {testimonial.quote}
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons for selecting testimonials */}
        <div className="flex flex-wrap justify-center -m-1.5">
          {/* Map through testimonials and display selection buttons */}
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`inline-flex justify-center whitespace-nowrap rounded-xl px-5 py-3 m-2 font-junge font-semibold shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:focus-visible:ring-gray-700 transition-colors duration-150 ${active === index ? 'bg-primary-500 text-white shadow-primary-950/10' : 'bg-white hover:bg-primary-100 text-slate-900'}`}
              onClick={() => { setActive(index); setAutorotate(false); }} // Set active testimonial and disable autorotation
            >
              {/* Display testimonial name and role */}
              <span>{testimonial.name}</span> <span className={`${active === index ? 'text-primary-200' : 'text-slate-300'}`}>-</span> <span>{testimonial.role}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

  export default Testimonials;