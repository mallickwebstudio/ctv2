import Section from "@/components/ui/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FilterCourse from "./filter-course"
import FilterTable from "./filter-table"
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const tableData = [
    {
        courseHref: "#",
        courseName: "Certified UAE VAT Compliance Course",
        price: 99.99,
        duration: "10",
        localCourse: true,
    },
    {
        courseHref: "#",
        courseName: "Advanced Financial Analysis",
        price: 149.99,
        duration: "15",
        localCourse: false,
    },
    {
        courseHref: "#",
        courseName: "Mastering Excel for Business",
        price: 79.99,
        duration: "8",
        localCourse: true,
    },
    {
        courseHref: "#",
        courseName: "Introduction to Business Analytics",
        price: 129.99,
        duration: "12",
        localCourse: false,
    },
    {
        courseHref: "#",
        courseName: "Digital Marketing Essentials",
        price: 59.99,
        duration: "6",
        localCourse: true,
    },
    {
        courseHref: "#",
        courseName: "Leadership and Team Building",
        price: 99.99,
        duration: "10",
        localCourse: false,
    },
    {
        courseHref: "#",
        courseName: "Supply Chain Management Basics",
        price: 119.99,
        duration: "14",
        localCourse: true,
    },
    {
        courseHref: "#",
        courseName: "Effective Communication Skills",
        price: 49.99,
        duration: "5",
        localCourse: false,
    },
    {
        courseHref: "#",
        courseName: "Project Management Professional (PMP)",
        price: 199.99,
        duration: "20",
        localCourse: true,
    },
    {
        courseHref: "#",
        courseName: "Entrepreneurship 101",
        price: 89.99,
        duration: "7",
        localCourse: false,
    },
];


export default function FilterTab() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const view = searchParams.get("view") || "course";

    const handleTabChange = (value) => {
        router.push(`/courses?view=${value}`, { scroll: false }); // Navigates without reloading the page
    };

    return (
        <Section>
            <Tabs
                defaultValue={view}
                className="w-full"
                onValueChange={handleTabChange} // Triggers when the tab changes
            >
                <TabsList>
                    <TabsTrigger value="course">Courses view</TabsTrigger>
                    <TabsTrigger value="fees-table">Fees view</TabsTrigger>
                </TabsList>
                <TabsContent value="course">
                    <FilterCourse />
                </TabsContent>
                <TabsContent value="fees-table">
                    <FilterTable data={tableData} />
                </TabsContent>
            </Tabs>
        </Section>
    );
}