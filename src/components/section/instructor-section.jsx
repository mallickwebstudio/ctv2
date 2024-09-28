import Section from "@/components/ui/section";
import InstructorCard from "@/components/card/instructor-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function InstructorSection({
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

            <Carousel className="mt-base w-full" opts={{ align: "start" }}>
                <CarouselContent>
                    {Array.from({ length: 12 }).map((item, i) => (
                        <CarouselItem key={i + "InstructorCard"} className="basis-[70%] sm:basis-1/2 md:basis-1/3  lg:basis-1/4">
                            <InstructorCard data={{}} i={i} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant="tertiary" />
                <CarouselNext variant="tertiary" />
            </Carousel>
        </Section >
    )
}
