
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";
import Specializedtrackdata from "@/app/component/shared/Specializedtrackdata";
import { programsdata } from "@/app/component/shared/Specializedtrackdata";
import Image from "next/image";


const SpecializedTracks = () => {
    return (
        <section>
            <Wrapper>
              <div className="">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Specialized Tracks:</h1>
                    <p className="text-sm md:text-lg text-slate-600 mt-3 w-[80%] md:w-2/4 ">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>
                   {/* content left */}
                <div className="mt-10 flex gap-x-5 flex-col lg:flex-row md:flex-1 md:flex-col">
                    <div className="border border-slate-300 rounded-xl px-8 py-8 basis-6/12 md:basis-8/12 shadow-xl ">
                        <h4 className="text-[#00616c] font-semibold text-lg">Specialized Track</h4>
                        <h1 className="text-3xl font-bold mt-2 w-3/4">Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                        <p className="text-slate-600 mt-3">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
                         <button className="mt-5 border py-3 px-6 rounded-lg border-[#00616c] text-[#00616c] text-lg font-semibold hover:bg-gray-200 hover:scale-110 transition-all flex gap-x-1 items-center">
                            Learn More <span className="w-5 ">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#00616c]" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                            </span>
                         </button>
                         <div className="flex gap-x-10 mt-5 flex-1 flex-col md:flex-row gap-y-7">
                            <QuarterBox 
                             number={4}
                             paragarph="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                             heading="Quarter IV"
                              haveborder={false}

                            />
                            <QuarterBox 
                             number={5}
                             paragarph="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                             heading="Quarter V"
                             haveborder={false}
                            />
                         </div>  
                    </div>
                     {/* content right */}
                    <div className="px-2  space-y-4 basis-6/12 md:basis-4/12 mt-10 lg:mt-0 ">
                    {
                        programsdata.map((item,i)=>{
                            return (
                                   <div>
                                    <div key={i} className="flex gap-x-4 items-center  cursor-pointer">
                                    <div className="w-[50%] md:w-[40%]" >
                                        <Image className={" h-24 w-52 object-cover rounded-md "} src={item.image} alt="images " />
                                    </div>
                                    <div className="w-[50%] md:w-[60%]">
                                        <h3 className="text-teal-800 font-medium text-sm md:text-lg">Specialized Track</h3>
                                        <h1 className="text-sm sm:text-base   font-semibold mt-1 ">{item.heading}</h1>

                                    </div>
                                    </div>
                                    <div className="w-full border-b border-slate-200 mt-5 mb-5"></div>
                                    </div>
                                    
                              
                            );
                        }
                        )
                    }

                    </div>
                </div>
              </div>
            </Wrapper>
        </section>
    )
}

export default SpecializedTracks;