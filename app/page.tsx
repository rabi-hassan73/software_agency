'use client'

// app/page.tsx

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { motion } from "framer-motion";
import Head from "next/head";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services.",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services.",
  },
  {
    icon: "/images/s_cloud.png",
    title: "Cloud Infrastructure & Microservices",
    description:
      "Leverage the power of cloud technologies and microservices architecture to build scalable, secure, and reliable applications. We specialize in AWS, Azure, Docker, Kubernetes, Kafka, and more.",
  },
  {
    icon: "/images/s_3_3.png",
    title: "Modern Application Development",
    description:
      "Build modern applications that leverage serverless best practices, simplifying operations, accelerating releases, and ensuring security and high availability.",
  },
  {
    icon: "/images/s_4_4.png",
    title: "Serverless Readiness Assessment",
    description:
      "Determine your organization's serverless maturity to gauge readiness for adopting serverless technologies.",
  },
  {
    icon: "/images/s_2_2.png",
    title: "Serverless Data Analytics",
    description:
      "Implement a cost-effective serverless solution for high-performance SQL queries, real-time visualizations, and powerful reporting without unnecessary data transfers.",
  },
  {
    icon: "/images/s_aws.png",
    title: "AWS Solutions",
    description:
      "Architect and deploy scalable applications using AWS services such as EC2, Lambda, S3, RDS, ensuring cost optimization and security.",
  },
  {
    icon: "/images/s_azure.png",
    title: "Azure Cloud Services",
    description:
      "Streamline operations with Microsoft Azure solutions like AKS, Virtual Machines, and Azure Functions for high availability.",
  },
  {
    icon: "/images/s_docker.png",
    title: "Containerization with Docker",
    description:
      "Containerize applications using Docker for consistent deployment across environments and smooth CI/CD pipelines.",
  },
  {
    icon: "/images/s_kubernetes.png",
    title: "Orchestration with Kubernetes",
    description:
      "Deploy, scale, and manage containerized applications using Kubernetes on AWS (EKS), Azure (AKS), or on-premise.",
  },
  {
    icon: "/images/s_kafka.png",
    title: "Event Streaming with Kafka",
    description:
      "Implement real-time, scalable data pipelines and streaming applications using Apache Kafka for real-time analytics.",
  },
  {
    icon: "/images/s_cicd.png",
    title: "CI/CD Integration",
    description:
      "Optimize your development pipeline with CI/CD solutions like Jenkins, GitLab CI, or CircleCI for faster and reliable software delivery.",
  },
];




export default function Home() {
  return (
    <div>
      <Head>
        <title>Bird | Home</title>
        <meta 
          name="description" 
          content="Welcome to Bird, your design & development studio. We specialize in creating modern applications and providing cloud services." 
        />
        <meta 
          name="keywords" 
          content="web design, SEO, cloud services, microservices, modern applications" 
        />
      </Head>

      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Element
          name="top"
          className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-3 px-4 md:px-8 mx-6"
        >
          <Link href={"/"}>
            <Image
              src={"/logo/Cloud-Tech.png"}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-28"
            />
          </Link>
          <div className="absolute right-1/2 translate-x-1/2 transform">
            <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
              <Link href={"/showcase"} className="hover:text-blue-500">
                Showcase
              </Link>
              <ScrollLink to="services" smooth={true} className="hover:text-blue-500">
                Services
              </ScrollLink>
              <ScrollLink to="process" smooth={true} className="hover:text-blue-500">
                Process
              </ScrollLink>
              <ScrollLink to="guarentees" smooth={true} className="hover:text-blue-500">
                Guarentees
              </ScrollLink>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <a href="tel:0313-22222" className="hidden lg:flex">
              {/* <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
                (0313)-22-222
              </button> */}
            </a>
            <Link 
              href={"/contact"}
              className="md:px-6 md:py-3 px-3 py-2 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Contact
            </Link>
          </div>
        </Element>

        <main className="md:pb-6">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo/>
          
          <h1>
          <CoverDemo/>
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"> 
              Schedule a call with us to discuss your project and get a quote in minutes
          </p>

          <div
            className="
                 flex 
                  justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-4 
              md:py-3
            px-10
            md:px-16
      md:text-xl
      text-xs
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
              py-3 
              px-10
              md:px-16
              md:text-xl
              border-4
            border-black
            rounded-[6px]
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                  <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                      <PiCheckBold className="text-xl text-blue-500" />
                      Design
                  </p>
                </BoxReveal>  <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                  <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                      <PiCheckBold className="text-xl text-blue-500" />
                      Development
                  </p>
                </BoxReveal>  <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                  <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                      <PiCheckBold className="text-xl text-blue-500" />
                      Marketing
                  </p>
                </BoxReveal>  <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                  <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                      <PiCheckBold className="text-xl text-blue-500" />
                      Strategy
                  </p>
                </BoxReveal>
          </div>
          
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
              <div className="md:w-2/5">
                  <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                      Trusted by fast moving brands worldwide
                  </h1>

                  <div className="flex my-6 gap-x-5 w-full">
                      <div>
                          <h1 className="text-blue-500 text-3xl md:text-5xl">
                              <NumberTicker value={1000}/> +
                              <p className="text-gray-500 text-sm md:text-md">Happy Clients</p>
                          </h1>
                      </div>

                      <div className="w-px bg-gray-300 self-stretch"></div>

                      <div className="flex-1 min-w-0">
                          <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                              <NumberTicker value={100}/> +
                              <p className="text-gray-500 text-sm md:text-md">Projects Completed</p>
                          </h1>
                      </div>
                  </div>
           
              </div>
              <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
              speed="slow"
              direction="left"
              items={[
                {
                  logo: "/logo/CLoud-Tech-Services.png",
                  name: "Logo"
                },
                {
                  logo: "/logo/CLoud-Tech-Services.png",
                  name: "Logo"
                }
              ]}/>
              </section>
          </div>
        
          </div>
        </main>

        <Element name="services">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
             <h1>
             <WordPullUpDemo/>  
            </h1>   
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
                All of our services are designed to help your business stand out
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service, index) => (
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
                key={index}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                key={index}
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          </div>

        </Element>  

        <section className="py-20">
            <ScrollBasedVelocityDemo/>
        </section>

        <Element name="process">
          <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}  
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>
          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                    <AnimatedBeamMultipleOutputDemo/>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                  <BoxRevealDemo/>
              </div>
          </div>

          </main>
        </Element>

        <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/review.jpg"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with CLoud Tech for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
          <ShootingStarsAndStarsBackgroundDemo/>
      </Element>

      <section className="my-10 md:my-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
            <LetsMakeThingsHappenSection/>
      </section>

      <footer className="bg-[#fafafa] py-10 px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/Cloud-Tech.png"}
              width={10000}
              height={10000}
              className="w-40"  
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">+92 3131289017</p>
          <p className="text-left  text-xl  text-gray-500">
            rabihasanshaikh3@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Cloud Tech. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
      
      </div>

      </div>
  
  );
}
