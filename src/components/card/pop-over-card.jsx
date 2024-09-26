import { Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useData } from "@/components/providers/data-provider";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PopOverCard({ data }) {
    const {
        id = null,
        title = "The Complete Python boot camp from zero to hero in just a few months.",
        description = "Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-CO2 exam!",
        instructor = "Dr. Angela Yu, Developer and Leader of the community",
        courseHour = 15,
        level = "Beginner",
        subtitles = true,
        instituteImageUrl = "/images/common/person.jpg",
        benefits = [
            "FULLY UPDATED FOR CLF-CO2 Pass the AWS Certified Cloud Practitioner Certification",
            "Full Practice Exam with Explanations included!",
            "Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)",
        ],
        bestseller,
    } = data

    const { cartItems, addToCart } = useData();

    const handleAddToCart = () => {
        addToCart(id);
        toast({
            title: <div className="line-clamp-2">{title}</div>,
            description: "This Item is added to your Cart"
        });
    }

    return (
        <div className={cn("w-[240px] lg:w-[270px] h-fit bg-background select-none")}>
            <div className="text-lg leading-5 font-bold">{title}</div>

            <div className="flex gap-xs items-center">
                <Image
                    className="rounded-full size-8 aspect-square object-cover"
                    src={instituteImageUrl}
                    width={32}
                    height={32}
                    alt="Course Image"
                />
                <p className='my-2 text-sm leading-4'>{instructor}</p>
            </div>

            <div className="flex gap-1 flex-wrap items-center">
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {courseHour} Total Hours
                </div>
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {level} Level
                </div>
                <div className="px-1.5 bg-secondary border rounded-full overflow-hidden flex flex-nowrap text-xs flex-center">
                    {subtitles && (<span>Subtitles</span>)}
                </div>
            </div>

            <div className="my-3 leading-5">{description}</div>

            <Button
                className={cn(buttonVariants(),
                    "mt-1 w-full hidden md:block text-center cursor-pointer font-bold",
                )}
                onClick={handleAddToCart}
                disabled={cartItems.includes(id)}
            >
                {cartItems.includes(id)
                    ? "Added to cart"
                    : "Add to cart"
                }
            </Button>
        </div>
    );
}
