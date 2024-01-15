 import web3image from "@/app/assests/wmd.webp"
 import aiimage from "@/app/assests/ai.webp"
 import cncimage from "@/app/assests/cnc.webp"
 import acimage from "@/app/assests/ac.webp"
 import bioimage from "@/app/assests/bio.webp"
 import npaimage from "@/app/assests/npa.webp"
 import Image from "next/image"
export const programsdata=[
    {
        slug: "wmd",
        heading:"Web 3.0 (Blockchain) and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: web3image,
        quarters:[
            {
                heading:"Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number:5,
            }
        ]

    },
    {
        slug: "Ai",
        heading:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
        image: aiimage,
        quarters:[
            {
                heading:"Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number:5,
            }
        ]

    },
    {  
        slug: "cnc",
        heading:"Cloud-Native Computing Specialization",
        description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: cncimage,
        quarters:[
            {
                heading:"Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number:5,
            }
        ]

    },
    {
        slug: "ac",
        heading:"Ambient Computing and IoT Specialization",
        description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: acimage,
        quarters:[
            {
                heading:"Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number:5,
            }
        ]

    },
    {
        slug: "bio",
        heading:"Genomics and Bioinformatics Specialization",
        description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: bioimage,
        quarters:[
            {
                heading:"Quarter IV",
                description: "Bio-351: Python for Biologists",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number:5,
            }
        ]

    },
    {  
        slug: "npa",
        heading:"Network Programmability and Automation Specialization",
        description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git",
        image: npaimage,
        quarters:[
            {
                heading:"Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number:4,
            },
            {
                heading:"Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number:5,
            }
        ]

    },
 ]

  
 
 const Specializedtrackdata = () => {
   return (
       <div>
        {
            programsdata.map((item)=>{
                return(
                    <div >
                    <div> 
                      <h3 className="text-teal-800 font-medium text-lg">Specialized Track</h3>
                    </div>
                    <div className="flex gap-x-4">
                        <Image className=" h-24 object-cover rounded-md " src={item.image} alt="images "/>
                      <h1 className="text-xl  font-semibold">{item.heading}</h1>

                      </div>
                      </div>
                )
            }
          
            )
        }
       </div>
   )
 }
 
 export default Specializedtrackdata;
 