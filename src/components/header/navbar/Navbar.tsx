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
        <nav className='flex items-center gap-4 xl:gap-8'>
          {navLinks.map((link) => (
            <DropdownMenu open={openDropdown === link.name} key={link.href}>
              {link.dropdown ? (
                <DropdownMenuTrigger
                  className='flex cursor-pointer items-center space-x-1 text-gray-700 transition-colors'
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>{link.name}</span>
                  <ChevronDown className='h-4 w-4' />
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
            <DropdownMenuTrigger className='hover:bg-accent me-0 flex h-11 w-52 items-center justify-start gap-2 bg-white px-6 py-2 hover:text-white'>
              <Grid3X3 className='h-4 w-4' />
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
            <Input className='focus:border-accent h-[45px] bg-white 2xl:w-[386px]' />
            <Button
              variant='ghost'
              size='icon'
              className='hover:text-accent absolute top-1/2 right-1 -translate-y-1/2 hover:bg-transparent'
            >
              <Search className='h-5 w-5' />
            </Button>
          </div>

          {/* Shopping Cart */}
          <Button variant='ghost' size='icon' className='relative'>
            <ShoppingCart className='h-5 w-5' />
            <Badge className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center p-0 text-xs text-white'>
              0
            </Badge>
          </Button>

          {/* Log In */}
          <Link href='/login' className='hidden text-gray-700 transition-colors sm:block'>
            Log In
          </Link>

          {/* Try For Free Button */}
          <Button className='hover:bg-accent px-6 text-white capitalize'>Try For Free</Button>
        </div>
      </div>
    </div>
  );
}
