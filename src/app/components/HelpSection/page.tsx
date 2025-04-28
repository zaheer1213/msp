'use client'

import Image from 'next/image'
// import { motion } from 'framer-motion'
import './help.css'
import { useRouter } from 'next/navigation'

export default function HelpSection () {
  const router = useRouter()
  const handeleContactClick = () => {
    router.push('/components/ContactUs')
  }
  return (
    <section className='bg-[#160d2b] py-16 px-4 text-white text-center'>
      <div className='max-w-6xl mx-auto'>
        <button className='px-6 py-3 border border-white/20 text-white font-semibold rounded-lg bg-white/5 hover:bg-white/10 transition mb-2'>
          FEATURES
        </button>

        <h2 className='heading-title text-center font-heading'>
          How Can We Help ?
        </h2>
        <p className='card-paragraph  text-lg mb-12'>
          We provide IT as a Service to assess your goals and processes to
          deliver tailored, end-to-end solutions aligned with your strategy.
        </p>
        <div className='max-w-6xl  flex flex-col md:flex-row items-start gap-8 bg-[#1A152A] p-8 rounded-2xl shadow-2xl shadow-purple-900/40 mt-5'>
          {/* Left Side - Icon */}
          <div className='flex-shrink-0 bg-[#1A152A] p-6 rounded-xl  relative'>
            <div className='absolute inset-0 grid grid-cols-6 grid-rows-6'>
              {/* Grid background */}
              <div className='col-span-full row-span-full bg-gradient-to-br from-transparent to-transparent ' />
            </div>
            <div className='relative z-10 flex items-center justify-center '>
              <Image
                src='/images/AstraBento.png'
                alt='Innovation'
                width={500}
                height={328}
                className='mx-auto rounded-2xl'
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className='flex flex-col justify-center text-left mt-5'>
            <h4 className='card-heading text-white mb-4'>
              Operations Excellence
            </h4>

            <p className='text-gray-400 mb-6 max-w-lg'>
              Streamline operations and boost productivity with IT-driven
              automation—cut costs, optimize resources, and enhance service
              quality
            </p>

            <ul className='space-y-6'>
              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Smarter Resource Use:
                  </span>{' '}
                  Automate tasks and reduce waste.
                </p>
              </li>

              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Better Service Delivery:
                  </span>{' '}
                  Faster, more consistent customer experiences.
                </p>
              </li>
            </ul>
            <div className='py-5'>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className='max-w-6xl  flex flex-col md:flex-row items-start gap-8 bg-[#1A152A] p-8 rounded-2xl shadow-2xl shadow-purple-900/40 mt-5'>
          {/* Right Side - Text */}
          <div className='flex flex-col justify-center text-left mt-5'>
            <h4 className='card-heading text-white mb-4'>
              Smart Decision Making
            </h4>

            <p className='text-gray-400 mb-6 max-w-lg'>
              Make smarter, faster decisions with real-time insights from
              integrated systems. Clear data powers confident, forward-thinking
              moves.
            </p>

            <ul className='space-y-6'>
              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Seamless Integration:
                  </span>{' '}
                  Unify your tools and teams with connected systems that
                  eliminate silos.
                </p>
              </li>

              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Actionable Insights:
                  </span>{' '}
                  Access real-time data to drive agility, innovation, and
                  growth.
                </p>
              </li>
            </ul>
            <div className='py-5'>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Left Side - Icon */}
          <div className='flex-shrink-0 bg-[#1A152A] p-6 rounded-xl  relative'>
            <div className='absolute inset-0 grid grid-cols-6 grid-rows-6'>
              {/* Grid background */}
              <div className='col-span-full row-span-full bg-gradient-to-br from-transparent to-transparent ' />
            </div>
            <div className='relative z-10 flex items-center justify-center '>
              <Image
                src='/images/SmartDecisionMaking.png'
                alt='Innovation'
                width={500}
                height={328}
                className='mx-auto'
              />
            </div>
          </div>
        </div>
        <div className='max-w-6xl  flex flex-col md:flex-row items-start gap-8 bg-[#1A152A] p-8 rounded-2xl shadow-2xl shadow-purple-900/40 mt-5'>
          {/* Left Side - Icon */}
          <div className='flex-shrink-0 bg-[#1A152A] p-6 rounded-xl  relative'>
            <div className='absolute inset-0 grid grid-cols-6 grid-rows-6'>
              {/* Grid background */}
              <div className='col-span-full row-span-full bg-gradient-to-br from-transparent to-transparent ' />
            </div>
            <div className='relative z-10 flex items-center justify-center '>
              <Image
                src='/images/StrategicObjectives.png'
                alt='Innovation'
                width={500}
                height={328}
                className='mx-auto'
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className='flex flex-col justify-center text-left mt-5'>
            <h4 className='card-heading text-white mb-4'>
              Strategic Objectives
            </h4>

            <p className='text-gray-400 mb-6 max-w-lg'>
              Drive innovation, strengthen relationships, gain an edge, and
              ensure survival with robust, future-ready information systems.
            </p>

            <ul className='space-y-6'>
              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Leverage real-time data:
                  </span>{' '}
                  Modern information systems empower leaders to pivot quickly in
                  a changing landscape.
                </p>
              </li>

              <li className='flex items-start gap-2'>
                <div className='w-[18px] h-[18px] flex items-center justify-center mt-1'>
                  <Image
                    src='/images/octa.png'
                    alt='octa'
                    height={15}
                    width={15}
                  />
                </div>
                <p className='text-gray-300 text-sm'>
                  <span className='font-semibold text-white'>
                    Enhance Collaboration & Customer Engagement:
                  </span>{' '}
                  Seamlessly connect teams, partners, and customers across
                  platforms.
                </p>
              </li>
            </ul>
            <div className='py-5'>
              <button
                className='text-start text-sm text-white font-semibold underline underline-offset-4 mt-auto cursor-pointer'
                onClick={handeleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
