'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    text: 'AI has revolutionized the way we manage our Business. The real-time insights and Automation have saved us countless hours.',
    name: 'Elite Just',
    role: 'CEO and CTO',
    company: 'Kapstan',
    logo: '/images/clinetlogo.png', // update with your logo
    image: '/images/EliteJust.png' // update with your client's image
  },
  {
    id: 2,
    text: 'AI has revolutionized the way we manage our Business. The real-time insights and Automation have saved us countless hours.',
    name: 'Elite Just',
    role: 'CEO and CTO',
    company: 'Kapstan',
    logo: '/images/clinetlogo.png', // update with your logo
    image: '/images/clinet2.jpg' // update with your client's image
  }
]

export default function Testimonials () {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className='bg-[#0E051B] py-16 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center'>
      <button className='uppercase px-6 py-3 border border-white/20 text-white font-semibold rounded-lg bg-white/5 hover:bg-white/10 transition mb-5'>
        Testimonials
      </button>
      {/* Title */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Testimonials from Clients</h2>
        <p className='text-gray-400'>
          Everything you need to know about our Services.
        </p>
      </div>

      {/* Card */}
      <div className='bg-[#140d23] p-8 rounded-2xl flex flex-col md:flex-row items-center max-w-6xl w-full shadow-lg'>
        {/* Left Side - Text */}
        <div className='flex-1 mb-8 md:mb-0 md:pr-8'>
          {/* Stars */}
          <div className='flex mb-4'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-purple-500 text-lg'>
                ★
              </span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className='text-lg mb-6'>{testimonials[current].text}</p>

          {/* Name and Role */}
          <div className='mb-4'>
            <h3 className='font-semibold'>{testimonials[current].name}</h3>
            <p className='text-gray-400 text-sm'>
              {testimonials[current].role}
            </p>
          </div>

          {/* Company Logo */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Image
                src={testimonials[current].logo}
                alt='Company Logo'
                width={30}
                height={30}
              />
              <p className='font-semibold'>{testimonials[current].company}</p>
            </div>

            {/* Arrows */}
            <div className='flex space-x-4 mt-6'>
              <button
                onClick={prevTestimonial}
                className='p-2 rounded-full bg-[#2b2140] hover:bg-purple-600 transition'
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className='p-2 rounded-full bg-[#2b2140] hover:bg-purple-600 transition'
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='flex-1 flex justify-center items-center'>
          <div className='relative w-[400px] h-[400px]'>
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              fill
              className='rounded-2xl object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
