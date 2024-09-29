"use client"
import Link from "next/link"
import Browse from "./browse"
import FAQ from "./faq"
import FreeLesson from "./free-lesson"
import Header from "./header"
import LinksSection from "@/components/section/links-section"
import CoursesSection from "@/components/section/courses-section"
import InstructorSection from "@/components/section/instructor-section"
import { useData } from "@/components/providers/data-provider"
import FeatureSection from "@/components/section/feature-section"
import { courseOne, courseTwo } from '@/lib/datas/courseDatas'
import CoursesCategorySection from "@/components/section/courses-category-section"
import { instructors } from "@/lib/datas/datas"

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
export default function Page({ params }) {
  const { slug } = params;
  const { courses } = useData();

  return (
    <main>
      <Header />

      <CoursesCategorySection 
        className="md:pt-0 lg:pt-0"
        h2="Courses to get you started"
        p="Explore courses from experienced, real-world experts."
        data={datas}
      />

      <FeatureSection
        sectionClassName="bg-secondary"
        h2="Featured courses"
        p="Many learners enjoyed this highly rated course for its engaging content."
      />

      <LinksSection
        h2="Python students also learn"

      />

      <CoursesSection
        className="md:pt-0 lg:pt-0"
        h2={<>Top courses in Python and <Link className="text-link underline" href="#">Django</Link></>}
        data={courses[0].items}
      />

      <CoursesSection
        className="md:pt-0 lg:pt-0"
        h2={<>Top courses in Python and <Link className="text-link underline" href="#">Machine Learning</Link></>}
        data={courses[1].items}
      />
      
      <InstructorSection
        className="md:pt-0 lg:pt-0"
        h2="Popular Instructors"
        p="These real-world experts are highly rated by learners like you."
        data={instructors}
      />

      <Browse className="md:pt-0 lg:pt-0" />

      <FAQ />
      
      <FreeLesson className="md:pt-0 lg:pt-0" />
    </main>
  )
}
