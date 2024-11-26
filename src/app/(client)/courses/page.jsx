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
import CoursesCategorySection from "@/components/section/courses-category-section"
import FilterTab from "./filter-tab"
import { Suspense } from "react"

const instructorData = [
  {
    href: "#",
    imageUrl: "/images/common/0.jpg",
    name: " ETTFOS (Expert Trading Techniques: Crypto, Commodities, Forex, Stocks)",
    profession: "Website Developer",
    rating: 4.9,
    students: 3323429,
    courses: 14,
    location: ["Delhi", "Mumbai"],
    localCourse: true,
  },
  {
    href: "#",
    imageUrl: "/images/person/1.jpg",
    name: "Alice Johnson",
    profession: "Data Scientist",
    rating: 4.8,
    students: 527934,
    courses: 18,
    location: ["Chennai", "Hyderabad"],
    localCourse: true,
  },
  {
    href: "#",
    imageUrl: "/images/common/2.jpg",
    name: "ETTFOS (Expert Trading Techniques: Crypto, Commodity",
    profession: "Graphic Designer",
    rating: 4.7,
    students: 284728,
    courses: 10,
    location: ["Bangalore", "Kolkata"],
    localCourse: false,
  },
  {
    href: "#",
    imageUrl: "/images/person/3.jpg",
    name: "Jane Smith",
    profession: "Digital Marketer",
    rating: 4.6,
    students: 182472,
    courses: 12,
    location: ["Pune", "Lucknow"],
    localCourse: false,
  },
  {
    href: "#",
    imageUrl: "/images/common/4.jpg",
    name: "Certified Management Accountant (CMA) Course",
    profession: "Cybersecurity Expert",
    rating: 4.9,
    students: 472819,
    courses: 8,
    location: ["Ahmedabad", "Jaipur"],
    localCourse: true,
  },
  {
    href: "#",
    imageUrl: "/images/person/5.jpg",
    name: "Diana Prince",
    profession: "AI Specialist",
    rating: 4.8,
    students: 829384,
    courses: 15,
    location: ["Delhi", "Mumbai"],
    localCourse: false,
  },
  {
    href: "#",
    imageUrl: "/images/common/6.jpg",
    name: "CAMS (Certified Anti-Money Laundering Specialist)",
    profession: "Project Manager",
    rating: 4.7,
    students: 273910,
    courses: 7,
    location: ["Chennai", "Kolkata"],
    localCourse: true,
  },
  {
    href: "#",
    imageUrl: "/images/person/7.jpg",
    name: "Fiona Gallagher",
    profession: "Entrepreneur",
    rating: 4.5,
    students: 394728,
    courses: 5,
    location: ["Hyderabad", "Pune"],
    localCourse: false,
  },
  {
    href: "#",
    imageUrl: "/images/common/8.jpg",
    name: "Tally",
    profession: "SEO Expert",
    rating: 4.8,
    students: 127384,
    courses: 6,
    location: ["Lucknow", "Ahmedabad"],
    localCourse: true,
  },
  {
    href: "#",
    imageUrl: "/images/person/9.jpg",
    name: "Hannah Montana",
    profession: "Content Creator",
    rating: 4.9,
    students: 937482,
    courses: 20,
    location: ["Jaipur", "Delhi"],
    localCourse: false,
  },
];


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
        courseHref: "#",
        totalRatings: 42329,
        enrolled: 50000,
        price: 99.99,
        originalPrice: 99.99,
        bestseller: true,
        rating: "4.3",
        thumbnailUrl: "/images/common/0.jpg",
        courseName: "Become a Product Manager",
        instructorName: "Ricardo Dave",
        instructorImageUrl: "/store/1016/avatar/617a4f17c8e72.png",
        location: ["Delhi", "Mumbai"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 57340,
        enrolled: 75000,
        price: 199.99,
        originalPrice: 249.99,
        bestseller: false,
        rating: "4.7",
        thumbnailUrl: "/images/common/1.jpg",
        courseName: "Master Data Science",
        instructorName: "Alice Harper",
        instructorImageUrl: "/store/1017/avatar/617a4f17c8e73.png",
        location: ["Bangalore", "Hyderabad"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 23958,
        enrolled: 40000,
        price: 49.99,
        originalPrice: 99.99,
        bestseller: true,
        rating: "4.8",
        thumbnailUrl: "/images/common/2.jpg",
        courseName: "Learn Graphic Design",
        instructorName: "Bob Martin",
        instructorImageUrl: "/store/1018/avatar/617a4f17c8e74.png",
        location: ["Chennai", "Kolkata"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 15029,
        enrolled: 30000,
        price: 79.99,
        originalPrice: 99.99,
        bestseller: false,
        rating: "4.5",
        thumbnailUrl: "/images/common/3.jpg",
        courseName: "SEO Mastery",
        instructorName: "Jane Simmons",
        instructorImageUrl: "/store/1019/avatar/617a4f17c8e75.png",
        location: ["Lucknow", "Pune"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 64237,
        enrolled: 85000,
        price: 149.99,
        originalPrice: 199.99,
        bestseller: true,
        rating: "4.9",
        thumbnailUrl: "/images/common/4.jpg",
        courseName: "Introduction to Cybersecurity",
        instructorName: "Ethan Brown",
        instructorImageUrl: "/store/1020/avatar/617a4f17c8e76.png",
        location: ["Ahmedabad", "Delhi"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 33021,
        enrolled: 60000,
        price: 119.99,
        originalPrice: 149.99,
        bestseller: false,
        rating: "4.6",
        thumbnailUrl: "/images/common/5.jpg",
        courseName: "Digital Marketing Basics",
        instructorName: "Hannah Lee",
        instructorImageUrl: "/store/1021/avatar/617a4f17c8e77.png",
        location: ["Mumbai", "Chennai"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 41032,
        enrolled: 70000,
        price: 199.99,
        originalPrice: 299.99,
        bestseller: true,
        rating: "4.7",
        thumbnailUrl: "/images/common/6.jpg",
        courseName: "Artificial Intelligence for Beginners",
        instructorName: "Chris Evans",
        instructorImageUrl: "/store/1022/avatar/617a4f17c8e78.png",
        location: ["Bangalore", "Jaipur"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 50321,
        enrolled: 90000,
        price: 89.99,
        originalPrice: 129.99,
        bestseller: false,
        rating: "4.4",
        thumbnailUrl: "/images/common/7.jpg",
        courseName: "Advanced Python Programming",
        instructorName: "Fiona Gallagher",
        instructorImageUrl: "/store/1023/avatar/617a4f17c8e79.png",
        location: ["Kolkata", "Hyderabad"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 32948,
        enrolled: 45000,
        price: 69.99,
        originalPrice: 99.99,
        bestseller: true,
        rating: "4.5",
        thumbnailUrl: "/images/common/8.jpg",
        courseName: "Freelancing 101",
        instructorName: "George Miller",
        instructorImageUrl: "/store/1024/avatar/617a4f17c8e80.png",
        location: ["Delhi", "Pune"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 29010,
        enrolled: 50000,
        price: 99.99,
        originalPrice: 129.99,
        bestseller: false,
        rating: "4.2",
        thumbnailUrl: "/images/common/9.jpg",
        courseName: "Leadership and Management",
        instructorName: "Diana Prince",
        instructorImageUrl: "/store/1025/avatar/617a4f17c8e81.png",
        location: ["Ahmedabad", "Chennai"],
        localCourse: false,
      },
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
        courseHref: "#",
        totalRatings: 41032,
        enrolled: 70000,
        price: 199.99,
        originalPrice: 299.99,
        bestseller: true,
        rating: "4.7",
        thumbnailUrl: "/images/common/6.jpg",
        courseName: "Artificial Intelligence for Beginners",
        instructorName: "Chris Evans",
        instructorImageUrl: "/store/1022/avatar/617a4f17c8e78.png",
        location: ["Bangalore", "Jaipur"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 50321,
        enrolled: 90000,
        price: 89.99,
        originalPrice: 129.99,
        bestseller: false,
        rating: "4.4",
        thumbnailUrl: "/images/common/7.jpg",
        courseName: "Advanced Python Programming",
        instructorName: "Fiona Gallagher",
        instructorImageUrl: "/store/1023/avatar/617a4f17c8e79.png",
        location: ["Kolkata", "Hyderabad"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 32948,
        enrolled: 45000,
        price: 69.99,
        originalPrice: 99.99,
        bestseller: true,
        rating: "4.5",
        thumbnailUrl: "/images/common/8.jpg",
        courseName: "Freelancing 101",
        instructorName: "George Miller",
        instructorImageUrl: "/store/1024/avatar/617a4f17c8e80.png",
        location: ["Delhi", "Pune"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 29010,
        enrolled: 50000,
        price: 99.99,
        originalPrice: 129.99,
        bestseller: false,
        rating: "4.2",
        thumbnailUrl: "/images/common/9.jpg",
        courseName: "Leadership and Management",
        instructorName: "Diana Prince",
        instructorImageUrl: "/store/1025/avatar/617a4f17c8e81.png",
        location: ["Ahmedabad", "Chennai"],
        localCourse: false,
      },
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
        courseHref: "#",
        totalRatings: 57340,
        enrolled: 75000,
        price: 199.99,
        originalPrice: 249.99,
        bestseller: false,
        rating: "4.7",
        thumbnailUrl: "/images/common/1.jpg",
        courseName: "Master Data Science",
        instructorName: "Alice Harper",
        instructorImageUrl: "/store/1017/avatar/617a4f17c8e73.png",
        location: ["Bangalore", "Hyderabad"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 23958,
        enrolled: 40000,
        price: 49.99,
        originalPrice: 99.99,
        bestseller: true,
        rating: "4.8",
        thumbnailUrl: "/images/common/2.jpg",
        courseName: "Learn Graphic Design",
        instructorName: "Bob Martin",
        instructorImageUrl: "/store/1018/avatar/617a4f17c8e74.png",
        location: ["Chennai", "Kolkata"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 15029,
        enrolled: 30000,
        price: 79.99,
        originalPrice: 99.99,
        bestseller: false,
        rating: "4.5",
        thumbnailUrl: "/images/common/3.jpg",
        courseName: "SEO Mastery",
        instructorName: "Jane Simmons",
        instructorImageUrl: "/store/1019/avatar/617a4f17c8e75.png",
        location: ["Lucknow", "Pune"],
        localCourse: false,
      },
      {
        courseHref: "#",
        totalRatings: 64237,
        enrolled: 85000,
        price: 149.99,
        originalPrice: 199.99,
        bestseller: true,
        rating: "4.9",
        thumbnailUrl: "/images/common/4.jpg",
        courseName: "Introduction to Cybersecurity",
        instructorName: "Ethan Brown",
        instructorImageUrl: "/store/1020/avatar/617a4f17c8e76.png",
        location: ["Ahmedabad", "Delhi"],
        localCourse: true,
      },
      {
        courseHref: "#",
        totalRatings: 33021,
        enrolled: 60000,
        price: 119.99,
        originalPrice: 149.99,
        bestseller: false,
        rating: "4.6",
        thumbnailUrl: "/images/common/5.jpg",
        courseName: "Digital Marketing Basics",
        instructorName: "Hannah Lee",
        instructorImageUrl: "/store/1021/avatar/617a4f17c8e77.png",
        location: ["Mumbai", "Chennai"],
        localCourse: false,
      },
    ]
  }
]

// const datas = [
//   {
//     category: "Most Popular",
//     items: [
//       courseOne,
//       courseTwo,
//       courseOne,
//       courseOne,
//       courseOne,
//       courseOne,
//       courseOne,
//     ]
//   },
//   {
//     category: "Latest",
//     items: [
//       courseTwo,
//       courseOne,
//       courseTwo,
//       courseTwo,
//       courseTwo,
//       courseTwo,
//       courseTwo,
//       courseTwo,
//       courseTwo,
//     ]
//   },
//   {
//     category: "Beginner Friendly",
//     items: [
//       courseOne,
//       courseTwo,
//       courseOne,
//       courseOne,
//       courseOne,
//       courseOne,
//       courseOne,
//     ]
//   },
// ]
export default function Page() {
  const { courses } = useData();
  // const [instructors, setInstructors] = useState([]);


  // useEffect(() => {

  //   const fetchInstructor = async () => {
  //     try {
  //       const response = await fetch('/api/get-instructors'); // Fetch data from API
  //       const data = await response.json();
  //       setInstructors(data.data);
  //     } catch (error) {
  //       console.error('Error fetching testimonials:', error);
  //     }
  //   };

  //   fetchInstructor();
  // }, []);

  return (
    <main>
      <Header />

      <CoursesCategorySection
        sectionClassName="bg-secondary"
        h2="Explore Our Course Categories"
        p="Find the best courses to enhance your skills in various domains. Our diverse selection of courses will help you achieve your professional and personal goals."
        data={tabData}
      />

      <FeatureSection
        h2="Featured courses"
        p="Many learners enjoyed this highly rated course for its engaging content."
      />

      <LinksSection
        sectionClassName="bg-secondary"
        h2="Python students also learn"
      />

      <CoursesSection
        h2={<>Top courses in <Link className="text-link underline" href="#">Python</Link> and <Link className="text-link underline" href="#">Machine Learning</Link></>}
        data={courses[1].items}
      />

      <InstructorSection
        sectionClassName="bg-secondary"
        h2="Study with Top Creative Specialists"
        p="Learn directly from top creative experts on CourseTakers. Enhance your skills with their practical insights and experience."
        data={instructorData}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <FilterTab />
      </Suspense>


      {/* <CoursesCategorySection
        h2="Courses to get you started"
        p="Explore courses from experienced, real-world experts."
        data={datas}
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
