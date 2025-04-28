'use client'
import { useRouter } from 'next/navigation'

const Popup = () => {
  const router = useRouter()
  const handeleContactClick = () => {
    router.push('/components/ContactUs')
  }
  return (
    <>
      <div className='bg-[#0E051B] py-16 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center'>
        {/* Title */}
        <div className='text-center mb-12 bg-gradient-to-b from-[#9C39FF66] to-[#160F22] max-w-6xl w-full shadow-lg p-12 rounded-2xl  md:flex-row items-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Take the next step toward optimized & <br /> streamlined operations.
          </h2>
          <p className='text-gray-400'>
            Discover how our platform can empower your business.
          </p>

          <div className='py-5'>
            <button
              className='inline-block  text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition'
              style={{
                background: 'linear-gradient(to right, #B039FF, #9C39FF)'
              }}
              onClick={handeleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Popup
