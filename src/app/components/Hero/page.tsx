'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  const handleScroll = () => {
    router.push('/components/ContactUs')
  }
  return (
    <section
      className='relative w-full min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 '
      style={{
        backgroundImage: `url("/images/Ellipse 8.png")`
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
          Empowering Your Business, Elevating Your Growth
        </motion.h1>

        <motion.p
          className='card-paragraph md:ml-10 text-padding-space'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We partner with you to boost innovation, streamline operations, and
          fuel sustainable growth aligned with your business objectives—all
          while delivering IT solutions that go far beyond the basics.
        </motion.p>

        <motion.button
          className='inline-block  text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition mt-3 cursor-pointer'
          style={{
            background: 'linear-gradient(to right, #B039FF, #9C39FF)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={handleScroll}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
