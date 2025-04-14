export default function ITManagement () {
  return (
    <section className='bg-[#10082C] text-white px-6 py-16'>
      <div className='max-w-6xl mx-auto text-center space-y-12'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold uppercase'>
            IT Management – Why It Makes Sense
          </h2>
          <p className='mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            <strong>A Strategic Advantage:</strong> By choosing Managed IT, you
            not only ensure your technology is in expert hands, but also gain
            the freedom to focus on driving your business forward...
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className='bg-[#1D1239] p-6 rounded-2xl shadow-md border border-purple-800/30 custome-shadow '
            >
              <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 md:ml-10'>
                {item.title}
              </h3>
              <p className='font-[400] text-[18px] leading-[150%] md:ml-10'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
