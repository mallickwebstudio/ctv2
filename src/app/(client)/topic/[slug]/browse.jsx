"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Info, ListFilter, Plus, X } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn, formatNumber } from '@/lib/utils'
import { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FilterCourseCard from '@/components/card/filter-course-card'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import { StarEmpty, StarFull, StarHalf } from '@/components/ui/svgs'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import CourseCard from '@/components/card/course-card'

const cities = [
    { id: 'dubai', label: 'Dubai', count: 1234 },
    { id: 'abu-dhabi', label: 'Abu Dhabi', count: 1234 },
    { id: 'sharjah', label: 'Sharjah', count: 1234 },
    { id: 'ajman', label: 'Ajman', count: 1234 },
    { id: 'al-ain', label: 'Al Ain', count: 1234 },
    { id: 'fujairah', label: 'Fujairah', count: 1234 },
    { id: 'ras-al-khaimah', label: 'Ras al Khaimah', count: 1234 },
    { id: 'umm-al-quwain', label: 'Umm al Quwain', count: 1234 },
];

const ratings = [
    { id: '4.5-up', value: '4.5&up', stars: [StarFull, StarFull, StarFull, StarFull, StarHalf], label: '4.5 & up', count: 1234 },
    { id: '4-up', value: '4&up', stars: [StarFull, StarFull, StarFull, StarFull, StarEmpty], label: '4 & up', count: 1234 },
    { id: '3.5-up', value: '3.5&up', stars: [StarFull, StarFull, StarFull, StarHalf, StarEmpty], label: '3.5 & up', count: 1234 },
    { id: '3-up', value: '3&up', stars: [StarFull, StarFull, StarFull, StarEmpty, StarEmpty], label: '3 & up', count: 1234 },
];

const videoDurations = [
    { id: '0-1-hour', label: '0-1 Hour', count: 1234 },
    { id: '1-3-hours', label: '1-3 Hours', count: 1234 },
    { id: '3-6-hours', label: '3-6 Hours', count: 1234 },
    { id: '6-17-hours', label: '6-17 Hours', count: 1234 },
    { id: '17-plus-hours', label: '17+ Hours', count: 1234 },
];

const topics = [
    { id: 'python', label: 'Python', count: 1234 },
    { id: 'data-science', label: 'Data Science', count: 1234 },
    { id: 'machine-learning', label: 'Machine Learning', count: 1234 },
    { id: 'rust', label: 'Rust', count: 1234 },
    { id: 'javascript', label: 'JavaScript', count: 1234 },
    { id: 'typescript', label: 'TypeScript', count: 1234 },
    { id: 'ai', label: 'AI', count: 1234 },
    { id: 'django', label: 'Django', count: 1234 },
];
const subcategories = [
    { id: "python", label: "Python", count: 1234 },
    { id: "data-science", label: "Data Science", count: 1234 },
    { id: "machine-learning", label: "Machine Learning", count: 1234 },
    { id: "rust", label: "Rust", count: 1234 },
    { id: "java-script", label: "Java Script", count: 1234 },
    { id: "type-script", label: "Type Script", count: 1234 },
    { id: "ai", label: "AI", count: 1234 },
    { id: "django", label: "Django", count: 1234 },
];

const levels = [
    { id: "beginner", label: "Beginner", count: 1234 },
    { id: "all-level", label: "All Level", count: 1234 },
    { id: "intermediate", label: "Intermediate", count: 1234 },
    { id: "expert", label: "Expert", count: 1234 },
];

const languages = [
    { id: "english", label: "English", count: 1234 },
    { id: "spanish", label: "Spanish", count: 1234 },
    { id: "french", label: "French", count: 1234 },
    { id: "german", label: "German", count: 1234 },
    { id: "chinese", label: "Chinese", count: 1234 },
    { id: "japanese", label: "Japanese", count: 1234 },
    { id: "russian", label: "Russian", count: 1234 },
    { id: "arabic", label: "Arabic", count: 1234 },
    { id: "hindi", label: "Hindi", count: 1234 },
    { id: "portuguese", label: "Portuguese", count: 1234 },
    { id: "italian", label: "Italian", count: 1234 },
    { id: "korean", label: "Korean", count: 1234 },
];

const prices = [
    { id: "free", label: "Free", count: 1234 },
    { id: "paid", label: "Paid", count: 1234 },
];

const features = [
    { id: "subtitles", label: "Subtitles", count: 1234 },
    { id: "quizzes", label: "Quizzes", count: 1234 },
    { id: "features", label: "Features", count: 1234 },
    { id: "practice-tests", label: "Practice Tests", count: 1234 },
];

const subtitle = [
    { id: "english", label: "English", count: 1234 },
    { id: "spanish", label: "Spanish", count: 1234 },
    { id: "french", label: "French", count: 1234 },
    { id: "german", label: "German", count: 1234 },
    { id: "chinese", label: "Chinese", count: 1234 },
    { id: "japanese", label: "Japanese", count: 1234 },
    { id: "russian", label: "Russian", count: 1234 },
    { id: "arabic", label: "Arabic", count: 1234 },
    { id: "hindi", label: "Hindi", count: 1234 },
    { id: "portuguese", label: "Portuguese", count: 1234 },
    { id: "italian", label: "Italian", count: 1234 },
    { id: "korean", label: "Korean", count: 1234 },
];

export default function Browse({
    className,
}) {
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1024) {
                setFilterOpen(false)
            } else {
                setFilterOpen(true)
            }
        }

        handleResize(); // Initial check on mount
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className={cn('mx-auto container p-6 sm:py-12 md:py-16 lg:py-20', className)}>
            <h2>All Accounting, Banking and Finance courses in
                Johannesburg, South Africa</h2>
            <p className='sub-heading md:w-3/5'>See why millions of people turn to Udemy&apos;s real-world experts to learn Python. Learn at your own pace with hands-on exercises and quizzes. Our courses are frequently updated so you&apos;ll always be working from the latest information. This is the training you&apos;ll need to become a professional Python developer.</p>

            <div className="my-base p-sm flex items-center gap-base bg-info  rounded-md">
                <Info className='shrink-0 size-6' />
                <div className="font-bold">Not sure? All courses have a 30-day money-back guarantee</div>
            </div>

            {/* Filter-Open & Sorting Product */}
            <div className="flex-between gap-base items-center">
                <div className=" w-full ">
                    <div className="flex gap-sm w-full lg:w-72">
                        <Button variant="outlineSecondary" onClick={() => setFilterOpen(!filterOpen)}>
                            <ListFilter className='mr-2 size-base shrink-0' />
                            Filter
                        </Button>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="most popular">Most Popular</SelectItem>
                                <SelectItem value="highest rated">Highest Rated</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="hidden md:block font-bold text-muted-foreground text-nowrap">
                    1323 Results
                </div>
            </div>

            {/* Filter & Display Product */}
            <div className="mt-base flex gap-base">
                {/* Filters */}
                <div className={cn(
                    "transition-all overflow-hidden z-50",
                    (filterOpen ? "lg:w-72" : "w-0"),
                    "fixed lg:relative inset-0 w-full",
                    (filterOpen ? "flex w-full lg:block" : "hidden"),
                )}>
                    <div className="lg:hidden relative flex-1 h-full bg-foreground/50" onClick={() => setFilterOpen(false)}>
                        <div className="absolute top-base right-base">
                            <Button className="rounded-full" variant="secondary" size="icon">
                                <X className='size-6' />
                            </Button>
                        </div>
                    </div>

                    <div className="lg:size-full w-72 bg-background flex flex-col lg:block">
                        <div className="lg:hidden p-base shadow-md">
                            3291 results
                        </div>

                        {/* Accordions */}
                        <div className="p-base w-full flex-1 overflow-y-scroll">
                            <Accordion type="multiple" defaultValue="item-select-city">

                                {/* Select City */}
                                <AccordionSection title="Select City" items={cities} renderItem={renderCheckboxItem} />

                                {/* Rating */}
                                <AccordionSection title="Rating" items={ratings} renderItem={renderRatingItem} groupType="radio" />

                                {/* Video Duration */}
                                <AccordionSection title="Video Duration" items={videoDurations} renderItem={renderCheckboxItem} />

                                {/* Topic */}
                                <AccordionSection title="Topic" items={topics} renderItem={renderCheckboxItem} />

                                {/* subcategories */}
                                <AccordionSection title="Subcategory" items={subcategories} renderItem={renderCheckboxItem} />

                                {/* levels */}
                                <AccordionSection title="Level" items={levels} renderItem={renderCheckboxItem} />

                                {/* languages */}
                                <AccordionSection title="Language" items={languages} renderItem={renderCheckboxItem} />

                                {/* prices */}
                                <AccordionSection title="Price" items={prices} renderItem={renderCheckboxItem} />

                                {/* features */}
                                <AccordionSection title="Features" items={features} renderItem={renderCheckboxItem} />

                                {/* subtitles */}
                                <AccordionSection title="Subtitles" items={subtitle} renderItem={renderCheckboxItem} />

                            </Accordion>
                        </div>

                        <div className="lg:hidden p-base shadow-[0px_-10px_20px_0px_rgba(0,0,0,0.1)]">
                            <Button className="w-full" variant="tertiary">Done</Button>
                        </div>
                    </div>

                </div>

                {/* CourseCards */}
                <div className="flex-1">
                    <div className="">
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <BrowseTestimony />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <BrowseComboCourse />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                        <FilterCourseCard />
                    </div>
                    <div className="mt-base">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                    </div>
                </div>
            </div>
        </section>
    )
}


