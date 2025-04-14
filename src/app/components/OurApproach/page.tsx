export default function OurApproach () {
  return (
    <section className='bg-[#10082C] text-white px-6 py-16'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Heading */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-wide'>
            Our Approach – What Distinguishes Us
          </h2>
          <p className='mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Our commitment to mutual growth. Our philosophy is to succeed by
            helping your business thrive...
          </p>
        </div>

        {/* Price and Planning Card */}
        <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
          <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 '>
            Price and Planning
          </h3>
          <p className='text-gray-300 mb-8'>
            We focus on long-term partnerships not one-size-fits-all solutions.
            Our services are tailored to your unique business needs and goals,
            with flexible service levels{' '}
            <strong>Essential, Standard, and Premium</strong> — to fit various
            requirements and budgets.
          </p>

          {/* Tiers */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
            {/* Essential */}
            <div>
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Essential
              </h4>
              <ul className='list-disc list-inside text-sm text-gray-300 space-y-2 mt-2'>
                <li>
                  Designed to cover the core IT requirements, this option is for
                  businesses needing a cost-effective solution that meets
                  essential needs.
                </li>
                <li>
                  We focus on maximizing value and efficiency while maintaining
                  foundational support.
                </li>
              </ul>
            </div>

            {/* Standard */}
            <div>
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Standard
              </h4>
              <ul className='list-disc list-inside text-sm text-gray-300 space-y-2 mt-2'>
                <li>
                  This level provides a well-rounded approach, balancing quality
                  and cost.
                </li>
                <li>
                  It’s ideal for businesses looking for robust support that
                  enhances productivity without overextending their budget.
                </li>
              </ul>
            </div>

            {/* Premium */}
            <div>
              <h4 className='text-lg font-semibold mb-2 border-b border-purple-600 inline-block pb-1'>
                Premium
              </h4>
              <ul className='list-disc list-inside text-sm text-gray-300 space-y-2 mt-2'>
                <li>
                  For businesses looking to prioritize IT as a competitive
                  advantage, our premium solutions comprehensive and highly
                  adaptable.
                </li>
                <li>
                  This level covers every aspect of IT with an emphasis on
                  quality, security, and scalability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* True IT Partnership */}
        <div className='bg-[#1D1239] p-6 md:p-10 rounded-2xl shadow-xl border border-purple-900/30 backdrop-blur-md custome-shadow '>
          <h3 className='text-2xl font-semibold mb-4'>A True IT Partnership</h3>
          <p className='text-gray-300 leading-relaxed'>
            When you choose us as your partner with our “IT as a Service” model,
            we take on equal responsibility for maximizing your return on IT
            investment (ROI). Our team continuously assesses your technology
            needs, adjusting strategies and budgets to ensure your IT spending
            supports your growth and bottom line. Let’s work together to build
            an IT foundation that’s not just cost-effective but also a driver of
            innovation and success.
          </p>
        </div>
      </div>
    </section>
  )
}
