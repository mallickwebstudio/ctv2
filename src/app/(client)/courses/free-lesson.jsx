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
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
                className="basis-[80%] sm:basis-[40%]"
                key={item.title + "FreeVideoCard" + i}
              >

                <Link className="relative flex flex-col aspect-video rounded-md border border-foreground/30" href="#">
                  <div className="absolute inset-0">
                    <Image
                      className="size-full object-cover object-center"
                      src={"/images/common/1.jpg"}
                      width={320}
                      height={180}
                      alt={"Image" + " icon"}
                    />
                  </div>

                  <div className="p-1 bg-black/50 size-full flex flex-col items-center justify-center z-10">
                    <div className="p-1 size-fit bg-black rounded-full">
                      <Play className="shrink-0 size-4 text-neutral-950" />
                    </div>
                    <div className="font-semibold text-white/90">{item.title}</div>
                    <div className="text-sm text-white/90">{item.minutes}min video</div>
                  </div>
                </Link>

              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="tertiary" />
          <CarouselNext variant="tertiary" />
        </Carousel>

        <Link className={cn(buttonVariants({ variant: "outlineSecondary" }),"mt-xs")} href="/">View Free Python Courses</Link>
      </div>
    </Section>
  )
}
