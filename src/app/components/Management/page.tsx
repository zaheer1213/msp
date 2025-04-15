'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Management = () => {
  return (
    <section className='bg-[#160d2b] bg-opacity-95 text-white px-6 py-16 md:px-24'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Section Heading */}
        <motion.h2
          className='heading-title text-center font-heading mb-12 heading-space'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Beyond IT Management – Empowering Your Business, Elevating Your Growth
        </motion.h2>

        {/* What truly sets us apart */}
        <motion.div
          className='grid md:grid-cols-2 gap-8'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
            <div className='flex-1 md:m-10'>
              <h3 className='card-heading mb-2'>What truly sets us apart</h3>
              <p className='card-paragraph'>
                What truly sets us apart is our commitment to mutual growth. Our
                philosophy is to succeed by helping your business thrive. Unlike
                other MSPs and MSSPs, we strive to be strategic partners rather
                than regular managed service providers. We engage with you like
                your in-house IT outfit, bringing forth a set of expertise that
                would otherwise cost you a fortune with full-time salaried
                staff.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What we promise */}
        <motion.div
          className='grid md:grid-cols-2 gap-8'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
            <div className='flex-1 md:m-10'>
              <h3 className='card-heading mb-2'>What we promise</h3>
              <p className='card-paragraph font-montserrat'>
                With our full board package, we start by analyzing your business
                requirements and formulating a strategic IT plan aimed at
                driving your business growth. We will help you implement and
                manage it. Nonetheless, all our offerings will ensure:
              </p>
              <ol className='md:pt-4 space-y-4'>
                <li className='font-[400]'>
                  <b>Cost Savings:</b> Unmatched cost-to-quality/performance
                  ratio.
                </li>
                <li className='font-[400]'>
                  <b>Proactive Support:</b> Preventing issues before they cause
                  downtime.
                </li>
                <li className='font-[400]'>
                  <b>Access to Expertise:</b> Skilled professionals at a
                  fraction of the cost of hiring.
                </li>
                <li className='font-[400]'>
                  <b>Scalability:</b> Easily scale services up or down to meet
                  changing business needs.
                </li>
                <li className='font-[400]'>
                  <b>Enhanced Security:</b> Defend against evolving cyber
                  threats.
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Management
