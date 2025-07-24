import brand1 from '@/assets/img/brands/brand01.png';
import brand2 from '@/assets/img/brands/brand02.png';
import brand3 from '@/assets/img/brands/brand03.png';
import brand4 from '@/assets/img/brands/brand04.png';
import brand5 from '@/assets/img/brands/brand05.png';
import brand6 from '@/assets/img/brands/brand06.png';
import brand7 from '@/assets/img/brands/brand07.png';
import { GraduationCap } from 'lucide-react';
import courseImg1 from '@/assets/img/courses03.jpg';
import courseImg2 from '@/assets/img/courses05.jpg';
import courseImg3 from '@/assets/img/courses06.jpg';
import courseImg4 from '@/assets/img/courses10.jpg';
import { StaticImageData } from 'next/image';

export const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

export const aboutUsInfo = [
  {
    title: 'expert tutors',
    number: 20000,
    icon: GraduationCap,
  },
  {
    title: 'expert tutors',
    number: 20000,
    icon: GraduationCap,
  },
  {
    title: 'expert tutors',
    number: 20000,
    icon: GraduationCap,
  },
  {
    title: 'expert tutors',
    number: 20000,
    icon: GraduationCap,
  },
];

export type Course = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  price: number;
  badge: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, and React from scratch',
    image: courseImg1,
    price: 99,
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master Python, pandas, and machine learning basics',
    image: courseImg2,
    price: 129,
    badge: 'New',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Create beautiful and user-friendly interfaces',
    image: courseImg3,
    price: 89,
    badge: 'Trending',
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    description: 'Create beautiful and user-friendly interfaces',
    image: courseImg4,
    price: 89,
    badge: 'Trending',
  },
];