const AccordionSection = ({ title, items, renderItem, groupType = 'checkbox' }) => (
    <AccordionItem value={`item-${title.toLowerCase().replace(/ /g, '-')}`}>
        <AccordionTrigger className="text-xl font-bold">{title}</AccordionTrigger>
        <AccordionContent>
            <div className="space-y-base">
                {groupType === 'radio' ? (
                    <RadioGroup>{items.map(renderItem)}</RadioGroup>
                ) : (
                    items.map(renderItem)
                )}
            </div>
        </AccordionContent>
    </AccordionItem>
);

const renderCheckboxItem = (item) => (
    <CheckboxItem key={item.id} id={item.id} value={item.id} label={item.label} count={item.count} />
);

const renderRatingItem = (item) => (
    <RatingItem key={item.id} id={item.id} value={item.value} stars={item.stars} label={item.label} count={item.count} />
);
const RatingItem = ({ value, id, stars, label, count }) => (
    <div className="flex items-center space-x-2">
        <RadioGroupItem value={value} id={id} />
        <Label className="flex items-center gap-1 text-muted-foreground" htmlFor={id}>
            <div className="flex items-center gap-1">
                {stars.map((Star, index) => (
                    <Star key={index} />
                ))}
            </div>
            <div>{label}</div>
            <div>({formatNumber(count)})</div>
        </Label>
    </div>
);
const CheckboxItem = ({ value, id, label, count }) => (
    <div className="flex items-center space-x-2">
        <Checkbox value={value} id={id} />
        <Label className="flex items-center gap-1 text-muted-foreground" htmlFor={id}>
            <div>{label}</div>
            <div className='text-muted-foreground'>({formatNumber(count)})</div>
        </Label>
    </div>
);


