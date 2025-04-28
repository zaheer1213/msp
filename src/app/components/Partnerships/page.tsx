'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

  const handeleContactClick = () => {
    router.push('/components/ContactUs')
  }
  return (
    <section className='bg-[#160d2b] py-16 px-4 text-white'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <button className='uppercase px-6 py-3 border border-white/20 text-white font-semibold rounded-lg bg-white/5 hover:bg-white/10 transition mb-2'>
            Services
          </button>
        </div>
        <motion.h2
          className='heading-title text-center font-heading heading-space'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Services Do We Offer?
        </motion.h2>
        <p className='card-paragraph text-center text-lg mb-16'>
          Empower your business with AI-driven insights, real-time tracking, and
          comprehensive historical data.
        </p>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          {/* Card 1 */}
          <motion.div
            className='flex flex-col items-start bg-[#1e1038] rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className='mb-6'>
              <div className='flex items-center justify-center  rounded-xl'>
                <Image
                  src='/images/ITasaService.png'
                  alt=''
                  height={318}
                  width={540}
                />
              </div>
            </div>
            <div className='flex flex-col h-full justify-between'>
              <div>
                <h4 className='text-xl font-semibold mb-3'>IT as a Service</h4>
                <p className='text-sm mb-4'>
                  Comprehensive IT support—from strategy to end-user
                  care—boosting productivity, revenue, and profitability.{' '}
                  <span
                    className='font-semibold underline underline-offset-4 cursor-pointer'
                    onClick={handleClick}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className='flex flex-col items-start bg-[#1e1038] rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className='mb-6'>
              <div className='flex items-center justify-center  rounded-xl'>
                <Image
                  src='/images/ManagedServices.png'
                  alt=''
                  height={318}
                  width={540}
                />
              </div>
            </div>
            <div className='flex flex-col h-full justify-between'>
              <div>
                <h4 className='text-xl font-semibold mb-3'>Managed Services</h4>
                <p className='text-sm mb-4'>
                  Comprehensive IT Infrastructure Management covering servers,
                  applications, storage.{' '}
                  <span
                    className='font-semibold underline underline-offset-4 cursor-pointer'
                    onClick={handleManagedServicesClick}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className='flex flex-col items-start bg-[#1e1038] rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className='mb-6'>
              <div className='flex items-center justify-center  rounded-xl'>
                <Image
                  src='/images/Specialized Services.png'
                  alt=''
                  height={318}
                  width={540}
                />
              </div>
            </div>
            <div className='flex flex-col h-full justify-between'>
              <div>
                <h4 className='text-xl font-semibold mb-3'>
                  Specialized Services
                </h4>
                <p className='text-sm mb-4'>
                  Consulting | Assessments & Testing | Audits | Forensics |
                  Custom Decision Systems.{' '}
                  <span
                    className='font-semibold underline underline-offset-4 cursor-pointer'
                    onClick={handlSpecializedServiceClick}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partnerships
