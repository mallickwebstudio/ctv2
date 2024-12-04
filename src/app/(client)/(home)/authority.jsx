import Section from "@/components/ui/section";
import Image from "next/image";

export default function Authority() {
    return (
        <Section sectionClassName="bg-secondary">
            <h2 className="mx-auto md:w-1/2 text-center">
                Trusted by over 15,000 companies and millions of learners around the world
            </h2>
            <div className="mt-block place-items-center gap-base grid grid-cols-4 md:grid-cols-8 h-fit">
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/volkswagen.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/samsung.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/cisco.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/vimeo.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/pg.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/hp.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/citi.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="w-fit max-h-10 select-none"
                    src="/images/svg/authority/ericsson.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
            </div>
        </Section>
    )
}
