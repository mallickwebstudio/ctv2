import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FilterTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Course/Institute Name</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Fees</TableHead>
                    <TableHead>Contact</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}
