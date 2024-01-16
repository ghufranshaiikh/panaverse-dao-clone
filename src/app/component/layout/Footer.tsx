import Link from "next/link"
import Wrapper from "../shared/Wrapper"
Link

const Compulsorydata =[
  "  Quarter 1 : CS-101: Object-Oriented Programming using TypeScript" , "Quarter 2 : W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" , "Quarter 3 : $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
]

const Specializationdata = [
    "Web 3.0 and Metaverse", "Artificial Intelligence (AI) and Deep Learning" , "Cloud-Native Computing" , "Ambient Computing and IoT" , "Genomics and Bioinformatics" ,"Network Programmability and Automation"
]



const Footer = () => {
  return (
    <footer className="mt-16 md:mt-28 bg-gray-200 ">
        <Wrapper>
            <div className="py-20 grid grid-cols-1 md:grid-cols-3 m-auto gap-16">
                {/* Compulsory quarter */}
              <div>
                <h2 className="text-2xl font-semibold my-3">Compulsory Quarters</h2>
                <Link className="my-3 cursor-pointer" href="#">
                    {
                        Compulsorydata.map((item,i)=>(
                            <h3 key={i} className="truncate ... text-zinc-500 hover:text-zinc2 hover:scale-[1.02] transition-all duration-500">
                             {item}
                            </h3>
                        ))
                    }
             
                </Link>
              </div>
              {/* Specialization Tracks */}
              <div className="my-3">
               <h3 className="text-2xl font-semibold">Specialization Tracks</h3>
               <Link className="my-3 cursor-pointer" href="#">
                    {
                        Specializationdata.map((item ,i)=>(
                            <h3 key={i} className=" text-zinc-500 hover:text-zinc2 hover:scale-[1.02] transition-all duration-500">
                             {item}
                            </h3>
                        ))
                    }
             
                </Link>
              </div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold">Social Links</h2>
                <div className="my-3 flex gap-x-3">
                <Link target="blank" className="cursor-pointer hover:scale-110 transition-all duration-500" href="https://www.facebook.com/groups/panaverse">
                <svg width="40" height="40" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M197.503 98.7874C197.503 148.679 160.531 189.926 112.501 196.62C108.01 197.243 103.415 197.568 98.7514 197.568C93.3678 197.568 88.0812 197.139 82.9329 196.308C35.9134 188.736 0 147.953 0 98.7874C0 44.23 44.217 0 98.7583 0C153.3 0 197.517 44.23 197.517 98.7874H197.503Z" fill="url(#paint0_linear_1_326)"></path><path d="M107.173 73.5051V86.3348H122.996L120.49 103.617H107.173V143.435C104.503 143.806 101.771 144 98.9979 144C95.7971 144 92.6539 143.744 89.593 143.249V103.617H75V86.3348H89.593V70.6372C89.593 60.8984 97.4634 53 107.177 53V53.0083C107.206 53.0083 107.23 53 107.259 53H123V67.9466H112.715C109.658 67.9466 107.177 70.4349 107.177 73.501L107.173 73.5051Z" fill="white"></path><defs><linearGradient id="paint0_linear_1_326" x1="98.7583" y1="0" x2="98.7583" y2="197.568" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4C89" stop-opacity="0.99"></stop><stop offset="1" stop-color="#D46A8E" stop-opacity="0.87"></stop></linearGradient></defs></svg>
                </Link>
                <Link target="_blank" className="cursor-pointer hover:scale-105 transition-all duration-500" href="https://twitter.com/Panaverse_edu">
                <svg width="40" height="40" viewBox="0 0 198 199" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M197.495 99.76C197.495 149.652 160.523 190.899 112.493 197.592C108.003 198.215 103.408 198.54 98.744 198.54C93.3604 198.54 88.0738 198.111 82.9255 197.281C35.906 189.708 -0.00738525 148.925 -0.00738525 99.76C-0.00738525 45.2026 44.2096 0.972595 98.7509 0.972595C153.292 0.972595 197.509 45.2026 197.509 99.76H197.495Z" fill="url(#paint0_linear_1_326)"></path><path d="M60.19 63L90.6908 103.791L60 136.957H66.9093L93.7817 107.921L115.492 136.957H139L106.785 93.8714L135.353 63H128.444L103.698 89.7413L83.7028 63H60.1946H60.19ZM70.3476 68.0896H81.1448L128.833 131.867H118.036L70.3476 68.0896Z" fill="white"></path><defs><linearGradient id="paint0_linear_1_326" x1="98.7509" y1="0.972595" x2="98.7509" y2="198.54" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4C89"></stop><stop offset="1" stop-color="#D46A8E"></stop></linearGradient></defs></svg>
                </Link>
                <Link target="_blank" className="cursor-pointer hover:scale-105 transition-all duration-500" href="https://www.youtube.com/@panaverse/streams">
                <svg width="40" height="40" viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M196.949 98.5036C196.949 44.1016 152.861 0 98.4746 0C44.0886 0 0 44.1016 0 98.5036C0 152.906 44.0886 197.007 98.4746 197.007C152.861 197.007 196.949 152.906 196.949 98.5036Z" fill="url(#paint0_linear_1_326)"></path><path d="M146.173 82.9609C145.578 77.2638 144.295 70.966 139.577 67.6564C135.922 65.0898 131.118 64.9949 126.634 65.0002C117.154 65.0002 107.669 65.016 98.1887 65.0213C89.0705 65.0318 79.9523 65.0371 70.8342 65.0476C67.0252 65.0476 63.3226 64.7578 59.7849 66.3915C56.7473 67.7934 54.3694 70.4601 52.9384 73.4272C50.9541 77.5537 50.5391 82.2283 50.2997 86.7923C49.8582 95.1033 49.9061 103.435 50.4327 111.741C50.8211 117.802 51.8052 124.5 56.5345 128.363C60.7266 131.784 66.6422 131.952 72.079 131.957C89.3365 131.973 106.599 131.989 123.862 132C126.075 132.005 128.384 131.963 130.64 131.72C135.076 131.246 139.305 129.986 142.157 126.729C145.035 123.446 145.774 118.877 146.211 114.55C147.275 104.052 147.264 93.4537 146.173 82.9609ZM88.2087 113.217V83.783L113.935 98.4972L88.2087 113.217Z" fill="white"></path><defs><linearGradient id="paint0_linear_1_326" x1="98.4745" y1="0" x2="98.4745" y2="197.007" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4C89"></stop><stop offset="1" stop-color="#D46A8E"></stop></linearGradient></defs></svg>
                </Link>
                <Link target="_blank" className="cursor-pointer hover:scale-105 transition-all duration-500" href="https://github.com/panaverse"><svg width="40" height="40" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.9797 0H98.5299C44.1133 0 0 44.1264 0 98.559V99.0089C0 153.442 44.1133 197.568 98.5299 197.568H98.9797C153.396 197.568 197.51 153.442 197.51 99.0089V98.559C197.51 44.1264 153.396 0 98.9797 0Z" fill="url(#paint0_linear_1_326)"></path><path d="M99 52.188C72.48 52.188 51 73.68 51 100.188C51 121.4 64.752 139.388 83.82 145.728C86.22 146.18 87.1 144.696 87.1 143.42C87.1 142.28 87.06 139.26 87.04 135.26C73.688 138.156 70.872 128.82 70.872 128.82C68.688 123.28 65.532 121.8 65.532 121.8C61.184 118.824 65.868 118.884 65.868 118.884C70.688 119.22 73.22 123.828 73.22 123.828C77.5 131.168 84.456 129.048 87.2 127.82C87.632 124.716 88.868 122.6 90.24 121.4C79.58 120.2 68.376 116.072 68.376 97.68C68.376 92.44 70.236 88.16 73.316 84.8C72.776 83.588 71.156 78.708 73.736 72.096C73.736 72.096 77.756 70.808 86.936 77.016C90.776 75.948 94.856 75.42 98.936 75.396C103.016 75.42 107.096 75.948 110.936 77.016C120.056 70.808 124.076 72.096 124.076 72.096C126.656 78.708 125.036 83.588 124.556 84.8C127.616 88.16 129.476 92.44 129.476 97.68C129.476 116.12 118.256 120.18 107.576 121.36C109.256 122.8 110.816 125.744 110.816 130.24C110.816 136.664 110.756 141.824 110.756 143.384C110.756 144.644 111.596 146.144 114.056 145.664C133.26 139.368 147 121.368 147 100.188C147 73.68 125.508 52.188 99 52.188Z" fill="white"></path><defs><linearGradient id="paint0_linear_1_326" x1="98.7548" y1="0" x2="98.7548" y2="197.568" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4C89"></stop><stop offset="1" stop-color="#D46A8E"></stop></linearGradient></defs></svg></Link>
                </div>
              </div>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer