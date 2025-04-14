import Image from 'next/image'
import './business.css'

const Business = () => {
  return (
    <section className='bg-[#160d2b] bg-opacity-95 text-white px-6 py-16 md:px-24'>
      <h2 className='font-[600] text-[48px] leading-[120%] tracking-[-0.32px] text-center font-heading mb-12 '>
        Is Your Business Getting the Most <br /> from IT?
      </h2>

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Card 1 */}
        <div className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
          <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
            Are you really harnessing <br /> the power of IT?
          </h3>
          <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
            Our Analytics Dashboard provides a clear and  intuitive interface <br/> for
            you to easily analyze your data. From customizable graphs <br/> to
            real-time data updates, our dashboard offers everything you <br/> need to
            gain valuable insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
          <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
            The Challenge?
          </h3>

          <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
            Most companies struggle or pay little to no attention <br/> to translating
            their business goals into effective IT <br/> operations.
          </p>
        </div>

        {/* Card 3 with Image */}
        <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
          <div className="flex-1 md:ml-10">
            <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2'>
              That’s where we come in!
            </h3>
            <p className='font-[400] text-[18px] leading-[150%]'>
              We bridge the gap, aligning your business  requirements with IT
              strategies <br/> that drive growth,  efficiency, and resilience. IT
              `shouldn't` just support  your <br/> business; it should elevate it.
            </p>
          </div>
          <div className='flex-shrink-0 w-full md:w-1/3  custome-shadow'>
            <Image
              src='/images/ai-chip.jpg'
              alt='AI Chip'
              className='rounded-xl'
              width={467}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
