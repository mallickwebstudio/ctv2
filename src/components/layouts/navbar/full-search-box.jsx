"use client"
import { useState, useRef, useEffect } from 'react';
import { Search, XIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SelectCountry from '@/components/other/select-country';
import { useSiteState } from '@/hooks/site-state-provider';
import SearchInput from '@/components/other/search-input';

export default function FullSearchBox() {
    const { searchbarOpen, setSearchbarOpen, coursesList, searchList } = useSiteState();
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState(searchList);
    const [searchListOpen, setSearchListOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const searchBarRef = useRef(null);
    const inputRef = useRef(null);

    // Prevent background scrolling when searchbar is open
    useEffect(() => {
        if (searchbarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [searchbarOpen]);

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

    // Focus on the input field when the search bar is opened
    useEffect(() => {
        if (searchbarOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchbarOpen]);

    // Close the search bar when the back button is pressed on mobile devices
    useEffect(() => {
        const handlePopState = () => {
            if (searchbarOpen) {
                setSearchbarOpen(false);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [searchbarOpen, setSearchbarOpen]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.trim() === '') {
            setFilteredSuggestions(searchList);
        } else {
            setFilteredSuggestions(
                searchList.filter(item =>
                    item.title.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
        setSearchListOpen(true);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown' && filteredSuggestions.length > 0) {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
            );
        } else if (e.key === 'ArrowUp' && filteredSuggestions.length > 0) {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
            );
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            e.preventDefault();
            selectItem(filteredSuggestions[highlightedIndex]);
        }
    };

    const selectItem = (item) => {
        setInputValue(item);
        setSearchListOpen(false);
        setHighlightedIndex(-1);
        setSearchbarOpen(false);
    };

    return (
        <div className="fixed inset-0 size-full lg:hidden bg-background z-[999] select-none" ref={searchBarRef}>
            <div className="relative p-sm">
                <div className="pb-sm flex-between">
                    <div />
                    <XIcon className='size-4 text-secondary-foreground shrink-0' onClick={() => setSearchbarOpen(false)} />
                </div>
                <div className="sticky top-base">
                    <SearchInput className="flex items-center gap-xs">
                        <div className="py-1 pl-2 h-10 w-full bg-secondary flex items-center flex-1 overflow-hidden rounded-md">
                            <Search className='size-5 text-secondary-foreground shrink-0' />
                            <input
                                className="pl-sm h-auto bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                                placeholder="Type a course name..."
                            />
                            <SelectCountry
                                className="w-fit"
                                triggerClassName="focus:ring-0 focus-within:ring-0 rounded-tr-none rounded-br-none"
                                contentClassName="z-[10000]"
                            />

                            <Button className="h-10 font-medium text-base rounded-tl-none rounded-bl-none" variant="tertiary" size="sm">
                                <Search />
                            </Button>
                        </div>
                    </SearchInput>

                    {/* Search Selection List */}
                    {searchListOpen && (
                        <div className="absolute inset-0 top-[110%] w-full h-fit bg-background rounded border shadow-md z-[10001]">
                            <ul className='bg-background max-h-96 overflow-y-scroll'>
                                {filteredSuggestions.length > 0 ? (
                                    filteredSuggestions.slice(0, 10).map((item, index) => (
                                        <li
                                            key={index}
                                            className={`p-xs flex items-center gap-xs hover:bg-secondary ${highlightedIndex === index ? 'bg-secondary' : ''
                                                }`}
                                            onClick={() => selectItem(item)}
                                        >
                                            <Search className='size-5 text-muted-foreground shrink-0' />
                                            <span className='line-clamp-1'>{item.title}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className='p-xs text-muted-foreground'>No results found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
