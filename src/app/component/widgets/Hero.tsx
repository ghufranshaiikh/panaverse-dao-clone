import Wrapper from "@/app/component/shared/Wrapper"
import Image from "next/image"
import Heroposter from "@/app/assests/image.jpg"
import Btn from "@/app/component/shared/Btn"
import Link from "next/link"

const Hero = () => {
    return (
        <Wrapper>
            <section >
                <Wrapper>
                    <div className="flex  flex-col md:flex-row items-center gap-y-7">
                        {/* left side */}
                        <div className="flex-1 ">
                            <h4 className="font-semibold text-sm md:text-lg sm:mt-5 text-teal-800 ">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                            <h1 className="text-3xl md:text-5xl mt-4 sm:mt-2 font-extrabold leading-tight w-full ">Certified Web 3.0 and Metaverse Developer</h1>
                            <p className="text-lg text-slate-600 mt-7 max-w-[80%]">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet </p>

                              <p className="text-lg text-slate-600 mt-6 max-w-[80%]">  Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                              <div className="mt-6">
                                <Link href="#"><Btn text="Learn  More "/></Link>
                                
                                </div>
                                
                        </div>

                        {/* Right side */}
                        <div className="flex-1">
                            <Image className="w-[700px]" src={Heroposter} alt="panaverse hero poster" />

                        </div>




                    </div>
                </Wrapper>
            </section>
        </Wrapper>

    )
}

export default Hero