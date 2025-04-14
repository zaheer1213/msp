import Image from 'next/image'
export default function Footer () {
  return (
    <footer className='bg-[#0B0620] text-white px-6 py-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm'>
        {/* Contact */}
        <div>
          <h4 className='font-[500] text-[24px] mb-2'>Contact</h4>
          <p className='font-[300] text-[18px]'>Work inquires: work@anas.com</p>
          <p className='font-[300] text-[18px]'>
            PR and speaking: press@anas.com
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className='font-[500] text-[24px] mb-2'>Address</h4>
          <p className='font-[300] text-[18px]'>398 Some Street, Floor 2</p>
          <p className='font-[300] text-[18px]'>San Francisco, CA 90213</p>
        </div>
      </div>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm pt-5'>
        <div>
          <h4 className='font-[500] text-[24px] mb-2'>Careers</h4>
          <p className='font-[300] text-[18px]'>Careers@anas.com</p>
        </div>
        {/* Social */}
        <div>
          <h4 className='font-[500] text-[24px] mb-2'>Social</h4>
          <p className='font-[300] text-[18px]'>Twitter</p>
          <p className='font-[300] text-[18px]'>Instagram</p>
          <p className='font-[300] text-[18px]'>LinkedIn</p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex justify-between align-middle'>
        <div className='font-[300] text-[16px] mt-8'>
          © 2025 Anas. All Rights Reserved.
        </div>
        <div className='mt-8'>
          <Image src='/images/Navbar_Brand.png' height={22} width={138} alt='footerlogo'/>
        </div>
      </div>
    </footer>
  )
}
