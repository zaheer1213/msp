'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#0B0121] px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-2 text-white font-semibold text-lg'>
          <img src='/images/Navbar_Brand.png' alt='logo' />
        </div>

        {/* Navigation */}
        <ul className='flex items-center space-x-6 text-[#ECECEC] text-sm'>
          <li className='cursor-pointer'>
            <Link href='/pricing'>
              {' '}
              {/* Changed href to '/pricing' */}
              <span className='cursor-pointer hover:text-white transition'>
                Pricing
              </span>
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/faq'>
              {' '}
              {/* Changed href to '/faq' */}
              <span className='hover:text-white transition'>FAQ</span>
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/about-us'>
              {' '}
              {/* Changed href to '/about-us' */}
              <span className='hover:text-white transition'>About us</span>
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/contact-us'>
              {' '}
              {/* Changed href to '/contact-us' */}
              <span className='bg-[#ECECEC] text-[#0B0121] px-4 py-2 rounded-full font-medium hover:opacity-90 transition'>
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
