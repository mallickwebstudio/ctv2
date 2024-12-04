"use client"
import Section from "@/components/ui/section";
import TestimonialCard from "@/components/card/testimonial-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react";

export default function Testimonial({
    sectionClassName,
    className,
    h2,
    p,
    data,
}) {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/get-testimonials');
                const data = await response.json();
                setTestimonials(data.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    if (testimonials.length == 0) {
        return (
            <Section>
                Loading...
            </Section>
        )
    } else {
        return (
            <Section sectionClassName={sectionClassName} className={className}>
                {h2 && <h2>{h2}</h2>}
                {p && (<p>{p}</p>)}

                <div className="mt-block">
                    <Carousel className="w-full" opts={{ align: "start" }}>
                        <CarouselContent>
                            {testimonials.length > 0 && testimonials.map((item, index) => (
                                <CarouselItem key={index} className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <TestimonialCard data={item} />
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
}
