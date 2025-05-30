'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Management = () => {
  return (
    <section className='bg-[#160d2b] bg-opacity-95 text-white px-6 py-16 md:px-24 mt-10'>
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
              <h3 className='card-heading mb-2'>What Truly Sets Us Apart</h3>
              <p className='card-paragraph'>
                Our commitment to mutual growth transforms us from service
                providers into strategic partners. We function like your
                in-house IT team, delivering specialized expertise that would
                cost significantly more with full-time staff—helping your
                business thrive while saving you money.
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
              <h3 className='card-heading mb-2'>What We Promise</h3>
              <p className='card-paragraph font-montserrat'>
                Our full board package starts with a thorough assessment of your
                business needs to create a targeted IT strategy that drives
                growth. We handle both planning and implementation, delivering
                expert management that maximizes your technology investment.
              </p>
              {/* <ol className='md:pt-4 space-y-4'>
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
              </ol> */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10'>
                {/* Essential */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                    Cost Savings
                  </h4>
                  <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                    <li>Unmatched cost-to-quality/performance ratio.</li>
                    <li>
                      You get a full IT team without the cost of hiring
                      in-house.
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
                    Proactive Support
                  </h4>
                  <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                    <li>Preventing issues before they cause downtime.</li>
                    <li>
                      We don’t just fix things when they break — we prevent
                      issues before they happen.
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
                    Access to Expertise
                  </h4>
                  <ul className='list-disc list-outside text-sm card-paragraph space-y-2 mt-2 pl-5'>
                    <li>
                      Skilled professionals at a fraction of the cost of hiring.
                    </li>
                    <li>
                      Get expert IT guidance at every step — from planning to
                      execution.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Management
