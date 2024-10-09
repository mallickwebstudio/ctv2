"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CourseCrousal from '@/components/other/course-crousal'
import { cn } from '@/lib/utils'

export default function CoursesCategorySection({
    sectionClassName,
    className,
    h2,
    p,
    data
}) {
    const [tab, setTab] = useState(data.length > 0 ? data[0].category_name : "");
    const [catId, setCatId] = useState(data.length > 0 ? data[0].category_id : "")
    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        setTab(data.length > 0 && data[0].category_name)
        setCatId(data.length > 0 && data[0].category_id)
    }, [data])

    useEffect(() => {
        if (data.length > 0) {
            const filteredItem = data.find(item => item.category_name === tab);
            if (filteredItem) {
                setCurrentData(filteredItem);
            }
        }
    }, [data, tab]);



    return (
        <Section sectionClassName={sectionClassName} className={className}>
            {h2 && <h2>{h2}</h2>}
            {p && <p>{p}</p>}

            {/* Desktop Version */}
            <div className="hidden md:block">
                {/* Tab Panel */}
                <div className="overflow-x-scroll">
                    <div className="mt-base p-1 w-fit bg-background flex gap-1 border rounded-md">
                        {data.length > 0 && data.map(item => (
                            <div className={cn(
                                "px-xs py-xs text-sm font-bold text-muted-foreground hover:text-foreground border-none rounded-md cursor-pointer",
                                (tab === item.category_name && "bg-secondary text-secondary-foreground")
                            )}
                                key={item.category_name + "CategoryTab"}
                                onClick={() => setTab(item.category_name)}
                            >
                                {item.category_name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-xs p-base border rounded-md">
                    {currentData ? (
                        <div className="relative mb-base">
                            <div className="flex items-center gap-base">
                                <h3>{currentData.title}</h3>
                                <Link className="text-active hover:text-active-hover inline-flex items-center gap-1 hover:underline hover:gap-2 transition-all" href={"/"}>
                                    Explore {tab} <ArrowRight className='size-base' />
                                </Link>
                            </div>
                            <p className='hidden md:block'>{currentData.subTitle}</p>
                        </div>
                    )
                        : (
                            <div className="">
                                No Datas Found
                            </div>
                        )
                    }

                    <div className="rleative w-full">
                        <CourseCrousal datas={currentData.items} />
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <hr className='mt-base border-foreground/30' />
                <Accordion type="single" >
                    {data.length > 0 && data.map(item => (
                        <AccordionItem key={item.category_name + "CoursesAccordion"} value={item.category_name}>
                            <AccordionTrigger className="text-left font-bold capitalize">
                                {item.category_name}
                            </AccordionTrigger>

                            <AccordionContent className="p-lg">
                                {item.items.length > 0
                                    ? (
                                        <CourseCrousal datas={item.items} />
                                    )
                                    : (
                                        <div className="">No Datas Found</div>
                                    )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section >
    )
}