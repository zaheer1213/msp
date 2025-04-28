import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { CgFacebook } from 'react-icons/cg'

export default function Footer () {
  return (
    <footer
      className='bg-[#160d2b] text-white px-6 py-10'
      style={{ borderTop: '1px solid #ECECEC4D' }}
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm'>
        {/* Contact */}
        <div className='text-start'>
          <div className='mt-4 md:mt-0 mb-2'>
            <Image
              src='/images/Logo.png'
              height={22}
              width={138}
              alt='footerlogo'
            />
          </div>
          <p className='card-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{' '}
          </p>
          <ul className='flex flex-row mt-2 cursor-pointer'>
            <li>
              <FaLinkedinIn size={20} />
            </li>
            <li className='pl-5'>
              <FaSquareXTwitter size={20} />
            </li>
            <li className='pl-5'>
              <IoLogoInstagram size={20} />
            </li>
            <li className='pl-5'>
              <CgFacebook size={20} />
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className='text-left'>
          <h4 className='card-heading-contact mb-2'>Company</h4>
          <p className='card-paragraph'>Pricing</p>
          <p className='card-paragraph'>FAQ</p>
          <p className='card-paragraph'>Partnership</p>
        </div>

        {/* Social */}
        <div className='text-left'>
          <h4 className='card-heading-contact mb-2'>Info</h4>
          <p className='card-paragraph'>About Us</p>
          <p className='card-paragraph'>Our Approach</p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center mt-10 text-center md:text-left'>
        <div className='font-[300] text-[16px]'>
          © 2025 msp. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
