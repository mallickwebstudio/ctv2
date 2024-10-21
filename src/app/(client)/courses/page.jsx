"use client"
import Link from "next/link"
import FAQ from "./faq"
import FreeLesson from "./free-lesson"
import Header from "./header"
import LinksSection from "@/components/section/links-section"
import CoursesSection from "@/components/section/courses-section"
import InstructorSection from "@/components/section/instructor-section"
import { useData } from "@/hooks/data-provider"
import FeatureSection from "@/components/section/feature-section"
import { courseOne, courseTwo } from '@/lib/datas/courseDatas'
import CoursesCategorySection from "@/components/section/courses-category-section"
import { useEffect, useState } from "react"
import FilterTab from "./filter-tab"

const tabData = [
  {
    "category_id": "520",
    "slug": "professional",
    "icon": "/store/1/default_images/categories_icons/feather.png",
    "parent_id": null,
    "category_name": "Most Popular",
    "href": "/",
    "title": "Enhance Your Skills in Professional",
    "subTitle": "Learn to extract insights from data and make informed decisions Professional",
    "items": [
      {
        "course_id": "2005",
        "slug": "Web-Design-for-Beginners",
        "price": "10.00",
        "category_id": "520",
        "imageUrl": "/store/4/Web-Design-for-Beginnerrs.jpg",
        "course_name": "Web Design for Beginners",
        "instructor": "King Pictures",
        "image": "/store/4/avatar/617a50568d8a8.png"
      }
    ]
  },
  {
    "category_id": "526",
    "slug": "language",
    "icon": "/store/1/default_images/categories_icons/anchor.png",
    "parent_id": null,
    "category_name": "Trending",
    "href": "/",
    "title": "Enhance Your Skills in Language",
    "subTitle": "Learn to extract insights from data and make informed decisions Language",
    "items": [
      {
        "course_id": "1995",
        "slug": "Become-a-Product-Manager",
        "price": "0.00",
        "category_id": "611",
        "imageUrl": "/store/1016/1.jpg",
        "course_name": "Become a Product Manager",
        "instructor": "Ricardo dave",
        "image": "/store/1016/avatar/617a4f17c8e72.png"
      },
      {
        "course_id": "2022",
        "slug": "Installment-feature",
        "price": "100.00",
        "category_id": "611",
        "imageUrl": "/store/870/Installment.jpg",
        "course_name": "Installment and Secure Host",
        "instructor": "Jessica Wray",
        "image": "/store/870/avatar/617a4f7c09d61.png"
      }
    ]
  },
  {
    "category_id": "528",
    "slug": "cooking",
    "icon": "/store/1/default_images/categories_icons/code.png",
    "parent_id": null,
    "category_name": "New",
    "href": "/",
    "title": "Enhance Your Skills in Cooking",
    "subTitle": "Learn to extract insights from data and make informed decisions Cooking",
    "items": [
      {
        "course_id": "2028",
        "slug": "sp32-databases-to-control-anything-anywhere",
        "price": "9.99",
        "category_id": "608",
        "imageUrl": "/store/1/default_images/blogs/home2.png",
        "course_name": "ESP32 + Databases to Control Anything Anywhere",
        "instructor": "Ashraf Said AlMadhoun",
        "image": "/store/1/default_images/instructor_finder_wizard.jpg"
      }
    ]
  }
]

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
export default function Page() {
  const { courses } = useData();
  const [instructors, setInstructors] = useState([]);


  useEffect(() => {

    const fetchInstructor = async () => {
      try {
        const response = await fetch('/api/get-instructors'); // Fetch data from API
        const data = await response.json();
        setInstructors(data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchInstructor();
  }, []);

  return (
    <main>
      <Header
        sectionClassName="bg-secondary"
      />

      <CoursesCategorySection
        h2="Explore Our Course Categories"
        p="Find the best courses to enhance your skills in various domains. Our diverse selection of courses will help you achieve your professional and personal goals."
        data={tabData}
      />

      <FeatureSection
        sectionClassName="bg-secondary"
        h2="Featured courses"
        p="Many learners enjoyed this highly rated course for its engaging content."
      />

      <FilterTab />

      <CoursesSection
        h2={<>Top courses in <Link className="text-link underline" href="#">Python</Link> and <Link className="text-link underline" href="#">Machine Learning</Link></>}
        data={courses[1].items}
      />


      <InstructorSection
        h2="Study with Top Creative Specialists"
        p="Learn directly from top creative experts on CourseTakers. Enhance your skills with their practical insights and experience."
        data={instructors}
      />


      {/* <CoursesCategorySection
        h2="Courses to get you started"
        p="Explore courses from experienced, real-world experts."
        data={datas}
      /> */}

      <LinksSection
        sectionClassName="bg-secondary"
        h2="Python students also learn"
      />

      {/* <CoursesSection
        h2={<>Top courses in Python and <Link className="text-link underline" href="#">Django</Link></>}
        data={courses[0].items}
      /> */}

      {/* <InstructorSection
        className="md:pt-0 lg:pt-0"
        h2="Popular Instructors"
        p="These real-world experts are highly rated by learners like you."
        data={instructors}
      /> */}


      <FAQ />

      <FreeLesson className="md:pt-0 lg:pt-0" />
    </main>
  )
}
