import Image from 'next/image'
import Hero from './component/widgets/Hero'
import CoreTracks from '@/app/component/widgets/CoreTracks'
import SpecializedTracks from './component/widgets/SpecializedTracks'
import ProgramOutcome from './component/widgets/ProgramOutcome'
import Footer from './component/layout/Footer'

export default function Home() {
  return (
       <div>
        <Hero/>
        <CoreTracks/>
        <SpecializedTracks/>
        <ProgramOutcome/>
        <Footer/>
       </div>
     )
}
