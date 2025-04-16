import Hero from './components/Hero/page'
import Business from './components/Business/page'
import HelpSection from './components/HelpSection/page'
import Management from './components/Management/page'
import Partnerships from './components/Partnerships/page'
import OurApproach from './components/OurApproach/page'
import ITManagement from './components/ITManagement/page'

export default function Home () {
  return (
    <>
      <div className='mt-20'>
        <Hero />
        <HelpSection />
        <Business />
        <Management />
        <Partnerships />
        <OurApproach />
        <ITManagement />
      </div>
    </>
  )
}
