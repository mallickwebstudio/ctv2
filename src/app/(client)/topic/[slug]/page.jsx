"use client"
import CoursesSection from "@/components/ui/section/courses-section"
import Courses from "../../(home)/courses"
import Browse from "./browse"
import FAQ from "./faq"
import FreeLesson from "./free-lesson"
import Header from "./header"
import LinksSection from "@/components/ui/section/links-section"
import { useData } from "@/components/providers/data-provider"
import InstructorSection from "@/components/ui/section/instructor-section"
import Featured from "./featured"
import Link from "next/link"
import ExploreCourse from "./explore-course"

export default function Page({ params }) {
  const { slug } = params;
  const { courses } = useData();

  return (
    <main>
      <Header />
      <ExploreCourse className="md:pt-0 lg:pt-0" />
      <Featured className="md:pt-0 lg:pt-0" />
      <LinksSection className="md:pt-0 lg:pt-0" />
      <CoursesSection
        className="md:pt-0 lg:pt-0"
        heading={<>Top courses in Python and <Link className="text-link underline" href="#">Django</Link></>}
        data={courses[0].items}
      />
      <CoursesSection
        className="md:pt-0 lg:pt-0"
        heading={<>Top courses in Python and <Link className="text-link underline" href="#">Machine Learning</Link></>}
        data={courses[1].items}
      />
      <InstructorSection
        className="md:pt-0 lg:pt-0"
        heading="Popular Instructors"
        subHeading="These real-world experts are highly rated by learners like you."
      />
      <Browse className="md:pt-0 lg:pt-0" />
      <FAQ />
      <FreeLesson className="md:pt-0 lg:pt-0" />
    </main>
  )
}
