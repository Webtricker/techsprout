'use client';
import { useState } from 'react';
import Navbar from './navbar/Navbar';

export type NavLinks = {
  name: string;
  href: string;
  dropdown: boolean;
  dropdownLinks?: { name: string; href: string }[];
}[];

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Categories');

  const navLinks: NavLinks = [
    { name: 'Home', href: '/', dropdown: false },
    { name: 'Courses', href: '/courses', dropdown: false },
    { name: 'Blog', href: '/blog', dropdown: false },
    { name: 'About', href: '/about', dropdown: false },
    { name: 'Contact', href: '/contact', dropdown: false },
    {
      name: 'Others',
      href: '/others',
      dropdown: true,
      dropdownLinks: [
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },
      ],
    },
  ];

  return (
    <header className='max-w-[1670px] mx-auto px-5'>
      <Navbar
        navLinks={navLinks}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </header>
  );
}
