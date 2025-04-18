'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#0B0121] shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white font-semibold text-xl'>
          <Link href='/'>
            <h1>MSP</h1>
          </Link>
        </div>

        {/* Desktop Nav + Hamburger */}
        <div className='flex items-center'>
          {/* Desktop Nav */}
          <ul className='hidden md:flex items-center space-x-6 text-[#ECECEC] text-sm'>
            <li>
              <Link href='/components/Business'>
                <span className='cursor-pointer hover:text-white transition'>
                  Optimization
                </span>
              </Link>
            </li>
            <li>
              <Link href='/components/Management'>
                <span className='cursor-pointer hover:text-white transition'>
                  Empowerment
                </span>
              </Link>
            </li>
            <li>
              <Link href='/components/ITManagement'>
                <span className='cursor-pointer hover:text-white transition'>
                  Justification
                </span>
              </Link>
            </li>
            <li>
              <Link href='/components/FaqAccordion'>
                <span className='cursor-pointer hover:text-white transition'>
                  FAQ
                </span>
              </Link>
            </li>
            <li>
              <Link href='/components/AboutUs'>
                <span className='cursor-pointer hover:text-white transition'>
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href='/components/ContactUs'>
                <span className='inline-block bg-[#ECECEC] text-[#0B0121] px-4 py-2 rounded-full font-medium hover:opacity-90 transition'>
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className='md:hidden ml-4'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
            >
              {isOpen ? <RxCross2 size={24} /> : <CiMenuBurger size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className='md:hidden flex flex-col space-y-4 bg-[#0B0121] text-[#ECECEC] text-sm px-6 py-4'>
          <li>
            <Link href='/components/Business' onClick={() => setIsOpen(false)}>
              Optimization
            </Link>
          </li>
          <li>
            <Link
              href='/components/Management' 
              onClick={() => setIsOpen(false)}
            >
              Empowerment
            </Link>
          </li>
          <li>
            <Link
              href='/components/ITManagement'
              onClick={() => setIsOpen(false)}
            >
              Justification
            </Link>
          </li>
          <li>
            <Link
              href='/components/FaqAccordion'
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link href='/components/AboutUs' onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href='/components/ContactUs' onClick={() => setIsOpen(false)}>
              <span className='inline-block bg-[#ECECEC] text-[#0B0121] px-4 py-2 rounded-full font-medium hover:opacity-90 transition'>
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
