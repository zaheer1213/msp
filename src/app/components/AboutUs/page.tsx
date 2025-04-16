'use client'
import Link from 'next/link'
import { FaFacebookF, FaDribbble, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <>
      <section
        className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 mt-20'
        style={{
          backgroundImage: `url("/images/Hero_Stack.jpg")`
        }}
      >
        <div className='absolute inset-0 opacity-50 z-0' />
        <div className='relative z-10 text-white py-16 px-4'>
          <div className='max-w-6xl mx-auto text-center space-y-12'>
            {/* History Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='heading-title font-bold mb-6 uppercase'>
                About US
              </h2>
              <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'>
                <h3 className='card-heading mb-4 text-start'>History</h3>
                <p className='card-paragraph text-start'>
                  When you choose us as your partner with our “IT as a Service”
                  model, we take on equal responsibility for maximizing your
                  return on IT investment (ROI). Our team continuously assesses
                  your technology needs, adjusting strategies and budgets to
                  ensure your IT spending supports your growth and bottom line.
                </p>
              </div>
            </motion.div>

            {/* Our Team Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'>
                <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                  <h2 className='text-start text-3xl card-heading font-bold mb-8 uppercase'>
                    Our Team
                  </h2>
                  <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg'>
                    {/* Team Member Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className='custome-shadow p-5'
                    >
                      <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                        <img
                          className='absolute object-cover w-full h-full rounded'
                          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
                          alt='Person'
                        />
                      </div>
                      <div className='flex flex-col sm:text-start'>
                        <p className='text-lg font-bold'>Leslie Livingston</p>
                        <p className='mb-2 text-xs font-[500]'>
                          Product Manager
                        </p>
                        <p className='mb-5 text-xs text-gray-600'>
                          Worem ipsum dolor sit amet, consectetur adipiscing
                          elit...
                        </p>
                        <div className='flex items-start space-x-3 sm:justify-start'>
                          <Link href='/'>
                            <FaFacebookF size={20} />
                          </Link>
                          <Link href='/'>
                            <FaXTwitter size={20} />
                          </Link>
                          <Link href='/'>
                            <FaDribbble size={20} />
                          </Link>
                          <Link href='/'>
                            <FaGithub size={20} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>

                    {/* Team Member Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className='custome-shadow p-5'
                    >
                      <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                        <img
                          className='absolute object-cover w-full h-full rounded'
                          src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
                          alt='Person'
                        />
                      </div>
                      <div className='flex flex-col sm:text-start'>
                        <p className='text-lg font-bold'>Marta Clermont</p>
                        <p className='mb-2 text-xs font-[500]'>
                          Design Team Lead
                        </p>
                        <p className='mb-5 text-xs text-gray-600'>
                          Worem ipsum dolor sit amet, consectetur adipiscing
                          elit...
                        </p>
                        <div className='flex items-start space-x-3 sm:justify-start'>
                          <Link href='/'>
                            <FaFacebookF size={20} />
                          </Link>
                          <Link href='/'>
                            <FaXTwitter size={20} />
                          </Link>
                          <Link href='/'>
                            <FaDribbble size={20} />
                          </Link>
                          <Link href='/'>
                            <FaGithub size={20} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>

                    {/* Team Member Card 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className='custome-shadow p-5'
                    >
                      <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                        <img
                          className='absolute object-cover w-full h-full rounded'
                          src='https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg'
                          alt='Person'
                        />
                      </div>
                      <div className='flex flex-col sm:text-start'>
                        <p className='text-lg font-bold'>Alice Melbourne</p>
                        <p className='mb-2 text-xs font-[500]'>
                          Human Resources
                        </p>
                        <p className='mb-5 text-xs text-gray-600'>
                          Worem ipsum dolor sit amet, consectetur adipiscing
                          elit...
                        </p>
                        <div className='flex items-start space-x-3 sm:justify-start'>
                          <Link href='/'>
                            <FaFacebookF size={20} />
                          </Link>
                          <Link href='/'>
                            <FaXTwitter size={20} />
                          </Link>
                          <Link href='/'>
                            <FaDribbble size={20} />
                          </Link>
                          <Link href='/'>
                            <FaGithub size={20} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'
            >
              <h3 className='text-2xl font-semibold mb-4 text-start'>Career</h3>
              <p className='font-[400] leading-relaxed text-start'>
                Careers@msp.com
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow'
            >
              <h3 className='text-2xl font-semibold mb-4 text-start'>
                Contact Us
              </h3>
              <p className='font-[300] leading-relaxed text-start'>
                <b>New business:</b> newbusiness@msp.com
              </p>
              <p className='font-[300] leading-relaxed text-start'>
                <b>Work inquires:</b> work@msp.com
              </p>
              <p className='font-[300] leading-relaxed text-start'>
                <b>PR and speaking:</b> press@msp.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
