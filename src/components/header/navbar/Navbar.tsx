import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, Grid3X3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.jpeg';
import { NavLinks } from '../Header';

export default function Navbar({ navLinks }: { navLinks: NavLinks }) {
  return (
    <nav className='flex items-center justify-between py-4'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src={logo} alt='Logo' width={80} height={80} />
      </Link>

      {/* Navigation Menu */}
      <DropdownMenu>
        {navLinks.map((link) => (
          <div key={link.href}>
            {link.dropdown ? (
              <DropdownMenuTrigger>{link.name}</DropdownMenuTrigger>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
            {link.dropdown && (
              <DropdownMenuContent>
                {link.dropdownLinks?.map((dropdownLink) => (
                  <DropdownMenuItem key={dropdownLink.href}>
                    <Link href={dropdownLink.href}>{dropdownLink.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}
          </div>
        ))}
      </DropdownMenu>
    </nav>
  );
}
