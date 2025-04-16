'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import './business.css'

const Business = () => {
  return (
    <section className='bg-[#160d2b] bg-opacity-95 text-white px-6 py-16 md:px-24'>
      <div className='max-w-6xl mx-auto space-y-12'>
        <h2 className='heading-title'>
          Is Your Business Getting <br /> the Most from IT?
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Card 1 - Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow hover:scale-[1.02] transition-transform duration-300'
          >
            <h3 className='card-heading md:ml-10 padding-top'>
              Are you really harnessing <br /> the power of IT?
            </h3>
            <p className='card-paragraph md:ml-10 text-padding-space'>
              Our Analytics Dashboard offers clear insights through a simple
              interface with customizable charts and live updates that turn data
              into actionable business decisions.
            </p>
          </motion.div>

          {/* Card 2 - Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow hover:scale-[1.02] transition-transform duration-300'
          >
            <h3 className='card-heading mb-2 md:ml-10 padding-top'>
              The Challenge?
            </h3>
            <p className='card-paragraph md:ml-10 text-padding-space'>
              Most companies struggle or pay little to no attention to
              translating their business goals into effective IT operations.
            </p>
          </motion.div>

          {/* Card 3 - Bottom */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow hover:scale-[1.01] transition-transform duration-300'
          >
            <div className='flex-1 md:ml-10'>
              <h3 className='card-heading mb-2'>That’s where we come in!</h3>
              <p className='card-paragraph'>
                We bridge the gap, aligning your business requirements with IT
                strategies that drive growth, efficiency, and resilience. IT
                shouldn’t just support your business; it should elevate it
              </p>
            </div>
            <div className='flex-shrink-0 w-full md:w-1/3 custome-shadow mt-6 md:mt-0'>
              <Image
                src='/images/ai-chip.jpg'
                alt='AI Chip'
                className='rounded-xl w-full h-auto max-w-[300px] mx-auto md:max-w-full'
                width={467}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Business
