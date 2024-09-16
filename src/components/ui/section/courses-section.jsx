"use client"
import Section from '@/components/ui/section'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import CourseCrousal from '@/components/ui/other/course-crousal';
import { chunkArray, cn } from '@/lib/utils';
import CourseChunkCard from '../card/course-chunk-card';

export default function CoursesSection({
    sectionClassName,
    className,
    heading = "Trending Courses on Coursetakers",
    subHeading,
    data = [],
}) {
    // Group the data for mobile variant
    const groupedDatas = chunkArray(data, 3);

    return (
        <Section sectionClassName={sectionClassName} className={cn(className,"relative z-0")}>
            <div className="relative z-10">
                <h2>{heading}</h2>
                {subHeading && (<p className='mb-base sub-heading'>{subHeading}</p>)}
            </div>

            <div>
                {/* Mobile Variant */}
                <div className="block md:hidden">
                    <Carousel
                        className="w-full"
                        opts={{ align: "start", }}
                    >
                        <CarouselContent>
                            {groupedDatas.map((group, groupIndex) => (
                                <CarouselItem key={groupIndex} className="space-y-xl md:space-y-0 basis-[80%] md:basis-1/3 lg:basis-1/4">
                                    {group.map((item, i) => (
                                        <CourseChunkCard data={item} key={i + "TrendingLearnersCard"} />
                                    ))}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious variant="tertiary" />
                        <CarouselNext variant="tertiary" />
                    </Carousel>
                </div>

                {/* Desktop Variant */}
                <div className="hidden md:block relative z-0">
                    <CourseCrousal datas={data} />
                </div>
            </div>
        </Section >
    )
}
