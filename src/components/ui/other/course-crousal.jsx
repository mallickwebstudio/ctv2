"use client";
import { useEffect, useRef, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import CourseCard from "@/components/ui/card/course-card";
import PopOverCard from "@/components/ui/card/pop-over-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CourseCarousel({ datas }) {
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
            className="md:-my-[8rem] w-full"
            opts={{ align: "start" }}
        >
            <CarouselContent className="md:py-[8rem] w-full">
                {datas.map((item, index) => (
                    <CarouselItem
                        key={`CourseCarousel-${index}`}
                        className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <HoverCard className="z-[9999]" openDelay={0} closeDelay={0}>
                            <HoverCardTrigger>
                                <CourseCard data={item} />
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
