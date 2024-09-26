import Section from '@/components/ui/section'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FeatureCard from '@/components/card/feature-card'

export default function FeatureSection({ sectionClassName, className, h2, p }) {
    return (
        <Section sectionClassName={sectionClassName} className={className}>
            {h2 && <h2>{h2}</h2>}
            {p && <p>{p}</p>}

            <Carousel
                className="mt-base"
                opts={{ align: "start", loop: true }}
            >
                <CarouselContent>
                    {[1, 2, 3].map((item, i) => (
                        <CarouselItem key={item + "FeatureCrousel" + i}>
                            <FeatureCard i={i} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="opacity-0 md:opacity-100">
                    <CarouselPrevious variant="tertiary" />
                    <CarouselNext variant="tertiary" />
                </div>
            </Carousel>

        </Section >
    )
}
