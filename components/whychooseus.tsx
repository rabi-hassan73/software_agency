import { useState } from "react";

const whyChooseUsData = [
  {
    title: "Why choose us for web development?",
    description: "Our team of expert developers builds customized, high-performance websites that align with your business goals. We focus on delivering scalable, responsive, and user-friendly websites.",
  },
  {
    title: "How do we ensure scalable website solutions?",
    description: "We design websites with scalability in mind, allowing your platform to grow seamlessly with your business. Our solutions are built to handle high traffic, ensuring reliable performance at any scale.",
  },
  {
    title: "Why trust us with software builds?",
    description: "Our team specializes in end-to-end software development, from concept to deployment. We create reliable, secure, and efficient software solutions tailored to meet the specific needs of your business.",
  },
  {
    title: "How can we help with mobile applications?",
    description: "We develop mobile applications with a user-centered approach, focusing on intuitive design and smooth functionality. Whether for iOS, Android, or cross-platform, our apps are built for optimal performance.",
  },
  {
    title: "What sets us apart in graphic design?",
    description: "Our graphic design team crafts visually compelling designs that enhance your brand identity. We focus on creating designs that are not only visually appealing but also strategically aligned with your brand message.",
  },
  {
    title: "Why choose our cloud services?",
    description: "Our cloud solutions provide flexibility, security, and efficiency for your business. We specialize in cloud infrastructure and microservices, ensuring your applications are scalable, resilient, and future-ready.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us</h2>
        <p className="text-gray-400 mb-8 text-center">
          We provide specialized services to help your business thrive in the digital landscape. Here’s why we’re the right choice for your needs.
        </p>

        <div className="space-y-6">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleOpen(index)}
              >
                <h3 className="text-lg font-semibold text-green-400">{item.title}</h3>
                <span className={`transform transition-transform ${openIndex === index ? "rotate-90" : "rotate-0"}`}>
                  ➔
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-300">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
