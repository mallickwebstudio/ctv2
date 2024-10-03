"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
const SiteStateContext = createContext();

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Russian",
  "Arabic",
  "Hindi",
  "Portuguese",
  "Italian",
  "Korean"
];
const countries = [
  "Online",
  "UAE",
  "USA",
  "UK",
]

const cities = [
  "City 1",
  "City 2",
  "City 3",
  "City 4",
]

const coursesList = [
  'Web Development',
  'Entrepreneurship',
  'Graphic Designing',
  'Business',
  'Research',
  'Video Editing',
  'Photo Shoot',
  'Digital Marketing',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Cybersecurity',
  'Blockchain Technology',
  'Cloud Computing',
  'UX/UI Design',
  'Mobile App Development',
  'Game Development',
  'Copywriting',
  'Financial Management',
  'Project Management',
  'Social Media Management',
  'Content Creation',
  'E-commerce',
  'SEO (Search Engine Optimization)',
  'Python Programming',
  'Public Speaking',
  'Leadership Skills'
];

const categoriesLists = [
  {
    name: "Development",
    subList: [
      {
        name: "Web Development",
        topics: [
          {
            title: "Title 1",
            href: "/"
          },
          {
            title: "Title 2",
            href: "/"
          },
          {
            title: "Title 3",
            href: "/"
          },
        ]
      },
      {
        name: "Game Development",
        topics: [
          {
            title: "Title 4",
            href: "/"
          },
          {
            title: "Title 5",
            href: "/"
          },
          {
            title: "Title 6",
            href: "/"
          },
        ]
      },
      {
        name: "App Development",
        topics: [
          {
            title: "Title 7",
            href: "/"
          },
          {
            title: "Title 8",
            href: "/"
          },
          {
            title: "Title 9",
            href: "/"
          },
        ]
      },
    ]
  },
  {
    name: "Business",
    subList: [
      {
        name: "Entrepreneurship",
        topics: [
          {
            title: "Title 10",
            href: "/"
          },
          {
            title: "Title 11",
            href: "/"
          },
          {
            title: "Title 12",
            href: "/"
          },
        ]
      },
      {
        name: "Communication",
        topics: [
          {
            title: "Title 13",
            href: "/"
          },
          {
            title: "Title 14",
            href: "/"
          },
          {
            title: "Title 15",
            href: "/"
          },
        ]
      },
      {
        name: "Management",
        topics: [
          {
            title: "Title 16",
            href: "/"
          },
          {
            title: "Title 17",
            href: "/"
          },
          {
            title: "Title 18",
            href: "/"
          },
        ]
      },
    ]
  },
]

export const SiteStateProvider = ({ children }) => {
  const [searchbarOpen, setSearchbarOpen] = useState(false)
  const [language, setLanguage] = useState(languages[0]);
  const [cartItems, setCartItems] = useState(0);
  const [categoryList, setCategoryList] = useState(categoriesLists);

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
      const fetchSearchList = async () => {
          try {
              const response = await fetch('/api/get-search-list'); // Fetch data from API
              const data = await response.json();
              setSearchList(data.data); // Set fetched data to state
          } catch (error) {
              console.error('Error fetching Categories:', error);
          }
      };

      fetchSearchList();
  }, []);


  const values = {
    searchbarOpen, setSearchbarOpen,
    countries,
    cities,
    coursesList,
    languages,
    language,
    setLanguage,
    cartItems, setCartItems,
    categoryList, setCategoryList,
    searchList
  };
  return (
    <SiteStateContext.Provider value={values}>
      {children}
    </SiteStateContext.Provider>
  );
};

export const useSiteState = () => {
  const context = useContext(SiteStateContext);
  if (context === undefined) {
    throw new Error('useSiteState must be used within a SiteStateProvider');
  }
  return context;
};
