"use client"
import AskUs from '@/components/other/ask-us'
import { buttonVariants } from '@/components/ui/button'
import Section from '@/components/ui/section'
import { useSiteState } from '@/hooks/site-state-provider';
import Image from 'next/image'

export default function CTA() {
  const { selectedCountry } = useSiteState();

  return (
    <Section>
      <div className="md:text-center">
        <h2>Compare Course Prices And Know Your Options In {selectedCountry||"Online"}</h2>
        <p className='sub-heading'>let us know which course you are looking for and we will connect wuth top insitute and universities in USA</p>
      </div>

      <div className="relative w-full">

        <div className="hidden md:block absolute inset-0 left-[22%] top-[5%] w-36 lg:w-56 bg-[url('/images/svg/icon/arrow-1.svg')] bg-no-repeat bg-contain" />
        <div className="hidden md:block absolute inset-0 left-[58%] top-[20%] w-36 lg:w-56 bg-[url('/images/svg/icon/arrow-2.svg')] bg-no-repeat bg-contain" />

        <div className="mt-block grid gap-block md:gap-base items-center justify-center sm:grid-cols-2 md:grid-cols-3">
          <div className="flex-center flex-col gap-base text-center">
            <Image
              className="size-20 select-none"
              src="/images/svg/icon/form.svg"
              width={200}
              height={200}
              alt="Form Icon"
            />
            <div className="font-bold">Tell Us What You Need</div>
            <p className='-mt-xs text-foreground'>Fill out a simple form to let us know the course or training you&apos;re looking for.</p>
          </div>

          <div className="relative flex-center flex-col gap-base text-center">
            <Image
              className="size-20 select-none"
              src="/images/svg/icon/ai.svg"
              width={200}
              height={200}
              alt="Ai icon"
            />
            <div className="font-bold">Get Matched with Top Institute</div>
            <p className='-mt-xs text-foreground'>Our smart system will find the best matches for your needs from our verified institutes.</p>
          </div>

          <div className="flex-center flex-col gap-base text-center">
            <Image
              className="size-20 select-none"
              src="/images/svg/icon/call.svg"
              width={200}
              height={200}
              alt="call icon"
            />
            <div className="font-bold">Start Receiving Calls</div>
            <p className='-mt-xs text-foreground'>Instead of searching and contacting institutes, let the best institute contact you.</p>
          </div>
        </div>

        <div className="mt-block flex-center">
          <AskUs>
            <div className={buttonVariants({ size: "cta" })}>Share Your Requirements</div>
          </AskUs>
        </div>
      </div>
    </Section>
  )
}
