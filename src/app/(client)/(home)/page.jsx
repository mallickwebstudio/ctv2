"use client"
import Hero from "./hero";
import Authority from "./authority";
import Courses from "./courses";
import Testimonial from "./testimonial";
import ExploreCourses from "./explore-courses";
import BecomeInstructor from "./become-instructor";
import CompareCourse from "./compare-course";
import OverscreenAskus from "@/components/ui/other/overscreen-askus";
import InstructorSection from "@/components/ui/section/instructor-section";
import CoursesSection from "@/components/ui/section/courses-section";
import { useData } from "@/components/providers/data-provider";

export default function Page() {
  const { courses } = useData();

  return (
    <main>
      <OverscreenAskus />
      <Hero />
      <CompareCourse />
      <Authority />
      <Courses />
      <Testimonial />
      <InstructorSection
        subHeading="Learn directly from top creative experts on CourseTakers. Enhance your skills with their practical insights and experience."
      />
      <CoursesSection
        subHeading="Discover the Latest and Greatest Courses on Coursetakers!"
        data={courses[1].items}
      />
      <ExploreCourses />
      <BecomeInstructor />
    </main>
  );
}
