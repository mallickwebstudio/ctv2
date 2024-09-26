import Section from "@/components/ui/section";
import TestimonialCard from "@/components/card/testimonial-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonial() {
    return (
        <Section sectionClassName="bg-secondary">
            <h2 className="md:text-center">
                See what others are achieving through learning
            </h2>
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
