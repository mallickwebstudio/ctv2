import Section from '@/components/ui/section'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import RenderStars from '@/components/ui/render-stars'
import Image from 'next/image'

export default function Featured({ sectionClassName, className }) {
    return (
        <Section sectionClassName={sectionClassName} className={className}>

            <h2>Featured courses</h2>
            <p className="mb-base sub-heading">
                Many learners enjoyed this highly rated course for its engaging content.
                Many learners enjoyed this highly rated course for its engaging content.
            </p>

            <Carousel
                opts={{ align: "start", loop: true }}
            >
                <CarouselContent>
                    {[1, 2, 3].map((item, i) => (
                        <CarouselItem key={item + "FeatureCrousel" + i}>
                            <div className="p-base border border-border-light hover:bg-secondary">
                                <div className="relative py-sm flex flex-col md:flex-row group transition-all">
                                    {/* Card Image */}
                                    <div className="relative w-full md:w-[25rem] lg:w-[30rem] aspect-[1/.5625] overflow-hidden shrink-0">
                                        <Image
                                            className="object-cover object-center w-full select-none transition-all group-hover:brightness-75"
                                            src="/images/common/1.jpg"
                                            width={320}
                                            height={180}
                                            alt="Course Image"
                                        />
                                    </div>

                                    {/* Card Details */}
                                    <div className="pt-base md:pt-0 md:px-base flex flex-col gap-base">
                                        <div className="relative space-y-1 md:space-y-2">
                                            <div className="text-lg font-semibold line-clamp-2 leading-5 hover:cursor-pointer group-hover:underline">
                                                The Complete Python boot camp from zero to hero in just a few months.
                                            </div>

                                            <div>
                                                <div className="hidden md:block leading-5 line-clamp-1">The Complete Python boot camp from zero to hero in just a few months. The Complete Python boot camp from zero to hero in just a few months.</div>
                                            </div>

                                            <p className='text-sm line-clamp-1 text-muted-foreground'>Dr. Angela Yu, Developer and Leader of the community</p>

                                            <div className="flex gap-1 items-center">
                                                <div className="font-sm font-bold">4</div>
                                                <div className="flex items-center gap-px">
                                                    {<RenderStars className="size-3 lg:size-4" rating={5} />}
                                                </div>
                                                <div className='font-xs text-muted-foreground'>({631})</div>
                                            </div>
                                        </div>
                                        <div className="flex-1" />
                                        <div className="my-1">
                                            <span className="text-2xl font-bold">$99.99</span>
                                            <s className="text-lg ml-1 font-semibold text-muted-foreground">$999.99</s>
                                        </div>

                                    </div>
                                </div>
                            </div>
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
