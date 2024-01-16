import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import outcomeImage from "@/app/assests/background2.webp"


const outcomedata = [
    "Top 5 'Metaverse' jobs that will rule the future of tech industry",
    "Blockchain Developer Salary - Jun 2022",
    "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
    "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters",
    "How To Become Metaverse Developer: Scope, Skills, and Salary"
]


const ProgramOutcome = () => {
  return (
     <section>
        <Wrapper>
            <div className="mt-32 flex items-center flex-col-reverse md:flex-row ">
                {/* Image section  */}
                <div className="flex-1">
                  <Image src={outcomeImage} alt={"panaverse dao outcome section image"}/>  
                </div>
               {/* outcome text section */}
               <div className="flex-1">
                <h1 className="text-4xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8636d1] via-extraordinary to-[#e0698c] ">The Outcome for Participants of the Program</h1>

                 <p className="text-gray-600 mt-5">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports</p>

                 <div className="mt-10">

                     {
                        outcomedata.map((item,i)=>(
                            <div key={i} className="mt-5">
                             <p className="flex items-center gap-x-5"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-zinc" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg> {item}</p>
                            </div>
                        ))
                     }     
                       </div>
               </div>
               
            </div>
        </Wrapper>
     </section>
  )
}

export default ProgramOutcome;