const BrowseTestimony = () => {
    return (
        <div className="relative py-sm border-b flex group transition-all">
            <div className="p-base w-full bg-secondary rounded-md border">
                <div className="size-16">
                    <svg className="size-full" width="20" height="20" viewBox="0 0 20 20" fill="#78787835" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6846 16.599C16.2946 16.599 17.6006 15.256 17.6006 13.599C17.6006 11.943 16.2946 10.599 14.6846 10.599C11.7696 10.599 13.612 4 17.5 4L17.6006 3.4C10.6616 3.399 7.94259 16.599 14.6846 16.599ZM6.28459 16.599C7.89359 16.599 9.19959 15.256 9.19959 13.599C9.19959 11.943 7.89359 10.599 6.28459 10.599C3.36859 10.599 5.112 4 9 4L9.19959 3.4C2.26159 3.399 -0.457414 16.599 6.28459 16.599Z" fill="" />
                    </svg>
                </div>
                <p className="md:text-xl">
                    I am glad that I took this course. There was always something to learn in every lesson. The Jupyter notebooks provided are very helpful. The two milestone projects and the final capstone project helped me gain a lot of confidence. Moreover, there were short challenges, assignments, and quizzes which also helped a lot.
                </p>

                <Link className='mt-base block w-fit text-link underline underline-offset-4' href="#">The Complete Python Bootcamp From Zero to Hero in Python</Link>

            </div>
        </div>
    )
}

const BrowseComboCourse = () => {
    return (
        <div className="relative py-sm border-b flex transition-all">
            <div className="p-base w-full  border rounded-md">
                <h2>Frequently Bought Together</h2>
                <div className="relative flex z-0 gap-2">
                    {/* Card */}
                    <CourseCard />

                    {/* Plus icon */}
                    <div className="-mx-6 size-12 aspect-square flex-center bg-background rounded-full border shadow-md self-center z-10">
                        <Plus className='size-6 shrink-0' strokeWidth={2} />
                    </div>

                    {/* Card */}
                    <CourseCard />
                </div>

                <div className="mt-base pt-base flex-between border-t">
                    <div className="text-2xl">Total: <b>199.98</b></div>

                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}
