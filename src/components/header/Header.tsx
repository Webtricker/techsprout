'use client';
import { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import clsx from 'clsx';

export type NavLinks = {
  name: string;
  href: string;
  dropdown: boolean;
  dropdownLinks?: { name: string; href: string }[];
}[];

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Categories');
  const [navMoved, setNavMoved] = useState<boolean>(false);

  const navLinks: NavLinks = [
    { name: 'Home', href: '/', dropdown: false },
    { name: 'Courses', href: '/courses', dropdown: false },
    { name: 'Blog', href: '/blog', dropdown: false },
    { name: 'About', href: '/about', dropdown: false },
    { name: 'Contact', href: '/contact', dropdown: false },
    // {
    // name: 'Others',
    // href: '/others',
    // dropdown: true,
    //   dropdownLinks: [
    //     { name: 'Blog', href: '/blog' },
    //     { name: 'Contact', href: '/contact' },
    //     { name: 'About', href: '/about' },
    //   ],
    // },
  ];

  useEffect(() => {
    const navStateHandler = () => {
      if (window.scrollY > 500) {
        setNavMoved(true);
      } else {
        setNavMoved(false);
      }
    };

    window.addEventListener('scroll', navStateHandler);

    return () => window.removeEventListener('scroll', navStateHandler);
  }, []);

  return (
    <header
      className={clsx(
        'right-0 left-0 z-50 mx-auto px-5 duration-500',
        navMoved
          ? 'bg-primary/10 fixed top-0 shadow-2xl backdrop-blur-2xl'
          : 'absolute top-0 max-w-[1670]'
      )}
    >
      <Navbar
        navLinks={navLinks}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </header>
  );
}
