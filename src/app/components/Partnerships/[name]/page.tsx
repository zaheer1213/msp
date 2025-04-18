'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
const Itasaservice = () => {
  const params = useParams()
  const name = params.name
  return (
    <>
      <div className=''>
        {name == 'itasaservice' && (
          <>
            <section
              className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 flex flex-col'
              style={{
                backgroundImage: `url("/images/Hero_Stack.jpg")`
              }}
            >
              {/* Overlay layer */}
              <div className='absolute inset-0 opacity-50 z-0' />

              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <h2 className='mt-20 heading-title  text-center font-heading mb-12 '>
                  IT as a service
                </h2>

                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Card 1 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                    <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                      Overview
                    </h3>
                    <p className='card-paragraph  text-start md:ml-10 text-padding-space'>
                      ITaaS aligns IT with your business goals—offering{' '}
                      end-to-end support from strategy to daily operations,{' '}
                      turning IT into a growth driver, not just support.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                    <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                      What it is
                    </h3>

                    <p className='text-start md:ml-10 card-paragraph  text-padding-space'>
                      ITaaS delivers end-to-end IT solutions—from strategic
                      roadmapping to seamless implementation and
                      support—tailored to your business goals and built to
                      scale.
                    </p>
                  </div>

                  {/* Card 3 with Image */}
                  <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow mb-15'>
                    <div className='flex-1 md:ml-10'>
                      <h3 className='text-start md:ml-10 card-heading mb-2 padding-top'>
                        Why It matters ?
                      </h3>
                      <p className='text-start md:ml-10 card-paragraph  text-padding-space'>
                        Without a smart IT strategy, businesses face{' '}
                        inefficiency, lost growth, and avoidable costs. ITaaS{' '}
                        aligns your tech with your goals—boosting productivity,
                        revenue, and profits.
                      </p>
                    </div>
                    <div className='custome-shadow'>
                      <Image
                        src='/images/tecnology.jpg'
                        alt='AI Chip'
                        className='rounded-xl'
                        width={467}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='text-white px-6 py-16'>
              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <div className='pt-5 bg-[#160d2b]'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    benefits
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start  card-heading mb-2 md:ml-10 padding-top'>
                        Enhanced Productivity
                      </h3>
                      <p className='text-start card-paragraph  md:ml-10 text-padding-space'>
                        Streamlined IT processes mean less downtime and more
                        efficiency.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Revenue Growth
                      </h3>

                      <p className='text-start  card-paragraph  md:ml-10 text-padding-space'>
                        Strategic IT solutions open up new opportunities and
                        support expansion
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Cost Effectiveness
                      </h3>
                      <p className='text-start card-paragraph  md:ml-10 text-padding-space'>
                        With an optimized IT setup, you reduce wasted resources
                        and maximize ROI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-5 mb-20'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    How It Works
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Strategic IT Planning
                      </h3>
                      <p className='text-start card-paragraph  md:ml-10 text-padding-space'>
                        Our business analysts work with you to understand your
                        goals and create an IT roadmap
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Implementation & Integration
                      </h3>

                      <p className='text-start card-paragraph  md:ml-10 text-padding-space'>
                        We deploy and integrate the necessary tools and systems.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Ongoing Support
                      </h3>
                      <p className='text-start card-paragraph ] md:ml-10 text-padding-space'>
                        From managing end-user requests to maintaining{' '}
                        infrastructure, we ensure everything runs smoothly.
                      </p>
                    </div>

                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Continuous Optimization
                      </h3>
                      <p className='text-start card-paragraph ] md:ml-10 text-padding-space'>
                        We regularly review and optimize your IT setup to keep
                        pace with changing needs and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {name == 'managedservices' && (
          <>
            <section
              className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 flex flex-col'
              style={{
                backgroundImage: `url("/images/Hero_Stack.jpg")`
              }}
            >
              {/* Overlay layer */}
              <div className='absolute inset-0 opacity-50 z-0' />

              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <h2 className='mt-20 heading-title text-center font-heading mb-12 '>
                  Managed Services
                </h2>

                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Card 1 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                    <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                      Overview
                    </h3>
                    <p className='font-[400] text-[18px] leading-[150%] text-start md:ml-10 text-padding-space'>
                      Our Managed Services provide expert management of your IT
                      infrastructure, ensuring that your systems are secure,
                      reliable, and scalable. Whether you need full
                      infrastructure support or specific services like Managed
                      Detection and Response (MDR) or Business Continuity and
                      Disaster Recovery (BCDR), we offer the flexibility to meet
                      your unique needs.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                    <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                      What it is
                    </h3>

                    <p className='text-start md:ml-10 font-[400] text-[18px] leading-[150%] text-padding-space'>
                      Managed Services is an outsourced IT management solution
                      that can be customized to support your entire
                      infrastructure or individual components. From servers and
                      networks to cybersecurity and disaster recovery, our
                      solutions are designed to minimize downtime and maximize
                      efficiency.
                    </p>
                  </div>

                  {/* Card 3 with Image */}
                  <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow mb-15'>
                    <div className='flex-1 md:ml-10'>
                      <h3 className='text-start md:ml-10 card-heading mb-2 padding-top '>
                        Why It matters ?
                      </h3>
                      <p className='text-start md:ml-10 font-[400] text-[18px] leading-[150%] text-padding-space'>
                        Managing IT in-house can be costly and complex,
                        especially as technology needs grow. Our Managed
                        Services give you access to specialized expertise and
                        proactive monitoring, reducing risks and ensuring your
                        systems are optimized for performance.
                      </p>
                    </div>
                    <div className='custome-shadow'>
                      <Image
                        src='/images/Managed_Services.jpg'
                        alt='AI Chip'
                        className='rounded-xl'
                        width={467}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='text-white px-6 py-16'>
              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <div className='pt-5 bg-[#160d2b]'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    benefits
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start  card-heading mb-2 md:ml-10 padding-top'>
                        Flexibility
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 text-padding-space'>
                        Tailor our services to your needs, whether it’s complete
                        IT infrastructure management or specialized support.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Reduced Risk
                      </h3>

                      <p className='text-start  font-[400] text-[18px] leading-[150%] md:ml-10 text-padding-space'>
                        With 24/7 monitoring and robust security, we help
                        safeguard your business.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Operational Efficiency
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 text-padding-space'>
                        Proactive management ensures smoother operations.
                      </p>
                    </div>

                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Cost Effectiveness
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 text-padding-space'>
                        More affordable than building an in-house team with
                        toptier expertise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-5 mb-20'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    How It Works
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10 padding-top'>
                        Infrastructure Management
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 text-padding-space'>
                        Choose comprehensive support for servers, applications,
                        data storage, network infrastructure, cybersecurity,
                        business continuity and more.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Pick & Choose Option
                      </h3>

                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        Select individual services to fill specific gaps—such as
                        MDR for advanced threat detection or BCDR for business
                        continuity planning.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        24/7 Monitoring
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        All managed services include continuous monitoring to
                        detect and address issues before they impact your
                        business.
                      </p>
                    </div>

                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Business Scalable Support
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        As your business evolves, our services adapt to meet new
                        challenges and opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {name == 'specializedservice' && (
          <>
            <section
              className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 flex flex-col'
              style={{
                backgroundImage: `url("/images/Hero_Stack.jpg")`
              }}
            >
              {/* Overlay layer */}
              <div className='absolute inset-0 opacity-50 z-0' />

              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <h2 className='mt-20 heading-title text-center font-heading mb-12 '>
                  Specialized Service
                </h2>

                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Card 1 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                    <h3 className='text-start card-heading mb-2 md:ml-10'>
                      Overview
                    </h3>
                    <p className='font-[400] text-[18px] leading-[150%] text-start md:ml-10'>
                      Our Specialized Services offer deep expertise for
                      businesses with unique or advanced IT needs. From
                      consulting to digital forensics, we deliver tailored
                      solutions to tackle complex challenges and drive
                      innovation.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                    <h3 className='text-start card-heading mb-2 md:ml-10'>
                      What it is
                    </h3>

                    <p className='text-start md:ml-10 font-[400] text-[18px] leading-[150%]'>
                      Specialized Services are focused, expert-led solutions
                      that address specific needs beyond typical IT support.
                      These services include consulting, assessments, testing,
                      auditing, forensic investigation, and custom-built
                      decision support systems.
                    </p>
                  </div>

                  {/* Card 3 with Image */}
                  <div className='md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow mb-15'>
                    <div className='flex-1 md:ml-10'>
                      <h3 className='text-start md:ml-10 card-heading mb-2'>
                        Why It matters ?
                      </h3>
                      <p className='text-start md:ml-10 font-[400] text-[18px] leading-[150%]'>
                        In today’s landscape, certain challenges require
                        advanced skills and knowledge. Specialized Services
                        bring in the expertise necessary for critical projects,
                        complex problem solving, and strategic decision-making,
                        allowing you to stay ahead in a competitive market.
                      </p>
                    </div>
                    <div className='custome-shadow'>
                      <Image
                        src='/images/Specialized_Service.jpg'
                        alt='AI Chip'
                        className='rounded-xl'
                        width={467}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='text-white px-6 py-16'>
              <div className='max-w-6xl mx-auto text-center space-y-12'>
                <div className='pt-5 bg-[#160d2b]'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    benefits
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start  card-heading mb-2 md:ml-10'>
                        Strategic Alignment
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 '>
                        Consulting and custom solutions ensure your IT
                        investments align with your business goals.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Security and Compliance
                      </h3>

                      <p className='text-start  font-[400] text-[18px] leading-[150%] md:ml-10'>
                        Audits and assessments help you meet industry standards
                        and reduce risks.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Smart Decision Making
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        Decision support systems empower you with datadriven
                        insights.
                      </p>
                    </div>

                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Problem Resolution
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        Get to the root of issues, providing clarity and
                        actionable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-5 mb-20'>
                  <h2 className='heading-title text-center font-heading mb-12 uppercase'>
                    How It Works
                  </h2>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Consulting
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10 '>
                        Whether you’re looking to develop IT policies, conduct
                        risk assessments, or enhance your IT governance, we
                        provide expert guidance to help align your technology
                        with industry best practices and regulatory
                        requirements.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Assessment & Auditing
                      </h3>

                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        In-depth evaluations to uncover vulnerabilities, ensure
                        compliance, and benchmark against industry standards.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Professional Service
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        Project-based support, from systems integration to data
                        migration.
                      </p>
                    </div>

                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Forensic Investigation
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        When issues arise, we conduct forensic analysis to
                        identify and resolve underlying problems.
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-8 pt-10'>
                    {/* Card 1 */}
                    <div className='bg-[#160d2b] p-6 rounded-2xl shadow-lg border border-[#292280] custome-shadow  '>
                      <h3 className='text-start card-heading mb-2 md:ml-10'>
                        Custom Support System
                      </h3>
                      <p className='text-start font-[400] text-[18px] leading-[150%] md:ml-10'>
                        We develop tailored systems that provide insights to
                        drive smarter business decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  )
}
export default Itasaservice
