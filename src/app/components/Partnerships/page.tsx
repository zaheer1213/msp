'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosCode } from 'react-icons/io'
import { AiOutlineOpenAI } from 'react-icons/ai'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Partnerships = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/components/Partnerships/itasaservice')
  }
  const handleManagedServicesClick = () => {
    router.push('/components/Partnerships/managedservices')
  }

  const handlSpecializedServiceClick = () => {
    router.push('/components/Partnerships/specializedservice')
  }

  return (
    <section className='bg-[#160d2b] py-16 px-4 text-white text-center'>
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          className='heading-title text-center font-heading mb-12 heading-space'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Partnerships Do We Offer?
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>
          {/* Card 1 */}
          <motion.div
            className='p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center flex-col bg-[#1e1038]'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className='w-[50px] h-[50px] flex items-center justify-center mb-4 bg-[#591ddd] rounded-xl'>
              <div className='p-1 border-2 border-white rounded-md'>
                <FaArrowTrendUp size={24} className='text-white' />
              </div>
            </div>

            <h4 className='mb-2 custome-help-text'>IT as a Service</h4>
            <p className='custome-help-para-text card-paragraph'>
              Comprehensive IT support—from strategy to end-user care—boosting
              productivity, revenue, and profitability.
            </p>
            <button
              className='pt-5 border-b cursor-pointer'
              onClick={handleClick}
            >
              Read More
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className='p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center flex-col bg-[#1e1038]'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className='w-[50px] h-[50px] flex items-center justify-center mb-4 bg-[#9426c9] rounded-xl'>
              <div className='p-1 border-2 border-white rounded-md'>
                <AiOutlineOpenAI size={24} className='text-white' />
              </div>
            </div>
            <h4 className='custome-help-text mb-2'>Managed Services</h4>
            <p className='custome-help-para-text'>
              Comprehensive IT Infrastructure Management covering servers,
              applications, storage, networks, cybersecurity.
            </p>
            <button
              className='pt-5 border-b cursor-pointer'
              onClick={handleManagedServicesClick}
            >
              Read More
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className='p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center flex-col bg-[#1e1038]'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className='w-[50px] h-[50px] flex items-center justify-center mb-4 bg-[#DE2BCE] rounded-xl'>
              <div className='p-1 border-2 border-white rounded-md'>
                <IoIosCode size={24} className='text-white' />
              </div>
            </div>
            <h4 className='custome-help-text mb-2'>Specialized Services</h4>
            <p className='custome-help-para-text'>
              Consulting | Assessments & Testing | Audits | Forensics | Custom
              Decision Systems.
            </p>
            <button
              className='pt-5 border-b cursor-pointer'
              onClick={handlSpecializedServiceClick}
            >
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partnerships
