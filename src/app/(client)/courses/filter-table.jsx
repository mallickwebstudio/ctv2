import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function FilterTable({ data }) {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Course/Institute Name</TableHead>
                    <TableHead className="text-right">Duration</TableHead>
                    <TableHead className="text-right">Fees</TableHead>
                    <TableHead className="text-right">Contact</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map(item => (
                    <TableRow key={item.courseName + "TableFeesView"}>
                        <TableCell className="font-medium">
                            <Link className="hover:text-link hover:underline" href={item.courseHref}>
                                {item.courseName}
                            </Link>
                        </TableCell>
                        <TableCell className="text-right">{item.duration} hours</TableCell>
                        <TableCell className="text-right">${item.price}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="outline" size="sm">{item.localCourse ? "Contact Now" : "Add to Cart"}</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
