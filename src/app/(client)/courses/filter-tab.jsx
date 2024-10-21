import Section from "@/components/ui/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FilterCourse from "./filter-course"
import FilterTable from "./filter-table"

export default function FilterTab() {
    return (
        <Section>
            <Tabs defaultValue="course" className="w-full">
                <TabsList>
                    <TabsTrigger value="course">Courses view</TabsTrigger>
                    <TabsTrigger value="table">Table view</TabsTrigger>
                </TabsList>
                <TabsContent value="course"><FilterCourse /></TabsContent>
                <TabsContent value="table"><FilterTable /></TabsContent>
            </Tabs>
        </Section>
    )
}
