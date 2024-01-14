import { FC } from "react"


const Btn:FC<{text:string}> = ({text}) => {
  return (
      <button className="bg-[#D46A83] px-5 sm:px-9 py-2 sm:py-4 rounded-full  text-white font-medium sm:font-bold text-lg sm:text-xl hover:shadow-xl hover:scale-105 duration-200 ">
        {text} 
      </button>
  )
}

export default Btn