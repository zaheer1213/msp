import Image from 'next/image'
import './help.css'

export default function HelpSection () {
  return (
    <section className='bg-[#10082C] py-16 px-4 text-white text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='font-[600] text-[48px] leading-[120%] tracking-[-0.32px] text-center font-heading mb-12 '>
          How Can We Help ?
        </h2>
        <p className='text-[20px] font-[500] max-w-3xl mx-auto text-lg mb-12 leading-[142%] tracking-[1.3px]'>
          We provide IT as a Service—starting with strategic planning—to build a
          tightly integrated IT environment that drives your business forward.
          Our analysts assess your goals and processes to deliver tailored,
          end-to-end solutions aligned with your strategy.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center ite'>
          {/* Card 1 */}
          <div className='p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4'>
              <Image
                src='/images/Innovation.png'
                alt='Innovation'
                width={50}
                height={50}
                className='mx-auto'
              />
            </div>
            <h4 className='mb-2 custome-help-text'>Operational Excellence</h4>
            <p className='custome-help-para-text'>
              Streamline operations and boost productivity with IT-driven
              automation—cut costs, optimize resources, and enhance service
              quality.
            </p>
          </div>

          {/* Card 2 */}
          <div className=' p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4 text-xl'>
              <Image
                src='/images/Designing_Idea.png'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <h4 className='custome-help-text mb-2'>Smarter Decision-Making</h4>
            <p className='custome-help-para-text'>
              Make smarter, faster decisions with real-time insights from
              integrated systems. Clear data powers confident, forward-thinking
              moves.
            </p>
          </div>

          {/* Card 3 */}
          <div className=' p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center flex-col'>
            <div className='bg-gradient-to-b from-[#AD6BC2] to-[#201E99] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4 text-xl'>
              <Image src='/images/Vector.png' alt='' width={50} height={50} />
            </div>
            <h4 className='custome-help-text mb-2'>
              Other Strategic Objectives
            </h4>
            <p className='custome-help-para-text'>
              Drive innovation, strengthen relationships, gain an edge, and
              ensure survival with robust, future-ready information systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
