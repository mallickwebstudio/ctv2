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
                setCatId(filteredItem.category_id);
            }
        }
    }, [data, tab]);


    useEffect(() => {
        if (catId != "") {
            const fetchCourses = async () => {
                try {
                    const response = await fetch(`/api/get-courses/${catId}`); // Fetch data from API
                    const data = await response.json();
                    setCurrentData(data.data); // Set fetched data to state
                } catch (error) {
                    console.error('Error fetching testimonials:', error);
                }
            };

            fetchCourses();
        }
    }, [catId])


    const [mobileCourseData, setMobileCourseData] = useState([])
    const handleMobileCourseFetch = async (catId) => {
        try {
            const response = await fetch(`/api/get-courses/${catId}`); // Fetch data from API
            const data = await response.json();
            setMobileCourseData(data.data);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    }


    return (
        <Section sectionClassName={sectionClassName} className={className}>
            {h2 && <h2>{h2}</h2>}
            {p && <p>{p}</p>}

            {/* Desktop Version */}
            <div className="hidden md:block">
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
                    {currentData.length > 0
                        ? (
                            <div className="relative mb-base">
                                <div className="flex items-center gap-base">
                                    <h3>Enhance Your Skills in {tab}</h3>
                                    <Link className="text-active hover:text-active-hover inline-flex items-center gap-1 hover:underline hover:gap-2 transition-all" href={"/"}>
                                        Explore {tab} <ArrowRight className='size-base' />
                                    </Link>
                                </div>
                                <p className='hidden md:block'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur quasi suscipit quas similique eius ab.
                                </p>
                            </div>
                        )
                        : (
                            <div className="">
                                No Datas Found
                            </div>
                        )
                    }

                    <div className="rleative w-full">
                        <CourseCrousal datas={currentData} />
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <hr className='mt-base border-foreground/30' />
                <Accordion type="single" >
                    {data.length > 0 && data.map(item => (
                        <AccordionItem key={item.category_name + "CoursesAccordion"} value={item.category_name}>
                            <AccordionTrigger className="text-left font-bold capitalize" onClick={() => handleMobileCourseFetch(item.category_id)}>
                                {item.category_name}
                            </AccordionTrigger>

                            <AccordionContent className="p-lg">
                                {mobileCourseData.length > 0
                                    ? (
                                        <CourseCrousal datas={mobileCourseData} />
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