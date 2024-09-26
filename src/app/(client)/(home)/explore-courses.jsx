"use client"
import React, { useState } from "react";
import Section from "@/components/ui/section";
import ExploreCard from "@/components/card/explore-card";
import { cn } from "@/lib/utils";

const itemOne = {
  iconUrl: "/images/svg/icon/calc.svg",
  title: "Accounting, Finance and Banking",
  subTitle: "ACCA",
  href: "/"
};
const itemTwo = {
  iconUrl: "/images/svg/icon/plane.svg",
  title: "Aviation and Management",
  subTitle: "Pilot Training",
  href: "/"
};
const itemThree = {
  iconUrl: "/images/svg/icon/makeup.svg",
  title: "Beauty and Makeup",
  subTitle: "Makeup Artistry",
  href: "/"
};
const datas = [
  {
    category: "Professional",
    subCategories: [itemOne, itemOne, itemOne, itemOne, itemOne, itemOne],
  },
  {
    category: "Academic",
    subCategories: [itemTwo, itemTwo, itemTwo, itemTwo, itemTwo, itemTwo, itemTwo, itemTwo],
  },
  {
    category: "Language",
    subCategories: [itemThree, itemThree, itemThree, itemThree, itemThree, itemThree, itemThree],
  },
  {
    category: "Cooking",
    subCategories: [itemOne, itemOne, itemOne, itemOne, itemOne, itemOne],
  },
  {
    category: "Sports",
    subCategories: [itemOne, itemOne, itemThree, itemThree, itemTwo, itemTwo],
  },
];

export default function ExploreCourses() {
  const [tab, setTab] = useState(datas[0].category);
  const [currentData, setCurrentData] = useState(datas[0].subCategories)

  const handleTabChange = (tab) => {
    setCurrentData(datas.find((item) => item.category === tab).subCategories)
    setTab(tab)
  }

  return (
    <Section sectionClassName="bg-secondary">
      <h2>Explore Our Wide Range of Courses</h2>
      <p className="sub-heading">Discover courses to enhance your skills and knowledge across various fields. From web development to business management, CourseTakers offers expert-led courses to help you succeed. Start learning today!</p>

      <div className="mt-base flex gap-xs overflow-x-scroll">
        {datas.map((item) => (
          <div
            className={cn(
              "px-sm py-xs capitalize cursor-pointer text-nowrap hover:text-foreground font-semibold border border-foreground md:border-none rounded-full",
              tab === item.category
                ? "text-background hover:text-background md:hover:text-foreground bg-foreground md:text-foreground md:bg-transparent md:underline underline-offset-8"
                : "text-muted-foreground"
            )}
            onClick={() => handleTabChange(item.category)}
            key={item.category + "Category"}
          >
            {item.category}
          </div>
        ))}
      </div>

      <div className="mt-base grid gap-xs md:gap-base sm:grid-cols-2 md:grid-cols-3">
        {currentData.map((item, i) => (
          <ExploreCard data={item} key={item + i + "ExploreCard"} />
        ))}
      </div>
    </Section>
  );
}
