import Section from "@/components/ui/section";
import TestimonialCard from "@/components/card/testimonial-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonial({
    sectionClassName,
    className,
    h2,
    p,
    data = [],
}) {
    return (
        <Section sectionClassName={sectionClassName} className={className}>
            {h2 && <h2>{h2}</h2>}
            {p && (<p>{p}</p>)}
            
            <div className="mt-block">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <TestimonialCard data={{}} />
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