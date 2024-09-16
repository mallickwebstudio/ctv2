import Section from "@/components/ui/section";
import Image from "next/image";

export default function Authority() {
    return (
        <Section sectionClassName="bg-secondary">
            <h2 className="text-center mx-auto md:w-1/2">
                Trusted by over 15,000 companies and millions of learners around the world
            </h2>
            <div className="mt-block h-fit grid gap-base grid-cols-4 md:grid-cols-8 place-items-center">
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/volkswagen.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/samsung.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/cisco.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/vimeo.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/pg.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/hp.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/citi.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
                <Image
                    className="max-h-10 w-fit select-none"
                    src="/images/svg/authority/ericsson.svg"
                    width={200}
                    height={100}
                    alt="volkswagen Logo"
                />
            </div>
        </Section>
    )
}
