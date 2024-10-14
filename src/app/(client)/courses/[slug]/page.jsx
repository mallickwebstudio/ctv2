import CourseCarousel from "@/components/other/course-crousal";
import { Button } from "@/components/ui/button";
import RenderStars from "@/components/ui/render-stars";
import { datas } from "@/lib/datas/courseDatas";
import { cn, formatNumber } from "@/lib/utils";
import { Captions, Check, Code, Download, File, Globe, Info, MonitorSmartphone, Phone, Play, Star, Trophy, Users, Video } from "lucide-react";
import Image from "next/image";

const whatToLearn = [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
    "After the course you will be able to build ANY website you want.",
    "Build fully-fledged websites and web apps for your startup or business.",
    "Work as a freelance web developer.",
    "Master frontend development with React",
    "Master backend development with Node",
    "Learn professional developer best practices.",
]

const courseIncludes = [
    {
        label: "61 hours on-demand video",
        icon: <Video className="size-base shrink-0" />
    },
    {
        label: "194 downloadable resources",
        icon: <Download className="size-base shrink-0" />
    },
    {
        label: "7 coding exercises",
        icon: <Code className="size-base shrink-0" />
    },
    {
        label: "Access on mobile and TV",
        icon: <MonitorSmartphone className="size-base shrink-0" />
    },
    {
        label: "65 articles",
        icon: <File className="size-base shrink-0" />
    },
    {
        label: "Certificate of completion",
        icon: <Trophy className="size-base shrink-0" />
    },
]

