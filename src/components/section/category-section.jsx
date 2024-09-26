"use client"
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CourseCrousal from '@/components/other/course-crousal'
import { useData } from '@/components/providers/data-provider'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { courseOne, courseTwo } from '@/lib/datas/courseDatas'

const datas = [
    {
        category: "Most Popular",
        items: [
            courseOne,
            courseTwo,
            courseOne,
            courseOne,
            courseOne,
            courseOne,
            courseOne,
        ]
    },
    {
        category: "Latest",
        items: [
            courseTwo,
            courseOne,
            courseTwo,
            courseTwo,
            courseTwo,
            courseTwo,
            courseTwo,
            courseTwo,
            courseTwo,
        ]
    },
    {
        category: "Beginner Friendly",
        items: [
            courseOne,
            courseTwo,
            courseOne,
            courseOne,
            courseOne,
            courseOne,
            courseOne,
        ]
    },
]

export default function CategorySection({ sectionClassName, className, h2, p, data }) {
    const { courses } = useData();
    const [tab, setTab] = useState(data[0].category)
    const currentData = data.find(data => data.category === tab)

    return (
        <Section sectionClassName={sectionClassName} className={className}>
           {h2 && <h2>{h2}</h2>}
           {p && <p>{p}</p>}

            {/* Desktop Version */}
            <div className="hidden md:block">
                <div className="mt-base flex gap-1 overflow-x-scroll">
                    {data.map(item => (
                        <div className={cn(
                            "px-xs py-xs text-sm font-bold text-muted-foreground border-none rounded-md cursor-pointer",
                            (tab === item.category && "bg-secondary text-secondary-foreground")
                        )}
                            key={item.category + "CategoryTab"}
                            onClick={() => setTab(item.category)}
                        >
                            {item.category}
                        </div>
                    ))}
                </div>

                <div className="relative mt-xs p-base border rounded-md">
                    {currentData.title && (
                        <div className="relative mb-base">
                            <div className="flex items-center gap-base">
                                <h3>{currentData.title}</h3>
                                <Link className="text-active hover:text-active-hover inline-flex items-center gap-1 hover:underline hover:gap-2 transition-all" href={currentData.href}>
                                    Explore {tab} <ArrowRight className='size-base' />
                                </Link>
                            </div>
                            <p className='hidden md:block'>
                                {currentData.subTitle}
                            </p>
                        </div>
                    )}

                    <div className="rleative w-full">
                        <CourseCrousal datas={currentData.items} />
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <hr className='mt-base border-foreground/30' />
                <Accordion type="multiple" defaultValue={data[0].category}>
                    {data.map(item => (
                        <AccordionItem key={item.category + "CoursesAccordion"} value={item.category}>
                            <AccordionTrigger className="text-left font-bold capitalize">
                                {item.category}
                            </AccordionTrigger>

                            <AccordionContent className="p-lg">
                                <CourseCrousal datas={item.items} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section >
    )
}