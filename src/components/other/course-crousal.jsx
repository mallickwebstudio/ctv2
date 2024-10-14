"use client";
import { useEffect, useRef, useState } from "react";
import CourseCard from "@/components/card/course-card";
import PopOverCard from "@/components/card/pop-over-card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function CourseCarousel({ itemClassName, datas }) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselRef = useRef(null);

    // Handle Carousel Index Change
    useEffect(() => {
        const handleCarouselIndexChange = () => {
            const index = Number(carouselRef.current.dataset.crousalIndex);
            setCarouselIndex(index || 0);
        };

        // Initialize index on mount
        handleCarouselIndexChange();

        // Optionally, listen to changes on carousel if needed
        const observer = new MutationObserver(handleCarouselIndexChange);
        observer.observe(carouselRef.current, { attributes: true });

        return () => observer.disconnect();
    }, []);

    return (
        <Carousel
            ref={carouselRef}
            className="md:-my-[1rem] w-full"
            opts={{ align: "start" }}
        >
            <CarouselContent className="md:py-[1rem] w-full">
                {datas && datas.map((item, index) => (
                    <CarouselItem
                        className={cn("basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4", itemClassName)}
                        key={`CourseCarousel-${index}`}
                    >
                        <HoverCard className="z-[9999]" openDelay={0} closeDelay={0}>
                            <HoverCardTrigger asChild>
                                <div>
                                    <CourseCard i={index} data={item} />
                                </div>
                            </HoverCardTrigger>

                            <HoverCardContent
                                className="hidden lg:block w-fit"
                                avoidCollisions={false}
                                side={
                                    index === carouselIndex + 3
                                        ? "left"
                                        : "right"
                                }
                                direction={
                                    index === carouselIndex + 3
                                        ? "left"
                                        : "right"
                                }
                            >
                                <PopOverCard data={item} />
                            </HoverCardContent>
                        </HoverCard>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious variant="tertiary" />
            <CarouselNext variant="tertiary" />
        </Carousel>
    );
}
