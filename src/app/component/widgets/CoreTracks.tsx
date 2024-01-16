import Wrapper from "../shared/Wrapper"
import Btn from "../shared/Btn"
import QuarterBox from "../shared/QuarterBox"


const QuarterBoxdata=[
    {
      heading:"Quarter I",
      paragraph:"CS-101: Object-Oriented Programming using TypeScript",
      number: 1
     
    },
    {
      heading:"Quarter II",
      paragraph:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      number: 2
      
    },
    {
      heading:"Quarter III",
      paragraph:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      number: 3
      
    }
  ]
const CoreTracks = () => {
    return (
        <section className="mt-20 lg:mt-32">
            <Wrapper>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold "> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8636d1] via-extraordinary to-[#e0698c]">Compulsory</span> Courses </h2>
                    <h1 className="text-xl sm:2xl font-bold mt-3"> Core Courses
                        (Common in All Specializations)</h1>
                    <p className="text-lg text-slate-700  max-w-[80%]">Every participant of the program will start by completing the following three core courses.</p>
                    <div className="mt-7">
                        <Btn text="Enroll Now" />
                    </div>
                </div>
                 <div className="flex flex-1 flex-col md:flex-row my-20 gap-x-10  gap-y-6 mx-auto max-w-screen-xl">
                    {
                        QuarterBoxdata.map((item,i)=>
                               
                                    <QuarterBox 
                                    key={item.number}
                                     number={i+1}
                                     paragarph={item.paragraph}
                                     heading ={item.heading}/>
                               
                           

                        )
                    }
                    
                 </div>
             
            </Wrapper>
        </section>
    )
}

export default CoreTracks