'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#0B0121] px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-2 text-white font-semibold text-lg'>
          <Link href='/'>
            {/* <img src='/images/Navbar_Brand.png' alt='logo' /> */}
            <h1>MSP</h1>
          </Link>
        </div>

        {/* Navigation */}
        <ul className='flex items-center space-x-6 text-[#ECECEC] text-sm'>
          <li className='cursor-pointer'>
            <Link href='/components/OurApproach'>
              <span className='cursor-pointer hover:text-white transition'>
                Pricing
              </span>
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/components/FaqAccordion'>
              <span className='hover:text-white transition'>FAQ</span>
            </Link>
          </li>
          <li className='cursor-pointer whitespace-nowrap'>
            <Link href='/components/AboutUs'>
              <span className='hover:text-white transition'>About us</span>
            </Link>
          </li>

          <li className='cursor-pointer w-full flex justify-center'>
            <Link href='/components/ContactUs'>
              <span className='inline-block bg-[#ECECEC] text-[#0B0121] px-4 py-2 rounded-full font-medium hover:opacity-90 transition'>
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
