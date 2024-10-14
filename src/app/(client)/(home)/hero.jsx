import Image from "next/image";
import { Search } from "lucide-react";
import Section from "@/components/ui/section";
import { useSiteState } from '@/hooks/site-state-provider';
import SearchInput from "@/components/other/search-input";

export default function Hero() {
  const { setSearchbarOpen } = useSiteState();

  return (
    <>
      <div className="md:hidden">
        <Image
          className="md:hidden w-full aspect-video object-cover object-center"
          src="/images/common/hero.png"
          width={320}
          height={180}
          alt="Hero Image"
          priority
        />
      </div>

      <Section sectionClassName="lg:py-36 md:bg-[url('/images/common/hero.png')] bg-top bg-cover">
        <div className="md:w-2/5">
          <h1>Be amazed when you realize the skills you can learn in just a few hours!</h1>
          <p className="mt-base text-foreground lg:text-2xl">
            Our big sale is on. Get courses from ₹399 for your career & your life. Sale ends August 29.
          </p>

          <div className="relative mt-block">
            {/* Desktop Search Bar */}
            <div className="hidden md:block relative ">
              <SearchInput>
                <div className="flex gap-xs items-center px-3 py-3 h-12 font-normal w-full bg-background border border-foreground rounded-md ">
                  <input
                    className="text-muted-foreground text-left flex-1 bg-transparent focus:outline-none"
                    placeholder="What do you want to learn?"
                  />
                  <Search className='size-4 text-secondary-foreground shrink-0' />
                </div>
              </SearchInput>
            </div>

            {/* Mobile Search Bar */}
            <div className="block md:hidden px-3 py-3 h-12 font-normal w-full bg-background border border-foreground relative rounded-md" onClick={() => setSearchbarOpen(true)}>
              <div className="flex gap-xs items-center w-full pointer-events-none select-none">
                <div className="text-input flex-1">What do you want to learn?</div>
                <Search className='size-4 text-secondary-foreground shrink-0 pointer-events-auto' />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}