import Image from "next/image";
import Section from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BecomeInstructor() {
  return (
    <Section className="grid gap-block md:grid-cols-2">
      <div className="md:order-1">
        <Image
          className="w-full object-cover object-center"
          src="/images/common/woman.png"
          width={300}
          height={300}
          alt="woman Image"
        />
      </div>

      <div className="flex-center">
        <div className="text-center md:text-left">
          <h2>Become an Instructor</h2>
          <p className="sub-heading">Get the exposure that your course deserves. Our team is ready to upload your courses for you</p>

          <div className="mt-xl flex-center md:block">
            <div className={cn(buttonVariants({size:"cta"}), "cursor-pointer")}>Teach on Coursetakers Now</div>
          </div>
        </div>
      </div>
    </Section>
  )
}
