'use client'
import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
}

export default function ITManagement () {
  const items = [
    {
      title: 'Focus on Your Core Business',
      desc: 'Managed IT frees you to focus on your core business by offloading complex IT tasks to experts—saving time, resources, and enabling greater focus on innovation and growth.'
    },
    {
      title: 'Expertise and Experience On Tap',
      desc: 'MSPs give you access to a full team of experts—cybersecurity, cloud, and more—offering faster solutions, cutting-edge tech, and best practices without the high cost of in-house staffing.'
    },
    {
      title: 'Cost Efficiency',
      desc: 'Outsourcing IT to an MSP offers predictable costs and eliminates the overhead of hiring and training staff—helping you save and scale efficiently.'
    },
    {
      title: 'Proactive 24/7 Monitoring',
      desc: 'MSPs provide proactive maintenance and 24/7 monitoring to prevent issues before they disrupt your business, reducing downtime and enhancing security behind the scenes.'
    },
    {
      title: 'Scalability & Flexibility',
      desc: 'As your business grows, managed IT services scale with you—offering flexible support without the cost and hassle of expanding an in-house team.'
    }
  ]

  return (
    <section className='bg-[#160d2b] text-white px-6 py-16 mt-20'>
      <div className='max-w-6xl mx-auto text-center space-y-12'>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='heading-title font-bold'>
            IT Management – Why It Makes Sense
          </h2>
          <p className='mt-4 card-paragraph mx-auto leading-relaxed'>
            <strong>A Strategic Advantage:</strong> By choosing Managed IT, you
            not only ensure your technology is in expert hands, but also gain
            the freedom to focus on driving your business forward...
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className='bg-[#1D1239] p-6 rounded-2xl shadow-md border border-purple-800/30 custome-shadow'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
            >
              <h3 className='card-heading mb-2 md:ml-10 padding-top'>
                {item.title}
              </h3>
              <p className='card-paragraph md:ml-10 text-padding-space'>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
