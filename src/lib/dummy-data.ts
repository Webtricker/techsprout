import brand1 from '@/assets/img/brands/brand01.png';
import brand2 from '@/assets/img/brands/brand02.png';
import brand3 from '@/assets/img/brands/brand03.png';
import brand4 from '@/assets/img/brands/brand04.png';
import brand5 from '@/assets/img/brands/brand05.png';
import brand6 from '@/assets/img/brands/brand06.png';
import brand7 from '@/assets/img/brands/brand07.png';
import {
  ChartNoAxesCombined,
  FolderCode,
  GraduationCap,
  LayoutTemplate,
  LucideProps,
  MonitorPlay,
  NotepadText,
  Paintbrush,
  Search,
  UserCheck2,
} from 'lucide-react';
import courseImg1 from '@/assets/img/courses/courses03.jpg';
import courseImg2 from '@/assets/img/courses/courses05.jpg';
import courseImg3 from '@/assets/img/courses/courses06.jpg';
import courseImg4 from '@/assets/img/courses/courses10.jpg';
import { StaticImageData } from 'next/image';
import instructor1 from '@/assets/img/instructors/instructor01.png';
import instructor2 from '@/assets/img/instructors/instructor02.png';
import instructor3 from '@/assets/img/instructors/instructor03.png';
import instructor4 from '@/assets/img/instructors/instructor04.png';
import blogImg1 from '@/assets/img/blogs/blog_standard01.jpg';
import blogImg2 from '@/assets/img/blogs/blog_standard02.jpg';
import blogImg3 from '@/assets/img/blogs/blog_standard03.jpg';
import testimonialImg1 from '@/assets/img/testimonial/testimonial01.jpg';
import testimonialImg2 from '@/assets/img/testimonial/testimonial02.jpg';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

export const aboutUsInfo = [
  {
    title: 'expert tutors',
    number: 20000,
    icon: UserCheck2,
  },
  {
    title: 'Top Lessons',
    number: 15000,
    icon: NotepadText,
  },
  {
    title: 'Over students',
    number: 18000,
    icon: GraduationCap,
  },
  {
    title: 'Pro videos',
    number: 3200,
    icon: MonitorPlay,
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
  {
    id: 5,
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
    id: 6,
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
];

export type CategoryInfo = {
  title: string;
  courseCount: number;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
};

export const categoryInfos: CategoryInfo[] = [
  {
    title: 'Digital Marketing',
    courseCount: 5,
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Web Development',
    courseCount: 4,
    icon: FolderCode,
  },
  {
    title: 'Graphic Design',
    courseCount: 3,
    icon: Paintbrush,
  },
  {
    title: 'SEO',
    courseCount: 2,
    icon: Search,
  },
  {
    title: 'Web Design',
    courseCount: 2,
    icon: LayoutTemplate,
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

export type Blog = {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  author: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    image: blogImg1,
    title: 'Full Stack GraphQL With Next.js And Vercel',
    category: 'Web Development',
    author: 'TechSprout',
    date: 'June 22, 2023',
  },
  {
    id: 2,
    image: blogImg2,
    title: 'Design Systems That Scale: A Guide for UI/UX Teams',
    category: 'UI/UX Design',
    author: 'Creative Minds',
    date: 'July 10, 2023',
  },
  {
    id: 3,
    image: blogImg3,
    title: 'Building RESTful APIs with Node.js and Express',
    category: 'Backend Development',
    author: 'CodeCraft',
    date: 'August 5, 2023',
  },
];

export type Testimonial = {
  image: StaticImageData;
  name: string;
  occupation: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    image: testimonialImg1,
    name: 'Jane Smith',
    occupation: 'UI/UX Designer',
    message:
      'I love the variety of courses available. The instructors are knowledgeable and the content is always up-to-date.',
  },
  {
    image: testimonialImg2,
    name: 'John Doe',
    occupation: 'Software Engineer',
    message:
      'This platform has transformed my learning experience. The courses are top-notch and the community is incredibly supportive.',
  },
];
