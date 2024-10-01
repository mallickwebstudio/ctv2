import { testimonials } from "@/lib/datas/datas"

export async function GET() {

    return Response.json(testimonials)
}