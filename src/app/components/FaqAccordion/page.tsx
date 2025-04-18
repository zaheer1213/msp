'use client'

import { useState } from 'react'

const faqData = {
  General: [
    {
      question: 'Can I use it for free ?',
      answer:
        'Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a logo.'
    },
    {
      question: 'Why should I upgrade ?',
      answer:
        'Upgrading unlocks advanced features, team collaboration, and priority support.'
    },
    {
      question: 'Why should I upgrade ?',
      answer: 'Premium users enjoy faster rendering and exclusive templates.'
    }
  ],
  Technical: [
    {
      question: 'Is it compatible with all browsers?',
      answer: 'Yes, it works on Chrome, Firefox, Safari, and Edge.'
    },
    {
      question: 'Does it support real-time collaboration?',
      answer: 'Yes, multiple users can collaborate in real-time.'
    }
  ]
}

export default function FaqAccordion () {
  const [activeTab, setActiveTab] = useState<'General' | 'Technical'>('General')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section
        className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 mt-20'
        style={{
          backgroundImage: `url("/images/Hero_Stack.jpg")`
        }}
      >
        {/* Overlay layer */}
        <div className='absolute inset-0 opacity-50 z-0' />
        <div className='relative z-10 text-white py-16 px-4'>
          <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6'>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className='flex justify-center gap-4 mb-10'>
              {(['General', 'Technical'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium px-3 py-1 border-b-2 ${
                    activeTab === tab
                      ? 'border-white'
                      : 'border-transparent text-gray-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className='custome-width mx-auto space-y-4 text-left'>
              {faqData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className='w-full bg-[#3B1966]/30 rounded-xl px-6 py-4 cursor-pointer transition-all duration-300'
                  onClick={() => toggle(index)}
                >
                  <div className='flex justify-between items-center'>
                    <h4 className='font-semibold text-lg capitalize'>{item.question}</h4>
                    <span className='text-xl'>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className='mt-3 text-sm text-gray-300'>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
