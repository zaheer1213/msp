'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function OurApproach () {
  return (
    <section className='bg-[#160d2b] text-white px-6 py-16 mt-10'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Heading */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='heading-title font-bold tracking-wide'>
            Our Approach –<br /> What Distinguishes Us
          </h2>
          <p className='mt-4 card-paragraph mx-auto leading-relaxed'>
            Our commitment to mutual growth. Our philosophy is to succeed by
            helping your business thrive. Unlike other MSPs and MSSPs, we strive
            to be strategic partners rather than regular managed service
            providers. We engage with you like your in-house IT outfit, bringing
            forth a set of expertise that would otherwise cost you a fortune.
          </p>
        </motion.div>

        {/* Price and Planning Card */}
        <motion.div
          className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className='card-heading mb-2'>Price and Planning</h3>
          <p className='card-paragraph mb-8'>
            We focus on long-term partnerships not one-size-fits-all solutions.
            Our services are tailored to your unique business needs and goals,
            with flexible service levels{' '}
            <strong>Essential, Standard, and Premium</strong> — to fit various
            requirements and budgets.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
            {/* Essential */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Essential
              </h4>
              <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                <li>
                  Designed to cover the core IT requirements, this option is for
                  businesses needing a cost-effective solution that meets
                  essential needs.
                </li>
                <li>
                  We focus on maximizing value and efficiency while maintaining
                  foundational support.
                </li>
              </ul>
            </motion.div>

            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Standard
              </h4>
              <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                <li>
                  This level provides a well-rounded approach, balancing quality
                  and cost.
                </li>
                <li>
                  It’s ideal for businesses looking for robust support that
                  enhances productivity without overextending their budget.
                </li>
              </ul>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Premium
              </h4>
              <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                <li>
                  For businesses looking to prioritize IT as a competitive
                  advantage, our premium solutions are comprehensive and highly
                  adaptable.
                </li>
                <li>
                  This level covers every aspect of IT with an emphasis on
                  quality, security, and scalability.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* True IT Partnership */}
        <motion.div
          className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className='card-heading mb-4'>A True IT Partnership</h3>
          <p className='card-paragraph leading-relaxed'>
            When you choose us as your partner with our “IT as a Service” model,
            we take on equal responsibility for maximizing your return on IT
            investment (ROI). Our team continuously assesses your technology
            needs, adjusting strategies and budgets to ensure your IT spending
            supports your growth and bottom line. Let’s work together to build
            an IT foundation that’s not just cost-effective but also a driver of
            innovation and success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
