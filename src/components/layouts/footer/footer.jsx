"use client"
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LanguageSelect from "@/components/other/language-select";
import { useSiteState } from "@/hooks/site-state-provider";
import { useEffect, useState } from "react";

export default function Footer() {
  const [parentsCategories, setParentsCategories] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);

  useEffect(() => {
    const fetchQuickLinks = async () => {
      try {
        const response = await fetch('/api/get-quick-links/Online'); // Fetch data from API
        const data = await response.json();
        setQuickLinks(data.data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    const fetchParentsCategories = async () => {
      try {
        const response = await fetch('/api/get-parents-categories/Online'); // Fetch data from API
        const data = await response.json();
        setParentsCategories(data.data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchQuickLinks();
    fetchParentsCategories();
  }, []);


  const currentYear = new Date().getFullYear();
  const { language } = useSiteState();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto p-6 sm:py-12 md:p-16 lg:p-20">
        <div className="grid gap-block md:grid-cols-2">
          {/* Left */}
          <div>
            <Link className="w-fit block" href="/">
              <Image
                className='w-28 object-contain'
                src="/logo-horizontal-dark.png"
                width={200}
                height={100}
                alt='Logo'
              />
              <span className="sr-only">Brand Logo</span>
            </Link>

            <p className="my-base text-background 2xl:w-3/4">
              Coursetakers Online is your destination to upskill and learn with our self-paced pre-recorded video lessons from Top instructors worldwide. For instructors, it is a means to monetize their knowledge and efforts while reaching millions of students through Coursetakers Online.
            </p>

            <div className="my-base flex gap-base items-center">
              <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square overflow-hidden bg-foreground text-background hover:bg-background border-none hover:text-foreground")} href="/">
                <Instagram className="size-6 shrink-0" />
                <span className="sr-only">Instagram Link</span>
              </Link>
              <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square overflow-hidden bg-foreground text-background hover:bg-background border-none hover:text-foreground")} href="/">
                <Facebook className="size-6 shrink-0" />
                <span className="sr-only">Facebook Link</span>
              </Link>
              <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square overflow-hidden bg-foreground text-background hover:bg-background border-none hover:text-foreground")} href="/">
                <Linkedin className="size-6 shrink-0" />
                <span className="sr-only">Linkedin Link</span>
              </Link>
              <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square overflow-hidden bg-foreground text-background hover:bg-background border-none hover:text-foreground")} href="/">
                <Twitter className="size-6 shrink-0" />
                <span className="sr-only">Twitter Link</span>
              </Link>
            </div>

            <LanguageSelect>
              <div className="px-sm py-xs border hover:text-foreground hover:bg-background transition-all font-semibold">
                {language}
              </div>
            </LanguageSelect>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-block md:gap-40 md:flex-row justify-end ">
            <div className="self-start">
              <div className="font-bold">Courses</div>
              <ul className="mt-base space-y-2">
                {parentsCategories && parentsCategories.map(item => (
                  <li key={item.label + "FooterCourseLinks"}>
                    <Link className="text-muted/80 hover:text-muted hover:underline cursor-pointer" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="self-start">
              <div className="font-bold">Quick Links</div>
              <ul className="mt-base space-y-2">
                {quickLinks && quickLinks.map(item => (
                  <li key={item.label + "FooterQuickLinks"}>
                    <Link className="text-muted/80 hover:text-muted hover:underline cursor-pointer" href={item.slug}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>




          </div>
        </div>
      </div>
      <div className="py-xl border-t text-center">
        <div className="text-background">© {currentYear} coursetakers.com All Rights Reserved. <Link className="hover:underline" href="/">Terms and Conditions of use</Link>{" "} | {" "}<Link className="hover:underline" href="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
