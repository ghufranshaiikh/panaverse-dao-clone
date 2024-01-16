"use client"
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";
import { programsdata } from "@/app/component/shared/Specializedtrackdata";
import Image from "next/image";
import { useState } from "react";


const SpecializedTracks = () => {

      const [slectedItem , setSlectedItem] = useState("wmd")
       const SlectedItemData = programsdata.find((item)=>item.slug===slectedItem)

    return (
        <section>
            <Wrapper>
              <div className="">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8636d1] via-extraordinary to-[#e0698c] ">Specialized</span> Tracks:</h1>
                    <p className="text-sm md:text-lg text-slate-600 mt-3 w-[80%] md:w-2/4 ">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>
                <div className="mt-10 flex gap-x-5 flex-col-reverse lg:flex-row md:flex-1 md:flex-col">
                   {/* content left */}
                    <div className="border sticky  top-24 border-slate-300 rounded-xl px-8 py-8 basis-6/12 md:basis-8/12 shadow-xl self-start ">
                        <h4 className="text-[#00616c] font-semibold text-lg">Specialized Track</h4>
                        <h1 className="text-3xl font-bold mt-2 w-3/4">{SlectedItemData?.heading}</h1>
                        <p className="text-slate-600 mt-3">{SlectedItemData?.description}</p>
                         <button className="mt-5 border py-3 px-6 rounded-lg border-[#00616c] text-[#00616c] text-lg font-semibold hover:bg-gray-200 hover:scale-110 transition-all flex gap-x-1 items-center">
                            Learn More <span className="w-5 ">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#00616c]" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                            </span>
                         </button>
                         <div className="flex gap-x-10 mt-7  flex-1 flex-col md:flex-row gap-y-7">

                            {
                                SlectedItemData?.quarters.map((item)=>(
                                    <QuarterBox 
                                    key={item.number}
                                    number={item.number}
                                    paragarph={item.description}
                                    heading={item.heading}
                                     haveborder={false}
       
                                   />

                                ))
                            }
                         
                    
                         </div>  
                    </div>
                     {/* content right */}
                    <div className="px-2  space-y-4 basis-6/12 md:basis-4/12 mt-10 lg:mt-0 ">
                    {
                        programsdata.map((item)=>{
                            return (
                                   <div key={item.slug}>
                                    <div onClick={()=>setSlectedItem(item.slug)}  className="flex gap-x-4 items-center  cursor-pointer">
                                    <div className="flex-shrink-0 h-24 w-36" >
                                        <Image className={" h-24 w-36 object-cover rounded-md "} src={item.image} alt="images " />
                                    </div>
                                    <div>
                                        <h3 className="text-teal-800 font-bold text-xs md:text-lg">Specialized Track</h3>
                                        <h1 className="text-sm sm:text-lg font-bold mt-1 ">{item.heading}</h1>

                                    </div>
                                    </div>
                                    <div className="w-full border-b border-slate-200 mt-10 mb-10"></div>
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