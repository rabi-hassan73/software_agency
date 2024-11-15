"use client";

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
import Footer from "@/components/footer";
import WhyChooseUs from "@/components/whychooseus";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design & Development",
    description:
      "Elevate your business with custom-designed websites that are fast, responsive, and built to impress. Our team ensures a seamless user experience tailored to your brand.",
  },
  {
    icon: "/images/s_3.png",
    title: "Scalable Web Solutions",
    description:
      "Develop robust websites and applications that grow with your audience. We specialize in creating scalable digital solutions that ensure reliability as your traffic increases.",
  },
  {
    icon: "/images/s_software.png",
    title: "Software & Mobile Applications",
    description:
      "Bring your ideas to life with tailored software and mobile app development. We create high-quality, cross-platform applications that meet your unique requirements.",
  },
  {
    icon: "/images/s_graphic.png",
    title: "Graphic Design",
    description:
      "Enhance your brand with our graphic design services, from logos to complete visual identities. We craft designs that capture attention and leave a lasting impact.",
  },
  {
    icon: "/images/s_cloud.png",
    title: "Cloud & Serverless Solutions",
    description:
      "Harness the power of cloud infrastructure with our expert services in AWS, Azure, and serverless architecture. We design scalable, secure solutions that meet modern demands.",
  },
  {
    icon: "/images/s_cicd.png",
    title: "Advanced DevOps & CI/CD",
    description:
      "Optimize your development and deployment processes with DevOps practices and CI/CD integration, using tools like Jenkins, Docker, and Kubernetes for smooth delivery.",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>CloudTech | Home</title>
        <meta
          name="description"
          content="Welcome to nexacloud, your design & development studio. We specialize in creating modern applications and providing cloud services."
        />
        <meta
          name="keywords"
          content="web design, SEO, cloud services, microservices, modern applications, nexacloud, nextcloud"
        />
      </Head>

      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Element
          name="top"
          className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-5/6 2xl:w-[68%] bg-white flex items-center justify-between py-3 px-4 md:px-4 mx-6"
        >
          <Link href={"/"}>
            <Image
              src={"/logo/nexacloud.png"}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-28"
            />
          </Link>
          <div className="absolute right translate-x-3/4 transform">
            <div className="hidden md:flex gap-x-5 items-center text-gray-700 font-medium text-sm cursor-pointer">
              <Link href={"/showcase"} className="hover:text-blue-500">
                Showcase
              </Link>
              <ScrollLink
                to="services"
                smooth={true}
                className="hover:text-blue-500"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="process"
                smooth={true}
                className="hover:text-blue-500"
              >
                Process
              </ScrollLink>
              <ScrollLink
                to="guarentees"
                smooth={true}
                className="hover:text-blue-500"
              >
                Guarentees
              </ScrollLink>
              <ScrollLink
                to="WhyChooseUs"
                smooth={true}
                className="hover:text-blue-500"
              >
                Why Choose Us
              </ScrollLink>
              <Link href={"/ourTeam"} className="hover:text-blue-500">
                Our Team
              </Link>
              <Link href={"/Testimonials"} className="hover:text-blue-500">
                Testimonials
              </Link>
            </div>
          </div>
        </Element>

        <main className="md:pb-6">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
            <AnimatedShinyTextDemo />

            <h1>
              <CoverDemo />
            </h1>
            <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
              Schedule a call with us to discuss your project and get a quote in
              minutes
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
      hover:bg-sky-800 
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
                href={"/contact"}
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
                Contact
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Design
                </p>
              </BoxReveal>{" "}
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Development
                </p>
              </BoxReveal>{" "}
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Marketing
                </p>
              </BoxReveal>{" "}
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
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
                      <NumberTicker value={1000} /> +
                      <p className="text-gray-500 text-sm md:text-md">
                        Happy Clients
                      </p>
                    </h1>
                  </div>

                  <div className="w-px bg-gray-300 self-stretch"></div>

                  <div className="flex-1 min-w-0">
                    <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                      <NumberTicker value={100} /> +
                      <p className="text-gray-500 text-sm md:text-md">
                        Projects Completed
                      </p>
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
                      logo: "/logo/nexacloud.png",
                      name: "Logo",
                    },
                    {
                      logo: "/logo/nexacloud.png",
                      name: "Logo",
                    },
                  ]}
                />
              </section>
            </div>
          </div>
        </main>

        <Element name="services">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
            <h1>
              <WordPullUpDemo />
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
          <ScrollBasedVelocityDemo />
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
            <p
              className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
            >
              All of our services are designed to help your business to get
              noticed.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <AnimatedBeamMultipleOutputDemo />
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                <BoxRevealDemo />
              </div>
            </div>
          </main>
        </Element>

        <Element name="WhyChooseUs">
          <WhyChooseUs />
        
        </Element>

        <Element name="guarentees">
          <ShootingStarsAndStarsBackgroundDemo />
        </Element>

        <section className="my-10 md:my-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <LetsMakeThingsHappenSection />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
