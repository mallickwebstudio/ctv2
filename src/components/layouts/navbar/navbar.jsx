"use client"
import { useState } from 'react';
import { useSiteState } from '@/hooks/site-state-provider';
import FullSearchBox from '@/components/layouts/navbar/full-search-box';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import MobileSidebarNav from './mobile-sidebar-nav';


export default function Navbar() {
  const { searchbarOpen, setSearchbarOpen } = useSiteState();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <DesktopNav />

      {/* Mobile Nav */}
      <MobileNav setIsNavbarOpen={setIsNavbarOpen} setSearchbarOpen={setSearchbarOpen} />

      {/* Search Area */}
      {searchbarOpen && <FullSearchBox />}

      {/* Mobile Sidebar Nav */}
      {isNavbarOpen && <MobileSidebarNav setIsNavbarOpen={setIsNavbarOpen} />}
    </>
  )
}
