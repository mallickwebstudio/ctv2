"use client"
import Image from 'next/image'
import React from 'react'

export default function CartCard({ data }) {
    const {
        imageUrl = "/images/common/person.jpg",
        title = "Master Python in Step by step Guide",
        creator = "Angela Yu",
        price = "99.99",
        originalPrice = "999.99",
    } = data;
    
    return (
        <div className="p-sm size-fit flex gap-base items-center group cursor-pointer">
            <div className="size-16">
                <Image
                    className="size-16 object-cover object-center border"
                    src={imageUrl}
                    width={64}
                    height={64}
                    alt="person"
                />
            </div>
            <div className="flex-1">
                <div className="line-clamp-2 leading-4 font-semibold">
                    {title}
                </div>
                <div className='text-xs text-muted-foreground line-clamp-1'>
                    {creator}
                </div>
                <div className="text-left">
                    <span className='font-bold'>${price}</span>
                    <s className="ml-1 text-sm text-muted-foreground">${originalPrice}</s>
                </div>
            </div>
        </div>
    )
}
