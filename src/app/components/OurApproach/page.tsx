'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function OurApproach () {
  return (
    <section className='bg-[#160f22] text-white px-6 py-16 mt-10'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Heading */}
        <div className='text-center'>
          <button className='uppercase px-6 py-3 border border-white/20 text-white font-semibold rounded-lg bg-white/5 hover:bg-white/10 transition mb-2'>
            PRICING
          </button>
        </div>
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='heading-title font-bold tracking-wide'>
            Flexible Plans for Every Business Need
          </h2>
          <p className='mt-4 card-paragraph mx-auto leading-relaxed'>
            Our services are tailored to your unique business needs and goals,
            with flexible service <br /> levels—
            <b className='font-bold'>Essential</b>,{' '}
            <b className='font-bold'>Standard</b>, and{' '}
            <b className='font-bold'>Premium</b>—to fit various requirements and
            budgets
          </p>
        </motion.div>

        <section className='bg-[#160f22] py-16 px-6'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
            <div className='bg-[#181427] text-white rounded-xl p-8 flex flex-col transform transition-transform duration-300 hover:-translate-y-2'>
              <h3 className='text-sm font-semibold tracking-widest mb-2 uppercase'>
                Essential
              </h3>
              <p className='text-gray-400 mb-6'>
                Perfect for businesses just beginning to optimize Business
                management.
              </p>
              <div className='text-4xl font-bold mb-2'>
                $24<span className='text-base font-normal'>/month</span>
              </div>
              <button className='mt-4 mb-6 bg-[#4b4173] hover:bg-[#5e52a0] text-white py-2 rounded-md font-medium cursor-pointer'>
                Get Started
              </button>
              <ul className='space-y-3 mt-auto'>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Covers all core
                  IT requirements.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Cost-effective
                  and reliable solution.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Maximizing
                  value and efficiency.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Complete
                  support for long-term stability.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Ideal for
                  Growing Businesses.
                </li>
              </ul>
            </div>

            <div className='relative bg-gradient-to-b from-[#612fb166] to-[#0E051B] text-white rounded-xl p-8 flex flex-col shadow-2xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2'>
              {/* Extra top and bottom shadows */}
              <div className='absolute top-0 left-0 right-0 h-6 bg-black opacity-20 rounded-t-xl blur-md'></div>
              <div className='absolute bottom-0 left-0 right-0 h-6 bg-black opacity-20 rounded-b-xl blur-md'></div>

              {/* Main Content */}
              <h3 className='text-sm font-semibold tracking-widest mb-2 uppercase'>
                Standard
              </h3>
              <p className='text-gray-200 mb-6'>
                Ideal for teams needing more control and insights.
              </p>
              <div className='text-4xl font-bold mb-2'>
                $99<span className='text-base font-normal'>/month</span>
              </div>
              <button className='mt-4 mb-6 bg-[#B039FF] text-white py-2 rounded-md font-semibold cursor-pointer'>
                Get Started
              </button>
              <ul className='space-y-3 mt-auto'>
                <li className='flex items-center'>
                  <span className='text-white-200 mr-2'>✓</span> Offers a
                  well-rounded Approach.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-200 mr-2'>✓</span> Balancing
                  quality and cost effectively.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-200 mr-2'>✓</span> Robust support
                  for Operations.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-200 mr-2'>✓</span> Enhances
                  overall productivity.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-200 mr-2'>✓</span> Ideal for
                  businesses seeking value.
                </li>
              </ul>
            </div>

            <div className='bg-[#181427] text-white rounded-xl p-8 flex flex-col transform transition-transform duration-300 hover:-translate-y-2'>
              <h3 className='text-sm font-semibold tracking-widest mb-2 uppercase'>
                Premium
              </h3>
              <p className='text-gray-400 mb-6'>
                Best for large organizations with complex needs.
              </p>
              <div className='text-4xl font-bold mb-2'>
                $599<span className='text-base font-normal'>/month</span>
              </div>
              <button className='mt-4 mb-6 bg-[#4b4173] hover:bg-[#5e52a0] text-white py-2 rounded-md font-medium cursor-pointer'>
                Get Started
              </button>
              <ul className='space-y-3 mt-auto'>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Stay ahead of
                  the competition.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Comprehensive
                  Premium Solutions.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Highly
                  Adaptable Framework.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Emphasis on
                  Quality.
                </li>
                <li className='flex items-center'>
                  <span className='text-white-400 mr-2'>✓</span> Focus on
                  Security & Scalability.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
