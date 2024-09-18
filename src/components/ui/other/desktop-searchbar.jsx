"use client";
import { useEffect, useRef, useState } from "react";
import { useSiteState } from '@/components/providers/site-state-provider';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DesktopSearchbar() {
    const [searchListOpen, setSearchListOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const searchBarRef = useRef(null);
    const { coursesList } = useSiteState();

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

    const filteredItems = coursesList.filter(item =>
        item.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div
            ref={searchBarRef}
            className="relative h-14 bg-[#f7f9fa] flex-1"
        >
            <div className="h-full px-sm py-xs flex items-center gap-2 border border-foreground rounded-full overflow-hidden">
                <Search className="mr-xs size-6 text-muted-foreground shrink-0" />
                <input
                    className="min-w-12 w-full focus:outline-offset-0 focus:outline-none bg-transparent"
                    placeholder="Type A Course Name"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <SearchBarList
                searchListOpen={searchListOpen}
                filteredItems={filteredItems}
                highlightedIndex={highlightedIndex}
                selectItem={selectItem}
            />
        </div>
    );
}

const SearchBarList = ({ searchListOpen, filteredItems, highlightedIndex, selectItem }) => {
    return (
        <div
            className={cn(
                "absolute right-0 left-0 top-[110%] bg-background rounded border shadow-md overflow-hidden z-[999]",
                searchListOpen ? "block" : "hidden"
            )}
        >
            <div className="">
                <ul className="space-y-1">
                    {filteredItems.length > 0 ? (
                        filteredItems.slice(0, 10).map((item, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "p-sm cursor-pointer hover:bg-secondary",
                                    highlightedIndex === index && "bg-secondary"
                                )}
                                onClick={() => selectItem(item)}
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="p-sm cursor-default text-muted-foreground">No results found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
