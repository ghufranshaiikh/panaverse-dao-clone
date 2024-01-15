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
                            <h1 className="text-3xl md:text-5xl mt-4 sm:mt-2 font-extrabold leading-tight w-full bg-clip-text text-transparent bg-gradient-to-r from-[#8636d1] via-extraordinary to-[#e0698c] ">Certified Web 3.0 and Metaverse Developer</h1>
                            <h4 className="font-semibold text-sm md:text-lg sm:mt-5 text-zinc-500 ">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                            <div className="w-20 h-1 sm:h-2 bg-gradient-to-r from-[rgb(13,187,161)] to-[rgb(10,209,146)]"></div>
                            <p className="text-lg  mt-7 max-w-[90%]">First two quarters are compulsary for everyone and remaining two are the specialization in different domains </p>

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