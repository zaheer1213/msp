'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import './help.css'

export default function HelpSection () {
  return (
    <section className='bg-[#160d2b] py-16 px-4 text-white text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='heading-title text-center font-heading'>
          How Can We Help ?
        </h2>
        <p className='card-paragraph mx-auto text-lg mb-12'>
          We provide IT as a Service—starting with strategic planning—to build a
          tightly integrated IT environment that drives your business forward.
          Our analysts assess your goals and processes to deliver tailored,
          end-to-end solutions aligned with your strategy.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>
          {/* Card 1 - From Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='p-6 rounded-2xl shadow-2xl shadow-purple-900/40 hover:scale-105 transition-transform flex items-center justify-center flex-col'
          >
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4'>
              <Image
                src='/images/Innovation.png'
                alt='Innovation'
                width={50}
                height={50}
                className='mx-auto'
              />
            </div>
            <h4 className='mb-2 custome-help-text'>Operational Excellence</h4>
            <p className='custome-help-para-text card-paragraph'>
              Streamline operations and boost productivity with IT-driven
              automation—cut costs, optimize resources, and enhance service
              quality.
            </p>
          </motion.div>

          {/* Card 2 - From Bottom */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='p-6 rounded-2xl shadow-2xl shadow-purple-900/40 hover:scale-105 transition-transform flex items-center justify-center flex-col'
          >
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4 text-xl'>
              <Image
                src='/images/Designing_Idea.png'
                alt='Design'
                width={50}
                height={50}
              />
            </div>
            <h4 className='custome-help-text mb-2'>Smarter Decision-Making</h4>
            <p className='custome-help-para-text card-paragraph'>
              Make smarter, faster decisions with real-time insights from
              integrated systems. Clear data powers confident, forward-thinking
              moves.
            </p>
          </motion.div>

          {/* Card 3 - From Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='p-6 rounded-2xl shadow-2xl shadow-purple-900/40 hover:scale-105 transition-transform flex items-center justify-center flex-col'
          >
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4 text-xl'>
              <Image
                src='/images/Vector.png'
                alt='Strategy'
                width={50}
                height={50}
              />
            </div>
            <h4 className='custome-help-text mb-2'>
              Other Strategic Objectives
            </h4>
            <p className='custome-help-para-text card-paragraph'>
              Drive innovation, strengthen relationships, gain an edge, and
              ensure survival with robust, future-ready information systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
