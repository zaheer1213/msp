'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
const itasaservice = () => {
  const params = useParams()
  const name = params.name
  return (
    <>
      <section
        className='relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 flex flex-col'
        style={{
          backgroundImage: `url("/images/Hero_Stack.jpg")`
        }}
      >
        {/* Overlay layer */}
        <div className='absolute inset-0 opacity-50 z-0' />
        {name == 'itasaservice' && (
          <>
            <div>
              <h2 className='font-[600] text-[48px] leading-[120%] tracking-[-0.32px] text-center font-heading mb-12 '>
                IT as a service
              </h2>

              <div className='grid md:grid-cols-2 gap-8'>
                {/* Card 1 */}
                <div className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                  <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
                    Overview
                  </h3>
                  <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
                    ITaaS aligns IT with your business goals—offering <br />{' '}
                    end-to-end support from strategy to daily operations, <br />{' '}
                    turning IT into a growth driver, not just support.
                  </p>
                </div>

                {/* Card 2 */}
                <div className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                  <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
                    What it is
                  </h3>

                  <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
                    ITaaS delivers end-to-end IT solutions—from <br /> strategic
                    roadmapping to seamless implementation <br /> and
                    support—tailored to your business goals and built to scale.
                  </p>
                </div>

                {/* Card 3 with Image */}
                <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                  <div className='flex-1 md:ml-10'>
                    <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2'>
                      Why It matters ?
                    </h3>
                    <p className='font-[400] text-[18px] leading-[150%]'>
                      Without a smart IT strategy, businesses face <br />{' '}
                      inefficiency, lost growth, and avoidable costs. ITaaS{' '}
                      <br /> aligns your tech with your goals—boosting
                      productivity, <br /> revenue, and profits.
                    </p>
                  </div>
                  <div className='flex-shrink-0 w-full md:w-1/3  custome-shadow'>
                    <Image
                      src='/images/tecnology.jpg'
                      alt='AI Chip'
                      className='rounded-xl'
                      width={467}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            <section className='bg-[#10082C] text-white px-6 py-16'>
              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold uppercase'>
                    benefits
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
                  {[
                    {
                      title: 'Enhanced Productivity',
                      desc: 'Streamlined IT processes mean less downtime and more efficiency.'
                    },
                    {
                      title: 'Revenue Growth',
                      desc: 'Strategic IT solutions open up new opportunities and support expansion.'
                    },
                    {
                      title: 'Cost Efficiency',
                      desc: 'Outsourcing IT to an MSP offers predictable costs and eliminates the overhead of hiring and training staff—helping you save and scale efficiently.'
                    },
                    {
                      title: 'Proactive 24/7 Monitoring',
                      desc: 'MSPs provide proactive maintenance and 24/7 monitoring to prevent issues before they disrupt your business, reducing downtime and enhancing security behind the scenes.'
                    },
                    {
                      title: 'Scalability & Flexibility',
                      desc: 'As your business grows, managed IT services scale with you—offering flexible support without the cost and hassle of expanding an in-house team.'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-[#1D1239] p-6 rounded-2xl shadow-md border border-purple-800/30 custome-shadow '
                    >
                      <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
                        {item.title}
                      </h3>
                      <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
        {name == 'managedservices' && (
          <div>
            <h1>hello</h1>
          </div>
        )}
      </section>
    </>
  )
}
export default itasaservice
