"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { datas } from "@/lib/datas/courseDatas";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const LOCAL_STORAGE_CART_ITEMS_KEY = "CT.Cart-Items";

    const [courses, setCourses] = useState(datas);
    const [cartCourses, setCartCourses] = useState([]);

    // Initialize cartItems state, loading from local storage if available
    const [cartItems, setCartItems] = useState(() => {
        // Check local storage for cart items on load
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY);
            return storedCartItems ? JSON.parse(storedCartItems) : [];
        }
        return [];
    });

    // Function to add an item to the cart
    const addToCart = (id) => {
        setCartItems(prevItems => {
            const updatedCartItems = [...prevItems, id];
            localStorage.setItem(LOCAL_STORAGE_CART_ITEMS_KEY, JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems(prevItems => {
            const updatedCartItems = prevItems.filter(itemId => itemId !== id);
            localStorage.setItem(LOCAL_STORAGE_CART_ITEMS_KEY, JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    const values = {
        courses, setCourses,
        cartItems, setCartItems,
        addToCart, removeFromCart,
        cartCourses,
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
