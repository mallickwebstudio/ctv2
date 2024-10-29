"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { datas } from "@/lib/datas/courseDatas";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const LOCAL_STORAGE_CART_ITEMS_KEY = "CT.Cart-Items-test1";

    const [courses, setCourses] = useState(datas);
    const [cartCourses, setCartCourses] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY);
            return storedCartItems ? JSON.parse(storedCartItems) : [];
        }
        return [];
    });

    useEffect(() => {
        if (cartItems.length > 0) {
            const p_ids = cartItems.join(",");
            fetchCartItems(p_ids);
        }
    }, [cartItems]);

    const fetchCartItems = async (p_ids) => {
        try {
            const response = await fetch('/api/get-cart-items', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ p_ids })
            });
            const data = await response.json();
            setCartCourses(data.data); 
            console.log(data.data)
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const addToCart = (id) => {
        setCartItems(prevItems => {
            if (!prevItems.includes(id)) {
                const updatedCartItems = [...prevItems, id];
                localStorage.setItem(LOCAL_STORAGE_CART_ITEMS_KEY, JSON.stringify(updatedCartItems));
                return updatedCartItems;
            }
            return prevItems;
        });
    };

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
