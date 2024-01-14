import { FC } from "react"


interface iprops {
    number:number;
    paragarph:string;
    heading:string;
    haveborder?:boolean;
}

const QuarterBox:FC<iprops> = ({number,paragarph,heading,haveborder=true}) => {

  
  return (
           
             <div className={`border-gray-300 flex-1 px-3 py-8 flex items-center  rounded-3xl bg-[#6f6f6f16] hover:bg-[rgba(167,31,49,0.25)] hover:scale-90 transition-all cursor-pointer backdrop-blur-md overflow-hidden md:hover:scale-110 mx-auto relative ${haveborder && "border"}`}>
                            <div className="w-52 h-52 rotate-45 rounded-lg blur-2xl absolute right-0 bg-[rgba(212,106,141,0.3)] -z-10 ">

                            </div>
                 
            <div className="text-7xl  md:text-9xl w-[30%] md:w-[40%] font-black text-gray-400">
                 {number}
             </div>
             <div className="w-[70%] md:w-[60%]  ">
                 <div className="text-2xl font-extrabold text-black">
                     {heading}
                 </div>
                 <div className="mt-3 max-w-[90%] font-medium text-xs md:text-sm text-gray-900">
                     {paragarph}
                </div>
             </div>
          </div>
                  
       
    

  )
}

export default QuarterBox