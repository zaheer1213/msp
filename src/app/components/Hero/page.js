'use client'

import React from 'react'

const Hero = () => {
  return (
    <section
      className='relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4'
      style={{
        backgroundImage: `url("/images/Hero_Stack.jpg")`
      }}
    >
      {/* Overlay layer */}
      <div className='absolute inset-0 opacity-50 z-0' />

      {/* Content */}
      <div className='relative z-10 max-w-3xl'>
        <h1 className='herotext text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
          Beyond IT Management -<br />
          Empowering Your Business,
          <br />
          Elevating Your Growth
        </h1>
        <p className='mt-4 text-sm sm:text-base text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros elementum tristique.
        </p>
        <button className='mt-6 text-[#ECECEC] px-6 py-2 rounded-full font-medium transition hover:opacity-90 bg-gradient-to-r from-[#292280] to-[#ECECEC] text-white'>
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero
