"use client"
import React, { useState } from "react";
import Section from "@/components/ui/section";
import ExploreCard from "@/components/card/explore-card";
import { cn } from "@/lib/utils";

export default function ExploreCourses({
  sectionClassName,
  className,
  h2,
  p,
  data,
}) {
  const [tab, setTab] = useState(data[0].category);
  const [currentData, setCurrentData] = useState(data[0].subCategories)

  const handleTabChange = (tab) => {
    setCurrentData(data.find((item) => item.category === tab).subCategories)
    setTab(tab)
  }

  return (
    <Section sectionClassName={sectionClassName} className={className}>
      {h2 && (<h2>{h2}</h2>)}
      {p && (<p>{p}</p>)}
      <div className="overflow-x-scroll">
        <div className="mt-base p-1 w-fit bg-background flex rounded-md border">
          {data.map(item => (
            <div className={cn(
              "px-xs py-xs text-sm font-bold text-muted-foreground hover:text-foreground border-none rounded-md cursor-pointer",
              (tab === item.category && "bg-secondary text-secondary-foreground")
            )}
              key={item.category + "CategoryTab"}
              onClick={() => handleTabChange(item.category)}
            >
              {item.category}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-xs grid gap-xs md:gap-base sm:grid-cols-2 md:grid-cols-3">
        {currentData.map((item, i) => (
          <ExploreCard data={item} key={item + i + "ExploreCard"} />
        ))}
      </div>
    </Section>
  );
}
