import Link from 'next/link'
import { FaFacebookF, FaDribbble, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrNext, GrPrevious } from 'react-icons/gr'

const AboutUs = () => {
  return (
    <>
      <section
        className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 mt-20'
        style={{
          backgroundImage: `url("/images/Hero_Stack.jpg")`
        }}
      >
        {/* Overlay layer */}
        <div className='absolute inset-0 opacity-50 z-0' />
        <div className='relative z-10 text-white py-16 px-4'>
          <div className='max-w-6xl mx-auto text-center'>
            <div className='max-w-6xl mx-auto text-center space-y-12'>
              <div className=''>
                <h2 className='heading-title  font-bold mb-6 uppercase'>
                  About US
                </h2>
                <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
                  <h3 className='card-heading  mb-4 text-start'>History</h3>
                  <p className='card-paragraph  text-start'>
                    When you choose us as your partner with our “IT as a
                    Service” model, we take on equal responsibility for
                    maximizing your return on IT investment (ROI). Our team
                    continuously assesses your technology needs, adjusting
                    strategies and budgets to ensure your IT spending supports
                    your growth and bottom line. Let’s work together to build an
                    IT foundation that’s not just cost-effective but also a
                    driver of innovation and success.
                  </p>
                </div>
              </div>
              <div className=''>
                <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
                  <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <h2 className='text-start text-3xl card-heading font-bold mb-8 uppercase'>
                      Our Team
                    </h2>
                    <div className='grid gap-10  sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg'>
                      <div className='custome-shadow p-5'>
                        <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                          <img
                            className='absolute object-cover w-full h-full rounded'
                            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
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
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis.
                          </p>
                          <div className='flex items-start space-x-3 sm:justify-start'>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaFacebookF size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaXTwitter size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaDribbble size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaGithub size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='custome-shadow p-5'>
                        <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                          <img
                            className='absolute object-cover w-full h-full rounded'
                            src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
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
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis.
                          </p>
                          <div className='flex items-start space-x-3 sm:justify-start'>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaFacebookF size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaXTwitter size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaDribbble size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaGithub size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='custome-shadow p-5'>
                        <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
                          <img
                            className='absolute object-cover w-full h-full rounded'
                            src='https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
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
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis.
                          </p>
                          <div className='flex items-start space-x-3 sm:justify-start'>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaFacebookF size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaXTwitter size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaDribbble size={20} />
                            </Link>
                            <Link
                              href='/'
                              className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                              <FaGithub size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-1 justify-center '>
                    <button className='rounded-md border border-slate-300 py-2 px-3 text-start text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-[#1D1239] hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      <GrPrevious />
                    </button>
                    <button className='min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-[#1D1239] hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      1
                    </button>
                    <button className='min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      2
                    </button>
                    <button className='min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      3
                    </button>
                    <button className='min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      4
                    </button>
                    <button className='min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      5
                    </button>
                    <button className='min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg  hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>
                      <GrNext />
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
                <h3 className='text-2xl font-semibold mb-4 text-start'>
                  Career
                </h3>
                <p className='font-[400] leading-relaxed text-start'>
                  Careers@msp.com
                </p>
              </div>
              <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutUs
