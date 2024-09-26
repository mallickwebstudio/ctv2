"use client"
import { useEffect, useState } from "react";
import Section from "@/components/ui/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Link from "next/link";
import { chunkArray, cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const demoLinks = [
  { label: "Web Development", href: "/" },
  { label: "Python Programming", href: "/" },
  { label: "JavaScript", href: "/" },
  { label: "React.js", href: "/" },
  { label: "Node.js", href: "/" },
  { label: "Machine Learning", href: "/" },
  { label: "Data Science", href: "/" },
  { label: "Cybersecurity", href: "/" },
  { label: "DevOps", href: "/" },
  { label: "Cloud Computing", href: "/" },
  { label: "Mobile App Development", href: "/" },
  { label: "Artificial Intelligence", href: "/" },
  { label: "Blockchain", href: "/" },
  { label: "UI/UX Design", href: "/" },
  { label: "Database Management", href: "/" },
  { label: "Software Testing", href: "/" },
  { label: "Database Handeling", href: "/" },
  { label: "Game Testing", href: "/" },
  { label: "Game Development", href: "/" },
  { label: "Developes", href: "/" },
];


export default function LinksSection({ sectionClassName, className, h2, p, data = {} }) {
  const {
    links = demoLinks
  } = data;
  const [chunkedLinks, setChunkedLinks] = useState([]);

  useEffect(() => {
    function handleResize() {
      let chunkSize = 10;

      if (window.innerWidth < 768) {
        chunkSize = 6;
      } else
        if (window.innerWidth < 1024) {
          chunkSize = 8;
        }
      setChunkedLinks(chunkArray(links, chunkSize));
    }
    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [links]);

  return (
    <Section sectionClassName={sectionClassName} className={className}>
      {h2 && <h2>{h2}</h2>}
      {p && <p>{p}</p>}

      {/* Mobile Version */}
      <div className="block md:hidden overflow-x-scroll">
        <div className="flex flex-wrap gap-sm w-[130rem]">
          {links.map(item => (
            <Link
              className={cn(buttonVariants({ variant: "outlineSecondary" }), "w-fit rounded-full")}
              href={item.href}
              key={item.label + "MobileLinksCrousal"}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <Carousel>
          <CarouselContent>
            {chunkedLinks.map((subItem, index) => (
              <CarouselItem
                className="grid gap-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                key={index + "lgLinks"}
              >
                {subItem.map(item => (
                  <Link
                    className={cn(buttonVariants({ variant: "outlineSecondaryLight" }), "min-h-14 h-auto w-full border-[1.5px] leading-5 text-wrap text-center rounded-full")}
                    href={item.href}
                    key={item.label + "LinksCrousal"}
                  >
                    {item.label}
                  </Link>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="tertiary" />
          <CarouselNext variant="tertiary" />
        </Carousel>
      </div>
    </Section>
  )
}