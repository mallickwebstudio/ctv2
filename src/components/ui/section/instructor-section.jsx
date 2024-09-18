"use client"
import Section from "@/components/ui/section";
import InstructorCard from "@/components/ui/card/instructor-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react";
import { Button } from "../button";

export default function InstructorSection({
    sectionClassName,
    className,
    heading = "Study with Top Creative Specialists",
    subHeading,
    data = [],
}) {
    const [showMore, setShowMore] = useState(false);

    return (
        <Section  sectionClassName={sectionClassName} className={className}>
            <h2>{heading}</h2>
            {subHeading && (<p className="mb-base sub-heading">{subHeading}</p>)}

            {/* Mobile Version */}
            <div className="block sm:hidden">
                <div className="space-y-2">
                    {Array.from({ length: 12 }).slice(0, (showMore ? 12 : 3)).map((item, index) => (
                        <div key={index} className="basis-[80%] sm:basis-1/3  lg:basis-1/4">
                            <InstructorCard data={{}} />
                        </div>
                    ))}
                </div>

                <div className="mt-block flex-center">
                    <Button className="w-full" variant="outlineSecondary" onClick={() => setShowMore(!showMore)}>
                        View {showMore ? "Less" : "More"}
                    </Button>
                </div>
            </div>

            {/* Desktop Version */}
            <div className="hidden sm:block">
                <Carousel className="w-full" opts={{ align: "start" }}>
                    <CarouselContent>
                        {Array.from({ length: 12 }).map((item, index) => (
                            <CarouselItem key={index + "InstructorCard"} className="basis-[80%] sm:basis-1/2 md:basis-1/3  lg:basis-1/4">
                                <InstructorCard data={{}} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant="tertiary" />
                    <CarouselNext variant="tertiary" />
                </Carousel>
            </div>
        </Section >
    )
}
