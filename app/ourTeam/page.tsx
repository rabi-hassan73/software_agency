// OurTeam.tsx

import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Fazeel Ahmed",
    role: "Dev Ops",
    image: "/images/fazeel.png", // replace with actual image path
    description:
      "Fazeel specializes in maintaining and optimizing development workflows, ensuring seamless integration and deployment processes. His expertise in CI/CD pipelines helps improve productivity and software quality.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Rabi Hassan",
    role: "Software Engineer",
    image: "/images/HAssan2.png", // replace with actual image path
    description:
      "Rabi is a skilled software engineer focused on creating scalable, efficient web applications. With experience in both frontend and backend development, he brings innovative solutions to complex problems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Raaj Kumar",
    role: "Graphic Designer",
    image: "/images/graphic.webp", // replace with actual image path
    description:
      "Raaj creative designs enhance user experience by combining aesthetics with functionality. Her work in branding and digital graphics adds value and visual appeal to every project.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Shraddha",
    role: "Data Scientist",
    image: "/images/Data Scientist.jpeg", // replace with actual image path
    description:
      "Shraddha uses data-driven insights to help businesses make informed decisions. With expertise in data analysis and predictive modeling, she transforms raw data into valuable strategies.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Umar Alam",
    role: "Cloud Computing",
    image: "/images/Cloud Computing.jpg", 
    description:
      "Umar Alam is an expert in cloud infrastructure, leveraging AWS and Azure to build scalable, secure, and efficient solutions. Her focus on cloud computing empowers businesses with high availability and flexibility.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Mehboob Shar",
    role: "SEO Expert",
    image: "/images/SEO Expert.jpg", 
    description:
      "With a deep understanding of search engine algorithms, Mehboob Shar optimizes web content to improve visibility and rankings. Her strategies help clients reach their audience effectively and boost online presence.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  
];


const OurTeam = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      <section className="bg-gray-900 py-12">
        <div className="text-center mb-10">
          <p className="text-sm text-blue-400">
            We have the best equipment in the market
          </p>
          <h2 className="text-3xl font-bold text-white">
            Check our awesome team members
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                width={100}
                height={100}
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-blue-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
              <div className="flex justify-center space-x-4 mt-4 text-gray-400">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter hover:text-blue-500"></i>
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin hover:text-blue-500"></i>
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github hover:text-blue-500"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OurTeam;
