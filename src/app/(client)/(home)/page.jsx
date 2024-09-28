"use client"
import Hero from "./hero";
import Authority from "./authority";
import Testimonial from "../../../components/section/testimonial-section";
import ExploreCourses from "./explore-courses";
import BecomeInstructor from "./become-instructor";
import CompareCourse from "./compare-course";
import OverscreenAskus from "@/components/other/overscreen-askus";
import InstructorSection from "@/components/section/instructor-section";
import CoursesSection from "@/components/section/courses-section";
import { useData } from "@/components/providers/data-provider";
import CoursesCategorySection from "@/components/section/courses-category-section";

export default function Page() {
  const { courses } = useData();

  return (
    <main>
      <OverscreenAskus />

      <Hero />

      <CompareCourse />

      <Authority />

      <CoursesCategorySection
        h2="Explore Our Course Categories"
        p="Find the best courses to enhance your skills in various domains. Our diverse selection of courses will help you achieve your professional and personal goals."
        data={courses}
      />

      <Testimonial
        sectionClassName="bg-secondary"
        h2={<span className="block text-center">See what others are achieving through learning</span>}
        data={[]}
      />

      <InstructorSection
        h2="Study with Top Creative Specialists"
        p="Learn directly from top creative experts on CourseTakers. Enhance your skills with their practical insights and experience."
      />

      <CoursesSection
        h2="Trending Courses on Coursetakers"
        data={courses[1].items}
      />

      <ExploreCourses />

      <BecomeInstructor />

    </main>
  );
}
