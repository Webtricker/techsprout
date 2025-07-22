import Navbar from './navbar/Navbar';

export type NavLinks = {
  name: string;
  href: string;
  dropdown: boolean;
  dropdownLinks?: { name: string; href: string }[];
}[];

export default function Header() {
  const navLinks: NavLinks = [
    { name: 'Home', href: '/', dropdown: false },
    { name: 'Courses', href: '/courses', dropdown: false },
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
    <header className='max-w-[1650px] mx-auto px-4'>
      <Navbar navLinks={navLinks} />
    </header>
  );
}
