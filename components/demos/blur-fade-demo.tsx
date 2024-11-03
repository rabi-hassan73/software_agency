// npx magicui-cli add blur-fade
 

import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Rubbish Brothers",
    link: "https://www.rubbishbrothers.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/todo-list.jpg",
    title: "Todo List",
    link: "https://colinwren.medium.com/trying-to-find-the-perfect-todo-list-app-ccbe0ca46070",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/American-terminate.jpg",
    title: "American Termite & Pest Services",
    link: "https://americanservicesfl.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Gas-station.jpg",
    title: "Gas Stations in US of America",
    link: "https://www.flight9.art",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}