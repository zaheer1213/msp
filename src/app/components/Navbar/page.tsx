'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const toggleMenu = () => setIsOpen(!isOpen)

  const router = useRouter()

  const doSearch = () => {
    const keyword = searchValue.toLowerCase()

    const routes = [
      { key: 'it', path: '/components/Partnerships/itasaservice' },
      { key: 'it as a service', path: '/components/Partnerships/itasaservice' },
      { key: 'managed', path: '/components/Partnerships/managedservices' },
      {
        key: 'managed services',
        path: '/components/Partnerships/managedservices'
      },
      {
        key: 'specialized',
        path: '/components/Partnerships/specializedservice'
      },
      {
        key: 'specialized services',
        path: '/components/Partnerships/specializedservice'
      }
    ]

    const match = routes.find(route => keyword.includes(route.key))

    if (match) {
      router.push(match.path)
    } else {
      router.push('/components/Partnerships/itasaservice')
    }

    setSearchValue('')
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      doSearch()
    }
  }

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-50 bg-[#0B0121] shadow-md'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          {/* Left Side: Logo + Nav */}
          <div className='flex items-center space-x-8 pl-5'>
            {/* Logo */}
            <div className='text-white font-semibold text-xl'>
              <Link href='/'>
                <Image
                  src='/images/Logo.png'
                  alt='logo'
                  height={30}
                  width={80}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <ul className='hidden md:flex items-center space-x-8 text-[#ECECEC] text-sm'>
              <li className='relative group'>
                <span className='cursor-pointer hover:text-white transition'>
                  Services ▾
                </span>
                {/* Dropdown */}
                <ul className='absolute left-0 top-full z-50 hidden group-hover:flex flex-col bg-[#1a0938] rounded shadow-lg py-2 w-48'>
                  <li className='px-4 py-2 hover:bg-[#260c4f]'>
                    <Link href='/components/Business'>Optimization</Link>
                  </li>
                  <li className='px-4 py-2 hover:bg-[#260c4f]'>
                    <Link href='/components/Management'>Empowerment</Link>
                  </li>
                  <li className='px-4 py-2 hover:bg-[#260c4f]'>
                    <Link href='/components/ITManagement'>Justification</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href='/components/OurApproach'>
                  <span className='cursor-pointer hover:text-white transition'>
                    Pricing
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/components/AboutUs'>
                  <span className='cursor-pointer hover:text-white transition'>
                    About
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
            </ul>
          </div>

          <div className='flex items-center space-x-3'>
            {/* Desktop Search */}
            <div className='hidden md:flex items-center gap-x-2'>
              <input
                type='search'
                className='rounded-full px-4 py-2 text-sm text-white border bg-transparent placeholder-gray-400 w-48'
                placeholder='Search...'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleSearch}
              />
              <button
                onClick={doSearch}
                className='text-white bg-[#9C39FF] p-2 rounded-full hover:bg-[#B039FF] transition cursor-pointer'
              >
                <FaSearch size={14} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className='flex md:hidden items-center gap-x-2'>
              <input
                type='search'
                className='rounded-full px-3 py-1.5 text-sm text-white border bg-transparent placeholder-gray-400 w-36'
                placeholder='Search...'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleSearch}
              />
              <button
                onClick={doSearch}
                className='text-white bg-[#9C39FF] p-2 rounded-full hover:bg-[#B039FF] transition cursor-pointer'
              >
                <FaSearch size={14} />
              </button>
            </div>

            {/* Contact Button */}
            <div className='hidden md:block'>
              <Link href='/components/ContactUs'>
                <span
                  className='inline-block text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition'
                  style={{
                    background: 'linear-gradient(to right, #B039FF, #9C39FF)'
                  }}
                >
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div
              className='md:hidden text-white text-2xl cursor-pointer'
              onClick={toggleMenu}
            >
              {isOpen ? <RxCross2 /> : <CiMenuBurger />}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='flex flex-col space-y-6 bg-[#0B0121] text-[#ECECEC] text-base px-6 py-6'>
            {/* Services */}
            <li>
              <span className='block font-semibold text-white'>Services</span>
              <ul className='pl-4 mt-2 space-y-2'>
                <li>
                  <Link href='/components/Business' onClick={toggleMenu}>
                    Optimization
                  </Link>
                </li>
                <li>
                  <Link href='/components/Management' onClick={toggleMenu}>
                    Empowerment
                  </Link>
                </li>
                <li>
                  <Link href='/components/ITManagement' onClick={toggleMenu}>
                    Justification
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li>
              <Link href='/components/OurApproach' onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href='/components/AboutUs' onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href='/components/FaqAccordion' onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href='/components/ContactUs' onClick={toggleMenu}>
                <span
                  className='inline-block  text-white px-4 py-2  font-medium hover:opacity-90 transition'
                  style={{
                    background: 'linear-gradient(to right, #B039FF, #9C39FF)'
                  }}
                >
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* {errorMessage && (
        <div className='fixed top-20 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg transition-all duration-300 z-50'>
          {errorMessage}
        </div>
      )} */}
    </>
  )
}

export default Navbar
