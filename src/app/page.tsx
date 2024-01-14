import Image from 'next/image'
import Hero from './component/widgets/Hero'
import CoreTracks from '@/app/component/widgets/CoreTracks'
import SpecializedTracks from './component/widgets/SpecializedTracks'

export default function Home() {
  return (
       <div>
        <Hero/>
        <CoreTracks/>
        <SpecializedTracks/>
       </div>
     )
}
