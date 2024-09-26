"use client"
import Link from 'next/link'
import { useState } from 'react'
import Section from '@/components/ui/section'
import { buttonVariants } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CourseCrousal from '@/components/other/course-crousal'
import { useData } from '@/components/providers/data-provider'
import { cn } from '@/lib/utils'

export default function ExploreCourse({ sectionClassName, className }) {
    const { courses } = useData();
    const [tab, setTab] = useState(courses[0].category)

    const currentData = courses.find(data => data.category === tab)

    return (
        <Section sectionClassName={sectionClassName} className={className}>
            <h2>Explore Our Course Categories</h2>
            <p className='text-foreground'>Find the best courses to enhance your skills in various domains. Our diverse selection of courses will help you achieve your professional and personal goals.</p>


            {/* Mobile Version */}
            <div className="block md:hidden">
                <hr className='mt-base border-foreground/30' />
                <Accordion type="multiple" defaultValue={courses[0].category}>
                    {courses.map(item => (
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

            {/* Desktop Version */}
            <div className="hidden md:block">
                <div className="mt-base flex gap-xs overflow-x-scroll overflow-y-visible border-b">
                    {courses.map(item => (
                        <div className={cn(
                            "px-sm py-xs capitalize cursor-pointer hover:text-foreground font-semibold text-nowrap",
                            (tab === item.category
                                ? "text-background bg-foreground md:text-foreground md:bg-transparent md:underline underline-offset-[14px]"
                                : "text-muted-foreground"
                            )
                        )}
                            key={item.category + "CategoryTab"}
                            onClick={() => setTab(item.category)}
                        >
                            {item.category}
                        </div>
                    ))}
                </div>

                <div className="rleative pt-base w-full z-0">
                    <CourseCrousal datas={currentData.items} />
                </div>
            </div>

        </Section >
    )
}