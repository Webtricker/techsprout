'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, ShoppingCart, ChevronDown, Grid3X3, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.jpeg';
import { NavLinks } from '../Header';

export default function Navbar({ navLinks }: { navLinks: NavLinks }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <Image width={80} height={80} src={logo} alt='tech sprout school logo' />
        </Link>

        {/* Navigation Menu */}
        <nav className='hidden lg:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <DropdownMenu open={openDropdown === link.name} key={link.href}>
              {link.dropdown ? (
                <DropdownMenuTrigger
                  className='flex items-center space-x-1 text-gray-700  transition-colors'
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>{link.name}</span>
                  <ChevronDown className='w-4 h-4' />
                </DropdownMenuTrigger>
              ) : (
                <Link href={link.href}>{link.name}</Link>
              )}
              {link.dropdown && (
                <DropdownMenuContent
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdownLinks?.map((dropdownLink) => (
                    <DropdownMenuItem key={dropdownLink.href}>
                      <Link href={dropdownLink.href}>{dropdownLink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className='flex items-center space-x-4'>
          {/* Categories Button */}
          <Button
            variant='outline'
            className='hidden md:flex items-center space-x-2 text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent'
          >
            <Grid3X3 className='w-4 h-4' />
            <span>Categories</span>
          </Button>

          {/* Search */}
          <Button variant='ghost' size='icon' className='text-gray-600 '>
            <Search className='w-5 h-5' />
          </Button>

          {/* Shopping Cart */}
          <Button variant='ghost' size='icon' className='relative text-gray-600 '>
            <ShoppingCart className='w-5 h-5' />
            <Badge className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0  text-white text-xs'>
              0
            </Badge>
          </Button>

          {/* Log In */}
          <Link href='/login' className='hidden sm:block text-gray-700  transition-colors'>
            Log In
          </Link>

          {/* Try For Free Button */}
          <Button className=' hover:bg-blue-700 text-white px-6'>Try For Free</Button>
        </div>
      </div>
    </div>
  );
}
