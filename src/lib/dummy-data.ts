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
import instructor1 from '@/assets/img/instructor01.png';
import instructor2 from '@/assets/img/instructor02.png';
import instructor3 from '@/assets/img/instructor03.png';
import instructor4 from '@/assets/img/instructor04.png';

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
  image: StaticImageData;
  authorImage: StaticImageData;
  category: string;
  lessons: number;
  duration: string;
  students: number;
  title: string;
  ratingsCount: number;
  author: string;
  price: number;
};

export const courses: Course[] = [
  {
    id: 1,
    image: courseImg3,
    authorImage: courseImg1,
    category: 'Digital Marketing',
    lessons: 16,
    duration: '15h 20m',
    students: 3,
    title: 'The Complete Guide to the Global Markets',
    ratingsCount: 1,
    author: 'Eduvalt',
    price: 82,
  },
  {
    id: 2,
    image: courseImg2,
    category: 'Web Development',
    authorImage: courseImg1,
    lessons: 24,
    duration: '20h 45m',
    students: 15,
    title: 'Mastering React & Next.js from Scratch',
    ratingsCount: 12,
    author: 'CodeWithJay',
    price: 119,
  },
  {
    id: 3,
    image: courseImg3,
    authorImage: courseImg1,
    category: 'Graphic Design',
    lessons: 12,
    duration: '9h 30m',
    students: 7,
    title: 'Photoshop Essentials for Beginners',
    ratingsCount: 5,
    author: 'DesignLab',
    price: 59,
  },
  {
    id: 4,
    image: courseImg4,
    authorImage: courseImg1,
    category: 'Video Editing',
    lessons: 30,
    duration: '25h 10m',
    students: 22,
    title: 'The Ultimate Python for Data Analysis Bootcamp',
    ratingsCount: 18,
    author: 'Dr. Alex Morgan',
    price: 134,
  },
];

export type CategoryInfo = {
  title: string;
  courseCount: number;
};

export const categoryInfos: CategoryInfo[] = [
  {
    title: 'Digital Marketing',
    courseCount: 5,
  },
  {
    title: 'Digital Marketing',
    courseCount: 5,
  },
  {
    title: 'Digital Marketing',
    courseCount: 5,
  },
  {
    title: 'Digital Marketing',
    courseCount: 5,
  },
  {
    title: 'Digital Marketing',
    courseCount: 5,
  },
];

export type Instructor = {
  id: number;
  name: string;
  image: StaticImageData;
  category: string;
  socials: string[];
};

export const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Robert Smith',
    image: instructor1,
    category: 'Graphic Designer',
    socials: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
  },
  {
    id: 2,
    name: 'Emily Johnson',
    image: instructor2,
    category: 'UI/UX Designer',
    socials: [
      'www.facebook.com/emilyjohnson',
      'www.x.com/emilyux',
      'www.instagram.com/emily.designs',
      'www.linkedin.com/in/emilyjohnson',
    ],
  },
  {
    id: 3,
    name: 'David Lee',
    image: instructor3,
    category: 'Frontend Developer',
    socials: [
      'www.facebook.com/davidlee',
      'www.x.com/devdavid',
      'www.instagram.com/codewithdavid',
      'www.linkedin.com/in/davidlee',
    ],
  },
  {
    id: 4,
    name: 'Sophia Turner',
    image: instructor4,
    category: 'Digital Marketer',
    socials: [
      'www.facebook.com/sophiaturner',
      'www.x.com/marketingsophia',
      'www.instagram.com/sophiamarkets',
      'www.linkedin.com/in/sophiaturner',
    ],
  },
];
