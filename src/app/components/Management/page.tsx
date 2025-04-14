const Management = () => {
  return (
    <>
      <section className='bg-[#160d2b] bg-opacity-95 text-white px-6 py-16 md:px-24'>
        <h2 className='font-[600] text-[48px] leading-[120%] tracking-[-0.32px] text-center font-heading mb-12 '>
          Beyond IT Management- Empowering <br /> Your Business, Elevating Your
          Growth
        </h2>

        <div className='grid md:grid-cols-2 gap-8 p-6'>
          <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
            <div className='flex-1 md:m-10'>
              <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 text-transform: uppercase'>
                What truly sets us apart
              </h3>
              <p className='font-[400] text-[18px] tracking-[0.2%]'>
                What truly sets us apart is our commitment to mutual growth. Our
                philosophy is to succeed by helping your business thrive. Unlike
                other MSPs and MSSPs, we strive to be strategic partners rather
                than regular managed service providers. We engage with you like
                your in-house IT outfit, bringing forth a set of expertise that
                would otherwise cost you a fortune with full-time salaried
                staff.
              </p>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8 p-6'>
          <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#10082C] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
            <div className='flex-1 md:m-10'>
              <h3 className='font-500 text-[32px] leading-[130%] tracking-[-0.16px] mb-2 text-transform: uppercase'>
                What we promise
              </h3>
              <p className='font-normal text-[18px] leading-[25px] tracking-[0.002em] font-montserrat'>
                With our full board package, we start by analyzing your business
                requirements and formulating a strategic IT plan aimed at
                driving your business growth. We will help you implement and
                manage it. Nonetheless, all our offerings will ensure: Cost
                Savings: Unmatched cost-to-quality/ performance ratio. Proactive
                Support: Preventing issues before they cause downtime. Access to
                Expertise: Skilled professionals at a fraction of the cost of
                hiring. Scalability: Easily scale services up or down to meet
                changing business needs. Enhanced Security: Defend against
                evolving cyber threats.
              </p>
              <ol className='md:pt-4'>
                <li className="font-[400]">
                  <b>Cost Savings:</b> Unmatched cost-to-quality/ performance
                  ratio.{' '}
                </li>
                <li className='md:pt-4 font-[400]'>
                  <b>Proactive Support:</b> Preventing issues before they cause
                  downtime.{' '}
                </li>
                <li className='md:pt-4 font-[400]'>
                  <b> Access to Expertise:</b> Skilled professionals at a
                  fraction of the cost of hiring.{' '}
                </li>
                <li className='md:pt-4 font-[400]'>
                  <b> Scalability:</b> Easily scale services up or down to meet
                  changing business needs.{' '}
                </li>
                <li className='md:pt-4'>
                  <b>Enhanced Security:</b> Defend against evolving cyber
                  threats.{' '}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Management
