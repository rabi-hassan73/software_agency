'use client'
import Image from "next/image";
import Link from "next/link";
import Testimonials from "./Testimonials";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      overflow-hidden
      p-10
      

    rounded-[6px]
    top-5
    sticky
    md:mx-auto

    transform 
    z-50
xl:w-5/6 
2xl:w-[68%]

   
    bg-white 
    flex 
    items-center
    justify-between py-3
    px-4
    md:px-4
    mx-6
    
    "
    >
      <Link href="/">
      <Image
        src="/logo/nexacloud.png"
        alt="Bird Logo"
        width={1000}
        height={1000}
        className="w-28"
      />
      </Link>

      <div className="absolute right translate-x-3/4 transform">
        <div className="hidden md:flex gap-x-4 2xl:gap-x-10 items-center text-gray-700 font-medium text-sm ">
          <Link
            href="/showcase"
            className="
          hover:text-blue-500
          "
          >
            Showcase
          </Link>
             <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
           Process
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Guarentees
          </Link>
           <Link
            href="/"
            className="hover:text-blue-500"
          >
            Why Choose Us
          </Link>
          <Link 
            href="/ourTeam"
            className="hover:text-blue-500"
          >
            Our Team
          </Link>
          <Link
            href={"/Testimonials"}
            className="hover:text-blue-500"
          >
            Testimonials
          </Link>
  
        </div>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;