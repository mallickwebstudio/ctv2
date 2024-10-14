"use client"
import { useEffect, useState } from "react";
import Hero from "./hero";
import Authority from "./authority";
import ExploreCourses from "./explore-courses";
import BecomeInstructor from "./become-instructor";
import CompareCourse from "./compare-course";
import OverscreenAskus from "@/components/other/overscreen-askus";
import InstructorSection from "@/components/section/instructor-section";
import CoursesSection from "@/components/section/courses-section";
import { useData } from "@/hooks/data-provider";
import CoursesCategorySection from "@/components/section/courses-category-section";
import Testimonial from "@/components/section/testimonial-section";

export default function Page() {
  const { courses } = useData();

  const [instructors, setInstructors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryCourses, setCategoryCourses] = useState([]);
  const [featureCourses, setFeatureCourses] = useState([]);

  useEffect(() => {

  }, []);

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/get-categories'); // Fetch data from API
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    const fetchFeatureCourses = async () => {
      try {
        const response = await fetch('/api/get-feature-courses'); // Fetch data from API
        const data = await response.json();
        setFeatureCourses(data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    const fetchInstructor = async () => {
      try {
        const response = await fetch('/api/get-instructors'); // Fetch data from API
        const data = await response.json();
        setInstructors(data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    const fetchCategoryCourses = async () => {
      try {
        const response = await fetch('/api/get-category-courses'); // Fetch data from API
        const data = await response.json();
        setCategoryCourses(data.data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching Categories:', error);
      }
    };

    fetchCategories();
    fetchCategoryCourses();
    fetchInstructor();
    fetchFeatureCourses();
  }, []);

  return (
    <main>
      <OverscreenAskus />

      <Hero />

      <CompareCourse />

      <Authority />

      <CoursesCategorySection
        h2="Explore Our Course Categories"
        p="Find the best courses to enhance your skills in various domains. Our diverse selection of courses will help you achieve your professional and personal goals."
        data={categoryCourses}
      />

      <Testimonial
        sectionClassName="bg-secondary"
        h2={<span className="block text-center">See what others are achieving through learning</span>}
      // data={testimonials}
      />

      <InstructorSection
        h2="Study with Top Creative Specialists"
        p="Learn directly from top creative experts on CourseTakers. Enhance your skills with their practical insights and experience."
        data={instructors}
      />

      <CoursesSection
        h2="Trending Courses on Coursetakers"
        data={featureCourses}
      />

      <ExploreCourses
        sectionClassName="bg-secondary"
        h2="Explore Our Wide Range of Courses"
        p="Discover courses to enhance your skills and knowledge across various fields. From web development to business management, CourseTakers offers expert-led courses to help you succeed. Start learning today!"
        data={categories}
      />

      <BecomeInstructor />

    </main>
  );
}
