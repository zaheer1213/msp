export default function Footer () {
  return (
    <footer
      className='bg-[#160d2b] text-white px-6 py-10'
      style={{ borderTop: '1px solid #ECECEC4D' }}
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm'>
        {/* Contact */}
        <div className='text-left'>
          <h4 className='card-heading mb-2'>Contact</h4>
          <p className='card-paragraph'>Work inquires: work@msp.com</p>
          <p className='card-paragraph'>PR and speaking: press@msp.com</p>
        </div>

        {/* Address */}
        <div className='text-left'>
          <h4 className='card-heading mb-2'>Address</h4>
          <p className='card-paragraph'>398 Some Street, Floor 2</p>
          <p className='card-paragraph'>San Francisco, CA 90213</p>
        </div>

        {/* Social */}
        <div className='text-left'>
          <h4 className='card-heading mb-2'>Social</h4>
          <p className='card-paragraph'>Twitter</p>
          <p className='card-paragraph'>Instagram</p>
          <p className='card-paragraph'>LinkedIn</p>
        </div>

        {/* Careers */}
        <div className='text-left'>
          <h4 className='card-heading mb-2'>Careers</h4>
          <p className='card-paragraph'>Careers@msp.com</p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-center md:text-left'>
        <div className='font-[300] text-[16px]'>
          © 2025 msp. All Rights Reserved.
        </div>
        <div className='mt-4 md:mt-0'>
          {/* <Image
            src='/images/Navbar_Brand.png'
            height={22}
            width={138}
            alt='footerlogo'
          /> */}
          <h1 className='font-[500] text-[20px]'>MSP</h1>
        </div>
      </div>
    </footer>
  )
}
