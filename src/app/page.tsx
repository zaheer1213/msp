import Hero from './components/Hero/page'
import HelpSection from './components/HelpSection/page'
import Partnerships from './components/Partnerships/page'
import OurApproach from './components/OurApproach/page'

export default function Home () {
  return (
    <>
      <div className='mt-20 overflow-x-hidden md:overflow-x-visible'>
        <Hero />
        <HelpSection />
        <OurApproach />
        <Partnerships />
      </div>
    </>
  )
}
