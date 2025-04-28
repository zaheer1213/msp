import Hero from './components/Hero/page'
import HelpSection from './components/HelpSection/page'
import Partnerships from './components/Partnerships/page'
import OurApproach from './components/OurApproach/page'
import Testimonials from './components/Testimonials/page'
import Popup from './components/Popup/page'

export default function Home () {
  return (
    <>
      <div className='mt-20 overflow-x-hidden md:overflow-x-visible'>
        <Hero />
        <HelpSection />
        <Partnerships />
        <OurApproach />
        <Testimonials />
        <Popup />
      </div>
    </>
  )
}
