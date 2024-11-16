"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

const ShowcaseNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="
        overflow-hidden
        p-6
        rounded-[6px]
        top-5
        md:mx-auto
        z-50
        xl:w-5/6 
        2xl:w-[68%]
        bg-white
        flex
        items-center
        justify-between
        shadow-md
        px-4
        py-3
        mx-6
      "
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo/nexacloud.png"
          alt="NexaCloud Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-x-6 2xl:gap-x-10 items-center text-gray-700 font-medium text-sm">
        <Link href="/showcase" className="hover:text-blue-500">
          Showcase
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Process
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Guarantees
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Why Choose Us
        </Link>
        <Link href="/ourTeam" className="hover:text-blue-500">
          Our Team
        </Link>
        <Link href="/Testimonials" className="hover:text-blue-500">
          Testimonials
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <FaBarsStaggered
          className="text-gray-700 text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-50">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium text-sm">
            {/* Show all menu items */}
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/showcase" className="hover:text-blue-500">
              Showcase
            </Link>
            <Link href="/ourTeam" className="hover:text-blue-500">
              Our Team
            </Link>
            <Link href="/Testimonials" className="hover:text-blue-500">
              Testimonials
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ShowcaseNavbar;
