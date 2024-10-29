"use client"
import { useData } from '@/hooks/data-provider';
import { baseUrl } from '@/lib/datas/api';
import { X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function CartCard({ data }) {
    const {
        courseId = "#",
        courseHref = "/",
        thumbnailUrl = "/images/common/error.png",
        courseName = "Master Python in Step by step Guide",
        instructorName = "Angela Yu",
        price = "99.99",
        originalPrice = "999.99",
    } = data;

    const { removeFromCart } = useData();


    return (
        <div className="relative w-full">
            <Link className="relative p-sm w-full size-fit flex gap-base items-center group cursor-pointer" href={courseHref}>
                <div className="size-16">
                    <Image
                        className="size-16 object-cover object-center border"
                        src={thumbnailUrl != null ? (thumbnailUrl.includes(baseUrl) ? thumbnailUrl : `${baseUrl + thumbnailUrl}`) : thumbnailUrl}
                        width={64}
                        height={64}
                        alt="person"
                    />
                </div>
                <div className="flex-1">
                    <div className="line-clamp-2 leading-4 font-semibold">
                        {courseName}
                    </div>
                    <div className='text-xs text-muted-foreground line-clamp-1'>
                        {instructorName}
                    </div>
                    <div className="text-left">
                        <span className='font-bold'>${price}</span>
                        <s className="ml-1 text-sm text-muted-foreground">${originalPrice}</s>
                    </div>
                </div>
            </Link>

            <div className="absolute top-xs right-xs text-foreground/70 hover:text-foreground cursor-pointer" onClick={() => removeFromCart(courseId)}>
                <X className=' size-base' />
            </div>
        </div>
    )
}