export default function page() {
    return (
        <main>
            <div className="px-0 container grid md:grid-cols-6 2xl:grid-cols-8">
                <div className="relative p-base bg-secondary md:col-span-2 md:order-1">
                    <div className="md:sticky top-base bg-background rounded-md border overflow-hidden group">
                        <Image
                            className="object-cover object-center w-full select-none transition-all group-hover:brightness-75"
                            src={"/images/common/1.jpg"}
                            width={320}
                            height={180}
                            alt="Course Image"
                        />
                        <div className="p-xs">
                            <div className="text-2xl font-bold text-center">${formatNumber(2309)}</div>
                            <Button className="mt-xs w-full" size="cta">Add To Cart</Button>
                            <div className="mt-xs text-center space-y-1">
                                <div className="">30-Day Money-Back Guarantee</div>
                                <div className="">Lifetime Access</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-base md:col-span-4 2xl:col-span-6">
                    <CDWrapper>
                        <div className="">
                            Created By <span className="text-link hover:underline cursor-pointer">Dr. Angela Yu</span>
                        </div>
                        <h1 className="text-4xl font-bold">The Complete 2024 Web Development Bootcamp</h1>
                        <p className="-mt-xs text-xl font-normal">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>

                        <div className="mt-base flex items-center gap-xs">
                            <span className="font-bold">4.8</span>
                            <div className="inline-flex gap-px">
                                {<RenderStars className="size-3 md:size-4" rating={4.8} />}
                            </div>
                            <div className="">(1999)</div>
                        </div>

                        <div className="my-xs flex items-center gap-xs">
                            <Users className="size-base shrink-0" strokeWidth={2.5} />
                            <span>Total Students:</span>
                            <span className="font-semibold">29308</span>
                        </div>

                        <div className="my-xs flex items-center gap-xs">
                            <Info className="size-base shrink-0" strokeWidth={2.5} />
                            <span>Last Updated:</span>
                            <span className="font-semibold">8/2024</span>
                        </div>

                        <div className="my-xs flex items-center gap-xs">
                            <Globe className="size-base shrink-0" strokeWidth={2.5} />
                            <span>Language:</span>
                            <span className="font-semibold">English</span>
                        </div>

                        <div className="my-xs flex items-center gap-xs">
                            <Captions className="size-base shrink-0" strokeWidth={2.5} />
                            <span>Captions:</span>
                            <span className="font-semibold">English, Dutch, French, Japanese</span>
                        </div>


                        {/* <h2 className="mt-base">This course includes:</h2> */}
                    </CDWrapper>

                    <CDWrapper className="mt-block bg-secondary">
                        <h2 >You&apos;ll be learning</h2>
                        <div className="grid md:grid-cols-2 gap-sm">
                            {whatToLearn.map((item, i) => (
                                <div className="flex gap-xs items-start text-base" key={item + i + "WhatToLearn"}>
                                    <Check className="mt-1 size-base shrink-0" />
                                    <div className="">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CDWrapper>

                    <CDWrapper className="mt-block">
                        <h2>This course includes:</h2>
                        <div className="grid md:grid-cols-2 gap-sm">
                            {courseIncludes.map((item, i) => (
                                <div className="flex gap-xs items-start text-base" key={item.label + i + "WhatToLearn"}>
                                    <div className="mt-1">
                                        {item.icon}
                                    </div>
                                    <div className="">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CDWrapper>

                    <CDWrapper className="mt-block">
                        <h2>Course content</h2>
                    </CDWrapper>

                    <CDWrapper className="mt-block">
                        <h2>Course Description</h2>
                    </CDWrapper>

                    <CDWrapper className="mt-block">
                        <h2>About the Instructor</h2>
                        <div className="flex gap-base">
                            <div className="size-32 aspect-square rounded-md overflow-hidden">
                                <Image
                                    className="object-cover object-center size-full select-none transition-all"
                                    src={"/images/common/person.jpg"}
                                    width={320}
                                    height={180}
                                    alt="Course Image"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold">John Doe</h3>
                                <p className="-mt-3 text-sm">Lead instructor in Web-Development and machine learning</p>

                                <div className="my-xs flex items-center gap-xs text-sm">
                                    <Star className="size-base shrink-0" strokeWidth={2.5} />
                                    <div className="">
                                        <span className="font-semibold"> 4.8 </span>
                                        <span> Instructor Rating </span>
                                    </div>
                                </div>

                                <div className="my-xs flex items-center gap-xs text-sm">
                                    <Users className="size-base shrink-0" strokeWidth={2.5} />
                                    <div className="">
                                        <span className="font-semibold"> 29308 </span>
                                        <span> Students </span>
                                    </div>
                                </div>

                                <div className="my-xs flex items-center gap-xs text-sm">
                                    <Play className="size-base shrink-0" strokeWidth={2.5} />
                                    <div className="">
                                        <span className="font-semibold"> 8 </span>
                                        <span> Courses </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="space-y-xs">
                            <p className="text-sm">I&apos;m John, I&apos;m a developer with a passion for teaching. I&apos;m the lead instructor at the London App Brewery, London&apos;s leading Programming Bootcamp. I&apos;ve helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I&apos;ve been invited by companies such as Twitter, Facebook and Google to teach their employees.</p>

                            <p className="text-sm">My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I&apos;ve made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching. </p>

                            <p className="text-sm">I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you&apos;ll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand. </p>
                        </div>
                    </CDWrapper>

                    <CDWrapper className="mt-block p-0 md:p-0 border-none">
                        <h2>Students Testimonials about this Course</h2>

                        <div className="grid gap-sm md:grid-cols-2 2xl:grid-cols-3">
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                        </div>
                        <Button className="mt-sm" variant="outline">View All</Button>
                    </CDWrapper>

                    <CDWrapper className="mt-block">
                        <h2>More Courses by John Doe</h2>

                        {/* <div className="relative">
                            <CourseCarousel datas={datas[0].items} itemClassName="basis-[80%] md:basis-1/2 lg:basis-1/3 2xl:basis-1/4" />
                        </div> */}
                    </CDWrapper>
                </div>
            </div>
        </main>
    )
}

function TestimonialCard({ data }) {
    const {
        id = 1,
        testimonial = (
            <>
                This UX/UI course was fantastic, It helped me enhance my design skills and understand user experience better. The practical exercises and real-world examples were incredibly useful. Thanks to this course, I now feel confident in creating intuitive and engaging interfaces.
            </>
        ),
        imageUrl = "/images/common/person.jpg",
        testimonialBy = "James Taylor",
        courseTitle = "Mastering UX/UI Design: From Basics to Advanced Techniques and Methods",
        courseHref = "/",
    } = data || {};

    return (
        <div className="relative p-base bg-background rounded border overflow-hidden">
            <div className="relative -left-2 -top-2 size-12 select-none pointer-events-none">
                <svg className="size-full" width="20" height="20" viewBox="0 0 20 20" fill="#78787835" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6846 16.599C16.2946 16.599 17.6006 15.256 17.6006 13.599C17.6006 11.943 16.2946 10.599 14.6846 10.599C11.7696 10.599 13.612 4 17.5 4L17.6006 3.4C10.6616 3.399 7.94259 16.599 14.6846 16.599ZM6.28459 16.599C7.89359 16.599 9.19959 15.256 9.19959 13.599C9.19959 11.943 7.89359 10.599 6.28459 10.599C3.36859 10.599 5.112 4 9 4L9.19959 3.4C2.26159 3.399 -0.457414 16.599 6.28459 16.599Z" fill="" />
                </svg>
            </div>

            <p className="text-[15px] text-foreground leading-5">
                {testimonial}
            </p>

            <hr className="my-xs" />

            <div className="flex items-center gap-xs">
                <Image
                    className="aspect-square w-12 object-cover rounded-md border"
                    src={`/images/person/${id}.jpg` || imageUrl}
                    width={32}
                    height={32}
                    alt="Person Avatar"
                />
                <div className="">
                    <div className="font-semibold">{testimonialBy}</div>
                    <div className="text-muted-foreground text-sm font-bold">4 Days ago</div>
                </div>
            </div>

        </div>
    );
}

function CDWrapper({ children, className }) {
    return (
        <div className={cn("p-base rounded-md border", className)}>
            {children}
        </div>
    )
}