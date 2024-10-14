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

export const SiteStateProvider = ({ children }) => {
  const [searchbarOpen, setSearchbarOpen] = useState(false)
  const [language, setLanguage] = useState(languages[0]);
  const [country, setCountry] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/api/get-country'); // Fetch from Next.js API route
        const data = await response.json();
        setCountries(data.data); // Set fetched data to state
        setSelectedCountry(data.data[0].label);
      } catch (error) {
        console.error('Error fetching Countries data:', error);
      }
    };

    fetchCountries();
  }, []);

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
    countries, setCountries,
    selectedCountry, setSelectedCountry,
    country, setCountry,
    languages,
    language,
    setLanguage,
    cartItems, setCartItems,
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
