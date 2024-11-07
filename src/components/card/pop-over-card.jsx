import { Button, buttonVariants } from "@/components/ui/button";
import { useData } from "@/hooks/data-provider";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { baseUrl } from "@/lib/datas/api";

export default function PopOverCard({ className, data = {} }) {
    const {
        courseId = null,
        courseDescription = "The most complete course available on Product Management.",
        courseName = "Become a Product Manager",
        instructorName = "Dr. Angela Yu, Developer and Leader of the community",
        totalHours = null,
        level = null,
        subtitles = true,
        instructorImageUrl = "/images/common/person.jpg",
    } = data

    const { cartItems, addToCart } = useData();

    const handleAddToCart = () => {
        addToCart(courseId);
        toast({
            title: <div className="line-clamp-2">{courseName}</div>,
            description: "This Item is added to your Cart"
        });
    }

    return (
        <div className={cn("w-[240px] lg:w-[270px] h-fit bg-background select-none", className)}>
            <div className="text-lg leading-5 font-bold">{courseName}</div>

            <div className="my-xs flex gap-xs items-center">
                <Image
                    className="rounded-full size-8 aspect-square object-cover overflow-hidden"
                    src={instructorImageUrl !== null ? (instructorImageUrl.includes(baseUrl)) ? instructorImageUrl : (baseUrl + instructorImageUrl) : instructorImageUrl}
                    width={32}
                    height={32}
                    alt="Course Image"
                />
                <p className='my-2 text-sm leading-4'>{instructorName}</p>
            </div>

            <div className="flex gap-1 flex-wrap items-center">
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {totalHours} Total Hours
                </div>
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {level} Level
                </div>
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {subtitles && (<span>Subtitles</span>)}
                </div>
            </div>

            <div className="my-3 leading-5">{courseDescription}</div>

            <Button
                className={cn(buttonVariants(),
                    "mt-1 w-full hidden md:block text-center cursor-pointer font-bold",
                )}
                onClick={handleAddToCart}
                disabled={cartItems.includes(courseId)}
            >
                {cartItems.includes(courseId)
                    ? "Added to cart"
                    : "Add to cart"
                }
            </Button>
        </div>
    );
}
