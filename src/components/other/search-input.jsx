"use client";
import React, { useEffect, useRef, useState, cloneElement } from "react";
import { useSiteState } from '@/hooks/site-state-provider';
import { cn } from '@/lib/utils';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SearchInput({ children, className }) {
    const [searchListOpen, setSearchListOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const searchBarRef = useRef(null);
    const { searchList } = useSiteState();
    const router = useRouter();

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
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0) {
                // Select the highlighted suggestion
                handleSelectItem(filteredItems[highlightedIndex].title, filteredItems[highlightedIndex].link);
            } else {
                // Format input value with commas replaced by `+`
                const formattedValue = inputValue.replace(/,\s*/g, '+').replace(/\s+/g, '+');
                // Redirect based on input value if no suggestion is highlighted
                router.push(`/online/search/courses?title=${formattedValue}`);
                setSearchListOpen(false);
            }
        }
    };

    const handleSelectItem = (item, link) => {
        setInputValue(item);
        setSearchListOpen(false);
        setHighlightedIndex(-1);
        router.push(link);
    };

    const filteredItems = searchList.filter(item =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Clone the child element to add props to the input field
    const childrenWithProps = cloneElement(children, {
        // Find the input inside children and pass the needed props
        children: React.Children.map(children.props.children, (child) =>
            child.type === "input"
                ? cloneElement(child, {
                    value: inputValue,
                    onChange: handleInputChange,
                    onKeyDown: handleKeyDown,
                })
                : child
        )
    });

    return (
        <div ref={searchBarRef} className={cn("relative", className)}>

            {childrenWithProps}

            <div
                className={cn(
                    "absolute right-0 left-0 top-[110%] bg-background rounded border shadow-md overflow-hidden z-[99999]",
                    searchListOpen ? "block" : "hidden"
                )}
            >
                <div className="">
                    <ul className="space-y-1">
                        {filteredItems.length > 0 ? (
                            filteredItems.slice(0, 10).map((item, i) => (
                                <li key={i}>
                                    <Link
                                        className={cn(
                                            "p-sm block cursor-pointer hover:bg-secondary",
                                            highlightedIndex === i && "bg-secondary"
                                        )}
                                        onClick={() => handleSelectItem(item.title, item.link)}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="p-sm cursor-default text-muted-foreground">No results found</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
