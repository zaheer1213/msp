'use client'

export default function ContactUs () {
  return (
    <section
      className='relative w-full min-h-screen bg-cover bg-center text-white px-4 py-16 mt-20'
      style={{ backgroundImage: `url("/images/Hero_Stack.jpg")` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0  opacity-60 z-0' />

      {/* Content */}
      <div className='relative z-10 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>CONTACT US</h2>

        <div className='grid md:grid-cols-2 gap-6 custome-shadow p-6'>
          {/* Left Side - Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>
            <div>
              <h4 className='text-lg font-semibold'>Address</h4>
              <p className='text-sm text-gray-300'>
                398 Some Street, Floor 2 San Francisco, CA 90213
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold'>Email</h4>
              <p className='text-sm text-gray-300'>hello@msp.com</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold'>Phone</h4>
              <p className='text-sm text-gray-300'>+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className='space-y-6 bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280]'>
            <div>
              <label className='block mb-2 text-sm font-medium'>Name</label>
              <input
                type='text'
                className='w-full px-4 py-2 bg-[#1c1339] text-white border border-[#292280] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium'>Email</label>
              <input
                type='email'
                className='w-full px-4 py-2 bg-[#1c1339] text-white border border-[#292280] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='you@example.com'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium'>Phone</label>
              <input
                type='tel'
                className='w-full px-4 py-2 bg-[#1c1339] text-white border border-[#292280] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Your Phone Number'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium'>Message</label>
              <textarea
                rows={4}
                className='w-full px-4 py-2 bg-[#1c1339] text-white border border-[#292280] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Your message here...'
              />
            </div>
            <button
              type='submit'
              className='w-full py-2 bg-gradient-to-r from-[#292280] to-[#ECECEC] transition-colors rounded-md font-semibold cursor-pointer'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
