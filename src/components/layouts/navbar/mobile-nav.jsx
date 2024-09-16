import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button';
import CartButton from './cart-button';
import { cn } from '@/lib/utils';

export default function MobileNav({ setIsNavbarOpen, setSearchbarOpen }) {

    return (
        <div className="block lg:hidden shadow-md px-base py-sm">
            <div className="flex-between gap-base">
                <div className="w-fit flex">
                    <div className={cn(buttonVariants({ variant: 'outline' }), "aspect-square overflow-hidden")} onClick={() => setIsNavbarOpen(true)} >
                        <Menu className='size-6 shrink-0' />
                    </div>
                    <div className='size-6' />
                </div>

                {/* Logo */}
                <div className="w-full flex-center flex-1">
                    <Link href="/">
                        <Image
                            className='-mt-3 h-[4.5rem] w-fit object-contain'
                            src="/logo-horizontal.png"
                            width={200}
                            height={100}
                            alt='Logo'
                        />
                        <span className="sr-only">Brand Logo</span>
                    </Link>
                </div>

                <div className="flex-between gap-sm">
                    {/* Search */}
                    <div className={cn(buttonVariants({ variant: 'outlineIcon' }), "p-2 aspect-square")} onClick={() => setSearchbarOpen(true)}>
                        <Search className='size-6 aspect-square shrink-0' />
                    </div>

                    {/* Cart */}
                    <CartButton className={cn(buttonVariants({ variant: 'outlineIcon' }), "p-2 relative aspect-square")} />
                </div>
            </div>
        </div>
    )
}
