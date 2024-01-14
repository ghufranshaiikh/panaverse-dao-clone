import Image from "next/image"
import Logo from "../../../../public/panaversedaologo.png"
import Link from "next/link"
import Wrapper from "@/app/component/shared/Wrapper"
const Header = () => {
  return (
   <header className="sticky top-0 z-10 backdrop-blur-xl  bg-[#ffffff9d] ">
      <div className="  "></div>
       <Wrapper>
     <div className="flex justify-between items-center   py-5 ">
        <div>
           <Image className="  w-20 sm:w-28" src={Logo} alt="panaverse dao logo"/> 
        </div>
        <ul className="flex space-x-3 sm:space-x-10 font-medium  sm:font-semibold mr-4 sm:mr-8 ">
            <li><Link href="/">Home</Link> </li>
              <li><Link href="/Courses">Courses</Link></li>
        </ul>
     </div>
     </Wrapper>
     </header>
  )
}

export default Header