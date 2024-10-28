"use client"
import React, { useEffect, useState } from "react";
import Section from "@/components/ui/section";
import ExploreCard from "@/components/card/explore-card";
import { cn } from "@/lib/utils";

export default function ExploreCategories({
  sectionClassName,
  className,
  h2,
  p,
  data,
}) {
  const [tab, setTab] = useState(data.length > 0 ? data[0].category_name : []);
  const [currentData, setCurrentData] = useState(data.length > 0 ? data[0].subCategories : [])

  const handleTabChange = (tab) => {
    setCurrentData(data.find((item) => item.category_name === tab).subCategories)
    setTab(tab)
  }

  useEffect(() => {
    setCurrentData(data.length > 0 && data[0].subCategories)
    setTab(data.length > 0 && data[0].category_name)
  }, [data])

  return (
    <Section sectionClassName={sectionClassName} className={className}>
      {h2 && (<h2>{h2}</h2>)}
      {p && (<p>{p}</p>)}

      <div className="overflow-x-scroll">
        <div className="mt-base p-1 w-fit bg-background flex rounded-md border">
          {data.length > 0 && data.map(item => (
            <div className={cn(
              "px-xs py-xs text-sm font-bold text-muted-foreground hover:text-foreground border-none rounded-md cursor-pointer text-nowrap",
              (tab === item.category_name && "bg-secondary text-secondary-foreground")
            )}
              key={item.category_name + "CategoryTab"}
              onClick={() => handleTabChange(item.category_name)}
            >
              {item.category_name}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-xs grid gap-xs md:gap-base sm:grid-cols-2 md:grid-cols-3 w-full overflow-x-scroll">
        {currentData.length > 0 && currentData.map((item, i) => (
          <ExploreCard data={item} key={item + i + "ExploreCard"} />
        ))}
      </div>
    </Section>
  );
}
