import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({ data }) {
    const {
        testimonial = (
            <>
                This UX/UI course was fantastic! <b>It helped me enhance my design skills and understand user experience better</b>. The practical exercises and real-world examples were incredibly useful. Thanks to this course, I now feel confident in creating intuitive and engaging interfaces.
            </>
        ),
        imageUrl = "/images/common/person.jpg",
        testimonialBy = "James Taylor",
        onVideo = "Mastering UX/UI Design: From Basics to Advanced Techniques and Methods",
        videoHref = "/",
    } = data;

    return (
        <div className="relative p-base bg-background rounded border overflow-hidden">
            <div className="absolute left-2 top-0 size-16 select-none pointer-events-none">
                <svg className="size-full" width="20" height="20" viewBox="0 0 20 20" fill="#78787835" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6846 16.599C16.2946 16.599 17.6006 15.256 17.6006 13.599C17.6006 11.943 16.2946 10.599 14.6846 10.599C11.7696 10.599 13.612 4 17.5 4L17.6006 3.4C10.6616 3.399 7.94259 16.599 14.6846 16.599ZM6.28459 16.599C7.89359 16.599 9.19959 15.256 9.19959 13.599C9.19959 11.943 7.89359 10.599 6.28459 10.599C3.36859 10.599 5.112 4 9 4L9.19959 3.4C2.26159 3.399 -0.457414 16.599 6.28459 16.599Z" fill="" />
                </svg>
            </div>

            <p className="mt-12 text-[15px] text-foreground leading-5 aspect-[4/3] md:aspect-[4/3]">
                {testimonial}
            </p>

            <hr className="my-xs" />

            <div className="flex items-center gap-xs">
                <Image
                    className="aspect-square w-8 object-cover rounded-full border"
                    src={imageUrl}
                    width={32}
                    height={32}
                    alt="Person Avatar"
                />
                <div className="">
                    <div className="font-semibold">{testimonialBy}</div>
                    <Link className="text-link text-sm hover:underline line-clamp-2 leading-4" href={videoHref}>
                        {onVideo}
                    </Link>
                </div>
            </div>

        </div>
    );
}
