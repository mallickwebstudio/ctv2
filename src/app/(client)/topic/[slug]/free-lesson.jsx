import Section from "@/components/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Play } from "@/components/ui/svgs";
import Link from "next/link";

const demoItems = [
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
  {
    title: "What is python",
    minutes: "9"
  },
]
export default function FreeLesson({ sectionClassName, className, data = {} }) {
  const { items = demoItems } = data
  return (
    <Section sectionClassName={sectionClassName} className={className}>
      <div className="mx-auto max-w-[45rem]">
        <h2>Free Python lessons</h2>
        <p className="sub-heading">Bite-sized learning in minutes</p>

        <Carousel
          opts={{ align: "start" }}
        >
          <CarouselContent className="py-1">
            {items.map((item, i) => (
              <CarouselItem
                className="basis-[40%] md:basis-[30%]"
                key={item.title + "FreeVideoCard" + i}
              >
                <div className="p-base flex flex-col aspect-[2/2.5] border border-foreground/30">
                  <div className="p-2 size-fit bg-foreground rounded-full">
                    <Play className="shrink-0 size-5 text-background" />
                  </div>
                  <div className="mt-base font-bold">{item.title}</div>
                  <div className="flex-1" />
                  <div className="text-sm text-muted-foreground">{item.minutes}min video</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="tertiary" />
          <CarouselNext variant="tertiary" />
        </Carousel>

        <Link className="text-link font-bold" href="/">View Free Python Courses</Link>
      </div>
    </Section>
  )
}
