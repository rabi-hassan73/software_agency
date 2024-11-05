import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 border rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">&#x1F4CD;</span> {/* Location icon */}
            <p className="text-lg">
              Sindh Karachi
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">&#x1F4DE;</span> {/* Phone icon */}
            <p className="text-lg">+92 3131289017</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">&#x2709;</span> {/* Email icon */}
            <p className="text-lg">rabihasanshaikh3@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">&#x2709;</span> {/* Email icon */}
            <p className="text-lg">fazeelkarachi01@gmail.com</p>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="space-y-4 md:max-w-md">
          <h2 className="text-xl font-semibold">About the company</h2>
          <p className="text-gray-400">
          Cloud Tech is a leading software house specializing in innovative cloud solutions and modern application development. Our mission is to empower businesses with scalable, efficient, and state-of-the-art technology.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <FaFacebookF className="text-[#1877F2] hover:text-white" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-[#1DA1F2] hover:text-white" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedinIn className="text-[#0077B5] hover:text-white" />
            </Link>
            <Link href="https://github.com">
              <FaGithub className="text-gray-300 hover:text-white" />
            </Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
