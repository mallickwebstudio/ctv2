"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { useData } from '@/hooks/data-provider';
import CartCard from '@/components/card/cart-card';
import { cn } from '@/lib/utils';

export default function CartButton({ children, className }) {
    const { cartItems, courses } = useData();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Filter the course data based on cartItems
    const cartItemsDatas = courses.flatMap(courseCategory =>
        courseCategory.items.filter(item => cartItems.includes(item.id))
    );

    // Calculate total price and original price for the cart items
    const totalPrice = cartItemsDatas.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    const totalOriginalPrice = cartItemsDatas.reduce((total, item) => total + parseFloat(item.originalPrice), 0).toFixed(2);

    // Prevents rendering on the server
    if (!isMounted) {
        return (
            <Link className={cn("relative block peer hover:text-active", className)} href="/">
                {children || <ShoppingCart className='size-6' />}
                <span className="sr-only">Shopping Cart</span>
            </Link>
        )
    }

    return (
        <div className='relative'>
            <Link className={cn("relative block peer hover:text-active", className)} href="/">
                {cartItems.length > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 aspect-square flex-center text-sm bg-primary text-primary-foreground font-bold rounded-full">
                        {cartItems.length}
                    </div>
                )}
                {children || <ShoppingCart className='size-6' />}
                <span className="sr-only">Shopping Cart</span>
            </Link>

            <div className="hidden md:peer-hover:block hover:block absolute top-[100%] right-0 w-72">
                <div className="h-2xl" />
                {cartItems.length > 0
                    ? (
                        <>
                            <div className="max-h-96 bg-background shadow-md divide-y rounded-md overflow-y-scroll">
                                {cartItemsDatas.map((item) => (
                                    <CartCard data={item} key={item.id + "NavCart"} />
                                ))}
                            </div>
                            <div className="p-base bg-background border-t shadow-md">
                                {/* <div className="text-left text-xl leading-6 font-bold">
                                    <span>Total: ${totalPrice}</span>
                                    <s className="ml-1 text-base text-muted-foreground">${totalOriginalPrice}</s>
                                </div> */}
                                <Link className={cn(buttonVariants({ variant: "tertiary" }), "mt-xs text-xl w-full")} href="/">
                                    Go To Cart
                                </Link>
                            </div>
                        </>
                    )
                    : (
                        <div className="p-sm bg-background shadow-md text-center">
                            <p>Your cart is empty.</p>
                            <Link className='block mt-base text-link font-bold' href="/">Keep Shopping</Link>
                        </div>
                    )}
            </div>
        </div>
    );
}
