'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosCode } from 'react-icons/io'
import { AiOutlineOpenAI } from 'react-icons/ai'
import { FaArrowTrendUp } from 'react-icons/fa6'
const Partnerships = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/components/Partnerships/itasaservice')
  }
  const handleManagedServicesClick = () => {
    router.push('/components/Partnerships/managedservices')
  }
  return (
    <>
      <section className='bg-[#10082C] py-16 px-4 text-white text-center'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='font-[600] text-[48px] leading-[120%] tracking-[-0.32px] text-center font-heading mb-12 '>
            What Partnerships Do we offer ?
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center ite'>
            {/* Card 1 */}
            <div className='p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
              <div className='w-[50px] h-[50px] flex items-center justify-center mb-4 bg-[#591ddd] rounded-xl'>
                <div className='p-1 border-2 border-white rounded-md'>
                  <FaArrowTrendUp size={24} className='text-white' />
                </div>
              </div>

              <h4 className='mb-2 custome-help-text'>IT as a Service</h4>
              <p className='custome-help-para-text'>
                Comprehensive IT support—from strategy to end-user care—boosting
                productivity, revenue, and profitability.
              </p>
              <button
                className='pt-5 border-b cursor-pointer'
                onClick={handleClick}
              >
                Read More
              </button>
            </div>

            {/* Card 2 */}
            <div className=' p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
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
            </div>

            {/* Card 3 */}
            <div className=' p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
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
              <button className='pt-5 border-b'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Partnerships
