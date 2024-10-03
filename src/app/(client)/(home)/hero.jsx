"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { Search } from "lucide-react";
import Section from "@/components/ui/section";
import { useSiteState } from '@/components/providers/site-state-provider';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { setSearchbarOpen, searchList } = useSiteState();

  const [searchListOpen, setSearchListOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchBarRef = useRef(null);
  const inputRef = useRef(null);

  // Close search list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setSearchListOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchListOpen(true);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && filteredItems.length > 0) {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === 'ArrowUp' && filteredItems.length > 0) {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      selectItem(filteredItems[highlightedIndex]);
    }
  };

  const selectItem = (item) => {
    setInputValue(item);
    setSearchListOpen(false);
    setHighlightedIndex(-1);
  };

  const filteredItems = searchList.filter(item =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

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

          <div className="relative mt-block" ref={searchBarRef}>
            {/* Desktop Search Bar */}
            <div className="hidden md:block px-3 py-3 h-12 font-normal w-full bg-background border border-foreground rounded-md relative ">
              <div className="flex gap-xs items-center w-full ">
                <input
                  ref={inputRef}
                  className="text-muted-foreground text-left flex-1 bg-transparent focus:outline-none"
                  placeholder="What do you want to learn?"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <Search className='size-4 text-secondary-foreground shrink-0' />
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="block md:hidden px-3 py-3 h-12 font-normal w-full bg-background border border-foreground relative rounded-md" onClick={() => setSearchbarOpen(true)}>
              <div className="flex gap-xs items-center w-full pointer-events-none select-none">
                <div className="text-input flex-1">What do you want to learn?</div>
                <Search className='size-4 text-secondary-foreground shrink-0 pointer-events-auto' />
              </div>
            </div>

            {/* Search Suggestions */}
            <div
              className={cn(
                "absolute right-0 left-0 top-full mt-xs bg-background rounded border shadow-md overflow-hidden z-[999]",
                searchListOpen ? "block" : "hidden"
              )}
            >
              <ul className="space-y-1">
                {filteredItems.length > 0 ? (
                  filteredItems.slice(0, 10).map((item, i) => (
                    <li
                      className={`p-sm cursor-pointer hover:bg-secondary ${highlightedIndex === i && 'bg-secondary'}`}
                      key={i}
                      onClick={() => selectItem(item)}
                    >
                      {item.title}
                    </li>
                  ))
                ) : (
                  <li className="p-sm cursor-default text-muted-foreground">No results found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}