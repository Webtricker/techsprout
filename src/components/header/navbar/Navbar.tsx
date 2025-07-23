'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, ShoppingCart, ChevronDown, Grid3X3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import { NavLinks } from '../Header';
import { Input } from '@/components/ui/input';

export default function Navbar({
  navLinks,
  setSelectedCategory,
  selectedCategory,
}: {
  navLinks: NavLinks;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const categories: string[] = ['All', 'Web development', 'Digital Marketing', 'Freelancing'];

  return (
    <div className='py-6'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='me-2'>
          <Image width={200} height={100} src={logo} alt='tech sprout school logo' />
        </Link>

        {/* Navigation Menu */}
        <nav className='flex items-center xl:gap-8 gap-4'>
          {navLinks.map((link) => (
            <DropdownMenu open={openDropdown === link.name} key={link.href}>
              {link.dropdown ? (
                <DropdownMenuTrigger
                  className='flex items-center space-x-1 text-gray-700 cursor-pointer transition-colors'
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

        <div className='flex items-center space-x-4'>
          {/* Categories Button */}
          <DropdownMenu>
            <DropdownMenuTrigger className='me-0 flex justify-start items-center gap-2 px-6 w-52 py-2 hover:text-white bg-white hover:bg-accent h-11'>
              <Grid3X3 className='w-4 h-4' />
              <span>{selectedCategory}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-52'>
              {categories.map((category, idx) => (
                <DropdownMenuItem onClick={() => setSelectedCategory(category)} key={idx}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <div className='relative'>
            <Input className='focus:border-accent 2xl:w-[386px] h-[45px] bg-white' />
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-1 top-1/2 -translate-y-1/2 hover:bg-transparent hover:text-accent'
            >
              <Search className='w-5 h-5' />
            </Button>
          </div>

          {/* Shopping Cart */}
          <Button variant='ghost' size='icon' className='relative'>
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
          <Button className='hover:bg-accent text-white px-6'>Try For Free</Button>
        </div>
      </div>
    </div>
  );
}
