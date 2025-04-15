'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <section
      className='relative w-full min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 '
      style={{
        backgroundImage: `url("/images/Hero_Stack.jpg")`
      }}
    >
      <div className='absolute inset-0  opacity-50 z-0' />

      <motion.div
        className='relative z-10 max-w-3xl'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className='heading-title'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Beyond IT Management -<br />
          Empowering Your Business,
          <br />
          Elevating Your Growth
        </motion.h1>

        <motion.p
          className='card-paragraph md:ml-10 text-padding-space'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We go beyond traditional IT services—partnering with you to unlock
          innovation, enhance operational efficiency, and drive scalable growth
          tailored to your business goals.
        </motion.p>

        <motion.button
          className='mt-6 text-[#ECECEC] px-6 py-2 rounded-full font-medium transition hover:opacity-90 bg-gradient-to-r from-[#292280] to-[#ECECEC] cursor-pointer'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={handleScroll}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
