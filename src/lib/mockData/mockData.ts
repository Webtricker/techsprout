import testimonialImg1 from '@/assets/img/testimonial/testimonial01.jpg';
import testimonialImg2 from '@/assets/img/testimonial/testimonial02.jpg';
import brand1 from '@/assets/img/brands/brand01.png';
import brand2 from '@/assets/img/brands/brand02.png';
import brand3 from '@/assets/img/brands/brand03.png';
import brand4 from '@/assets/img/brands/brand04.png';
import brand5 from '@/assets/img/brands/brand05.png';
import brand6 from '@/assets/img/brands/brand06.png';
import brand8 from '@/assets/img/brands/brand08.png';
import brand9 from '@/assets/img/brands/brand09.png';
import {
  User,
  Course,
  FAQ,
  Enrolment,
  Review,
  Blog,
  Cart,
  Order,
  Question,
  Instructor,
  Subscriber,
  Testimonial,
} from './mockDataTypes';
import courseImg1 from '@/assets/img/courses/courses03.jpg';
import courseImg2 from '@/assets/img/courses/courses05.jpg';
import courseImg3 from '@/assets/img/courses/courses06.jpg';
import courseImg4 from '@/assets/img/courses/courses10.jpg';
import instructor1 from '@/assets/img/instructors/instructor01.png';
import instructor2 from '@/assets/img/instructors/instructor02.png';
import instructor3 from '@/assets/img/instructors/instructor03.png';
import instructor4 from '@/assets/img/instructors/instructor04.png';
import blogImg1 from '@/assets/img/blogs/blog_standard01.jpg';
import blogImg2 from '@/assets/img/blogs/blog_standard02.jpg';
import blogImg3 from '@/assets/img/blogs/blog_standard03.jpg';
import { GraduationCap, MonitorPlay, NotepadText, UserCheck2 } from 'lucide-react';

// Brands
export const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand8, brand9];

// Testimonials
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

// Discover section data
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

// Users
export const users: User[] = [
  {
    _id: 'u1',
    name: 'Mosaraf Hossain',
    username: 'mosaraf',
    email: 'mosaraf@example.com',
    phone: '01710000001',
    password: 'hashed123',
    occupation: 'CEO and Founder',
    bio: 'CEO/Web Developer',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor1.src,
    role: 'top-instructor',
    registeredAt: new Date().toISOString(),
    wishlist: ['c2'],
  },
  {
    _id: 'u2',
    name: 'Abd Al Muktadir',
    username: 'minar',
    email: 'minar@example.com',
    phone: '01710000002',
    password: 'hashed456',
    occupation: 'COO and Digital Marketing',
    bio: 'COO/Digital Marketing',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor2.src,
    role: 'top-instructor',
    registeredAt: new Date().toISOString(),
    wishlist: ['c1'],
  },
  {
    _id: 'u3',
    name: 'Cathy Lee',
    username: 'cathyl',
    email: 'cathy@example.com',
    phone: '01710000003',
    password: 'hashed789',
    occupation: 'Data Analyst',
    bio: 'Works with data at a fintech company',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor3.src,
    role: 'admin',
    registeredAt: new Date().toISOString(),
    wishlist: ['c4'],
  },
  {
    _id: 'u4',
    name: 'David Kim',
    username: 'davidk',
    email: 'david@example.com',
    phone: '01710000004',
    password: 'hashed101',
    occupation: 'Product Manager',
    bio: 'Manages software projects',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor4.src,
    role: 'user',
    registeredAt: new Date().toISOString(),
    wishlist: [],
  },
  {
    _id: 'u5',
    name: 'Eva Green',
    username: 'evagreen',
    email: 'eva@example.com',
    phone: '01710000005',
    password: 'hashed102',
    occupation: 'Full Stack Developer',
    bio: 'Freelancer',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor1.src,
    role: 'user',
    registeredAt: new Date().toISOString(),
    wishlist: ['c5'],
  },
  {
    _id: 'u6',
    name: 'Md. Tahazzat',
    username: 'frankm',
    email: 'tahazzat@example.com',
    phone: '01710000006',
    password: 'hashed103',
    occupation: 'Full Stack Developer',
    bio: 'Full Stack Developer',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor3.src,
    role: 'top-instructor',
    registeredAt: new Date().toISOString(),
    wishlist: ['c6', 'c7'],
  },
  {
    _id: 'u7',
    name: 'Grace Wilson',
    username: 'gracew',
    email: 'grace@example.com',
    phone: '01710000007',
    password: 'hashed104',
    occupation: 'Marketing Manager',
    bio: 'Digital marketing enthusiast',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor3.src,
    role: 'user',
    registeredAt: new Date().toISOString(),
    wishlist: ['c8'],
  },
  {
    _id: 'u8',
    name: 'Ahadul Islam',
    username: 'ahad',
    email: 'henry@example.com',
    phone: '01710000008',
    password: 'hashed105',
    occupation: 'Full Stack Developer',
    bio: 'Full Stack Developer',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor4.src,
    role: 'top-instructor',
    registeredAt: new Date().toISOString(),
    wishlist: ['c9'],
  },
  {
    _id: 'u9',
    name: 'Ivy Chen',
    username: 'ivyc',
    email: 'ivy@example.com',
    phone: '01710000009',
    password: 'hashed106',
    occupation: 'QA Engineer',
    bio: 'Automation testing specialist',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor1.src,
    role: 'user',
    registeredAt: new Date().toISOString(),
    wishlist: ['c10'],
  },
  {
    _id: 'u10',
    name: 'Jack Davis',
    username: 'jackd',
    email: 'jack@example.com',
    phone: '01710000010',
    password: 'hashed107',
    occupation: 'AI Engineer',
    bio: 'Machine learning and AI researcher',
    socialLinks: ['www.facebook.com', 'www.x.com', 'www.instagram.com', 'www.linkedin.com'],
    image: instructor2.src,
    role: 'user',
    registeredAt: new Date().toISOString(),
    wishlist: ['c1', 'c3'],
  },
];

// Courses
export const courses: Course[] = [
  {
    _id: 'c1',
    title: 'Intro to JavaScript',
    category: 'Web Development',
    duration: '10 hours',
    price: 29.99,
    isFree: false,
    thumbnail: courseImg1.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4',
    ],
    featured: true,
    instructor: 'u2',
    reviews: ['r1', 'r11', 'r21'],
    enrolments: ['e1', 'e11', 'e21'],
    description:
      "Dive into the world of web development with our 'Intro to JavaScript' course. This comprehensive program is designed for absolute beginners, providing a solid foundation in the core concepts of JavaScript, the language that powers dynamic and interactive websites. You'll start with the basics, including variables, data types, and operators, before moving on to more complex topics like control structures, functions, and arrays. Our hands-on approach ensures you'll be writing code from day one, with practical exercises and projects that reinforce your learning. We'll also cover essential concepts like the Document Object Model (DOM), which allows you to manipulate web page content and create engaging user experiences. By the end of this course, you'll have the skills to build simple, yet powerful, web applications and be well-prepared to tackle more advanced JavaScript frameworks. This course is your first step towards becoming a proficient web developer, equipping you with the fundamental knowledge to bring your ideas to life on the web.",
    audience: [
      'Aspiring web developers who are new to programming.',
      'Students and individuals looking to start a career in technology.',
      'Designers who want to add interactive elements to their websites.',
      'Hobbyists interested in learning how websites work under the hood.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A code editor (like VS Code, free).',
    ],
    resources: [
      'Interactive coding challenges and quizzes.',
      'Downloadable course materials and code examples.',
      'Access to a private online community for support.',
      'Instructor-led Q&A sessions.',
    ],
    keyLearningPoints: [
      'Understanding the fundamental syntax and concepts of JavaScript.',
      'Manipulating the Document Object Model (DOM) to create dynamic content.',
      'Working with variables, data types, and functions.',
      'Implementing control flow and handling errors in your code.',
      'Building a simple web application from start to finish.',
    ],
  },
  {
    _id: 'c2',
    title: 'Advanced CSS',
    category: 'Web Development',
    duration: '15 hours',
    price: 39.99,
    isFree: false,
    thumbnail: courseImg2.src,
    demoVideo: 'https://www.w3schools.com/html/movie.mp4',
    lessons: ['https://www.w3schools.com/html/movie.mp4'],
    featured: false,
    instructor: 'u2',
    reviews: ['r2', 'r12', 'r22'],
    enrolments: ['e2', 'e12', 'e22'],
    description:
      "Take your web design skills to the next level with our 'Advanced CSS' course. This program is for developers who already have a basic understanding of CSS and are ready to master modern techniques and best practices. We'll explore advanced layout systems like CSS Grid and Flexbox in detail, teaching you how to create complex, responsive, and maintainable designs with ease. The course covers a wide range of topics, including advanced selectors, custom properties (CSS variables), and preprocessors like Sass. You'll learn how to create stunning animations and transitions, giving your websites a polished, professional feel. We'll also dive into responsive design principles, ensuring your sites look great on any device, from desktops to mobile phones. With practical projects that challenge you to apply what you've learned, you'll gain the confidence to build visually impressive and highly functional user interfaces. This course is essential for any front-end developer looking to stand out in the competitive world of web design.",
    audience: [
      'Front-end developers with a basic understanding of CSS.',
      'Web designers who want to build more complex and responsive layouts.',
      'Individuals looking to improve their UI/UX skills.',
      'Professionals who want to master modern CSS techniques like Flexbox and Grid.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A text editor.',
      'Basic knowledge of HTML and CSS.',
    ],
    resources: [
      'Project files and starter code for hands-on exercises.',
      'Reference guides for CSS properties and selectors.',
      'Examples of advanced CSS animations and transitions.',
      'Video tutorials and code-along sessions.',
    ],
    keyLearningPoints: [
      'Mastering CSS Flexbox and Grid for powerful layouts.',
      'Creating responsive designs with media queries and mobile-first approaches.',
      'Using CSS custom properties (variables) for scalable design systems.',
      'Implementing complex animations and transitions for improved user experience.',
      'Writing cleaner and more maintainable CSS code with preprocessors like Sass.',
    ],
  },
  {
    _id: 'c3',
    title: 'React Basics',
    category: 'Web Development',
    duration: '8 hours',
    price: 0,
    isFree: true,
    thumbnail: courseImg3.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: ['https://www.w3schools.com/html/mov_bbb.mp4'],
    featured: true,
    instructor: 'u5',
    reviews: ['r3', 'r13', 'r23'],
    enrolments: ['e3', 'e13', 'e23'],
    description:
      "Unlock the power of modern front-end development with our free 'React Basics' course. This introductory program is perfect for developers who are new to the React ecosystem and want to learn how to build single-page applications efficiently. We'll guide you through the fundamental concepts of React, starting with components, JSX, and props. You'll learn how to manage state and handle user interactions, which are crucial for creating dynamic web interfaces. The course provides a hands-on learning experience with practical examples and small projects that solidify your understanding. We'll cover the virtual DOM, component lifecycle, and how to use popular hooks like `useState` and `useEffect`. By the end of this course, you'll be able to create a functional and interactive React application from scratch. This free offering is an excellent opportunity to gain a valuable skill that is highly sought after by employers worldwide, setting you on the path to a rewarding career in web development.",
    audience: [
      'Developers with a basic understanding of HTML, CSS, and JavaScript.',
      'Students and professionals aiming for a career in front-end development.',
      'Anyone interested in learning one of the most popular JavaScript libraries.',
    ],
    requirements: [
      'A computer with Node.js and a code editor installed.',
      'An internet connection.',
      'Familiarity with JavaScript fundamentals.',
    ],
    resources: [
      'Interactive coding exercises within a React environment.',
      'Templates and boilerplate code for your first React projects.',
      'Community forum for questions and peer support.',
      'Detailed explanations of core React concepts.',
    ],
    keyLearningPoints: [
      'Understanding the component-based architecture of React.',
      'Working with JSX to write declarative UI code.',
      'Managing component state and props for dynamic applications.',
      'Using React Hooks like `useState` and `useEffect` effectively.',
      'Building a complete, interactive React application from the ground up.',
    ],
  },
  {
    _id: 'c4',
    title: 'Figma for UI/UX Design',
    category: 'Graphics Design',
    duration: '20 hours',
    price: 59.99,
    isFree: false,
    thumbnail: courseImg4.src,
    demoVideo: 'https://www.w3schools.com/html/movie.mp4',
    lessons: ['https://www.w3schools.com/html/movie.mp4'],
    featured: false,
    instructor: 'u3',
    reviews: ['r4', 'r14', 'r24'],
    enrolments: ['e4', 'e14', 'e24'],
    description:
      "Become a master of modern design with our 'Figma for UI/UX Design' course. Figma is the industry-standard tool for collaborative interface design, and this course will teach you everything you need to know to create stunning and functional user interfaces and user experiences. We'll start with the fundamentals of the Figma interface, including frames, shapes, and text tools. You'll learn how to create and manage design systems, using components, variants, and auto-layout to build scalable and consistent designs. The course covers key UI/UX principles, such as typography, color theory, and wireframing, to help you create user-centered designs. We'll also explore prototyping and collaboration features, allowing you to create interactive prototypes and work seamlessly with other designers and developers. With hands-on projects and real-world case studies, you'll build a professional portfolio piece that demonstrates your ability to design beautiful and effective digital products. This course is perfect for aspiring UI/UX designers, graphic designers, and front-end developers who want to take control of their design workflow.",
    audience: [
      'Aspiring UI/UX designers and graphic designers.',
      'Product managers and developers who want to understand the design process.',
      'Entrepreneurs and business owners creating their own digital products.',
      'Individuals who want to master Figma, the industry-standard design tool.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A free Figma account.',
    ],
    resources: [
      'Practical projects to build a professional portfolio.',
      'Templates and design assets to get started quickly.',
      'Access to a private community for design feedback.',
      'Case studies of real-world UI/UX projects.',
    ],
    keyLearningPoints: [
      'Mastering the Figma interface and its essential tools.',
      'Building scalable design systems with components and variants.',
      'Applying UI/UX principles to create user-centered designs.',
      'Creating interactive prototypes to test user flows.',
      'Collaborating effectively with teams on a single design file.',
    ],
  },
  {
    _id: 'c5',
    title: 'WordPress Web Design',
    category: 'Web Design',
    duration: '12 hours',
    price: 19.99,
    isFree: false,
    thumbnail: courseImg1.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: ['https://www.w3schools.com/html/mov_bbb.mp4'],
    featured: true,
    instructor: 'u2',
    reviews: ['r5', 'r15', 'r25'],
    enrolments: ['e5', 'e15', 'e25'],
    description:
      "Launch your career in web design with our practical 'WordPress Web Design' course. WordPress powers over 40% of the internet, making it an essential skill for any web professional. This course is designed for beginners and will walk you through the entire process of building a professional website from scratch without writing a single line of code. You'll learn how to set up WordPress, choose and customize themes, and use powerful plugins to add functionality like e-commerce, contact forms, and SEO. We'll cover the fundamentals of site structure, navigation, and content management, ensuring you can build websites that are both user-friendly and easy to maintain. By the end of the course, you'll be able to create a fully functional, responsive, and visually appealing website for a business or personal portfolio. This course provides a fast and efficient path to becoming a freelance web designer or starting your own digital agency, giving you the skills to meet the high demand for WordPress expertise.",
    audience: [
      'Aspiring freelance web designers.',
      'Small business owners who want to build their own website.',
      'Marketers who need to manage and update WordPress sites.',
      'Individuals with no coding experience who want to create websites.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A domain name and hosting (optional, but recommended).',
    ],
    resources: [
      'Step-by-step video tutorials on setting up WordPress.',
      'Recommendations for free and premium themes and plugins.',
      'Checklists for launching a professional website.',
      'Templates for business and portfolio websites.',
    ],
    keyLearningPoints: [
      'Setting up and configuring a new WordPress installation.',
      'Customizing themes and creating professional-looking pages.',
      'Using plugins to add essential functionality like contact forms and SEO.',
      'Building a responsive and user-friendly website without code.',
      'Understanding the fundamentals of content management in WordPress.',
    ],
  },
  {
    _id: 'c6',
    title: 'Advanced SEO Techniques',
    category: 'SEO',
    duration: '25 hours',
    price: 34.99,
    isFree: false,
    thumbnail: courseImg2.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4',
    ],
    featured: true,
    instructor: 'u6',
    reviews: ['r6', 'r16', 'r26'],
    enrolments: ['e6', 'e16', 'e26'],
    description:
      "Master the art and science of getting your website to the top of search engine results with our 'Advanced SEO Techniques' course. This program is for digital marketers, website owners, and developers who have a basic understanding of SEO and want to learn advanced strategies to dominate their niche. We'll go beyond the basics of keywords and on-page optimization to explore technical SEO, including site architecture, structured data, and Core Web Vitals. You'll learn how to perform comprehensive competitor analysis, build a powerful link-building strategy, and master the art of content marketing for organic growth. We'll also cover the latest algorithm updates and how to adapt your strategy to stay ahead of the curve. The course includes hands-on projects where you'll audit a live website and develop a full-scale SEO plan, giving you the practical experience needed to deliver real results. By the end of this course, you'll have the expertise to drive significant organic traffic and increase your website's visibility and authority.",
    audience: [
      'Digital marketers and SEO professionals with foundational knowledge.',
      'Website owners and bloggers who want to increase organic traffic.',
      'Developers who need to implement technical SEO best practices.',
      'Marketing managers responsible for a company’s online visibility.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A basic understanding of SEO principles.',
    ],
    resources: [
      'Tools and templates for SEO audits and competitor analysis.',
      'Case studies of successful SEO campaigns.',
      'Downloadable guides on technical SEO and link-building.',
      'Video tutorials on using popular SEO tools like Semrush and Ahrefs.',
    ],
    keyLearningPoints: [
      'Performing advanced keyword research and competitor analysis.',
      'Mastering technical SEO for site architecture and performance.',
      'Developing a comprehensive and effective link-building strategy.',
      'Creating a content marketing plan that drives organic traffic.',
      'Staying up-to-date with the latest search engine algorithm updates.',
    ],
  },
  {
    _id: 'c7',
    title: 'Digital Marketing Essentials',
    category: 'Digital Marketing',
    duration: '18 hours',
    price: 49.99,
    isFree: false,
    thumbnail: courseImg1.src,
    demoVideo: 'https://www.w3schools.com/html/movie.mp4',
    lessons: ['https://www.w3schools.com/html/movie.mp4'],
    featured: false,
    instructor: 'u7',
    reviews: ['r7', 'r17', 'r27'],
    enrolments: ['e7', 'e17', 'e27'],
    description:
      "Lay the groundwork for a successful career in digital marketing with our 'Digital Marketing Essentials' course. This comprehensive program is designed for beginners and business owners who want to understand the key components of a successful online presence. You'll learn the fundamentals of search engine optimization (SEO), social media marketing, email marketing, and content strategy. We'll cover how to create a marketing plan, identify your target audience, and set measurable goals. The course provides a practical overview of popular marketing tools and platforms, including Google Analytics, Facebook Ads, and email service providers. Through hands-on exercises and case studies, you'll gain the skills to build and execute a cohesive digital marketing strategy that drives traffic, generates leads, and increases conversions. By the end of this course, you'll have the confidence to manage your own marketing efforts or work effectively as part of a marketing team, equipped with the essential knowledge to navigate the digital landscape.",
    audience: [
      'Marketing students and professionals new to the digital landscape.',
      'Small business owners and entrepreneurs.',
      'Aspiring digital marketers and social media managers.',
      'Individuals who want to understand the core pillars of online marketing.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'A willingness to learn and apply new marketing concepts.',
    ],
    resources: [
      'Guides and templates for creating a digital marketing plan.',
      'Case studies of effective marketing campaigns.',
      'Walkthroughs of Google Analytics and social media advertising platforms.',
      'Interactive quizzes to test your knowledge of key concepts.',
    ],
    keyLearningPoints: [
      'Developing a complete digital marketing strategy from scratch.',
      'Understanding the fundamentals of SEO, content, and email marketing.',
      'Creating and executing a social media marketing plan.',
      'Using analytics to measure campaign performance and ROI.',
      'Identifying your target audience and creating a customer-centric strategy.',
    ],
  },
  {
    _id: 'c8',
    title: 'Adobe Illustrator for Beginners',
    category: 'Graphics Design',
    duration: '9 hours',
    price: 0,
    isFree: true,
    thumbnail: courseImg2.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: ['https://www.w3schools.com/html/mov_bbb.mp4'],
    featured: true,
    instructor: 'u8',
    reviews: ['r8', 'r18', 'r28'],
    enrolments: ['e8', 'e18', 'e28'],
    description:
      "Unleash your creativity with our free 'Adobe Illustrator for Beginners' course. This introductory program is the perfect starting point for anyone who wants to learn vector graphics design. You'll master the essential tools and techniques of Adobe Illustrator, the industry-standard software for creating logos, icons, illustrations, and more. We'll cover the basics of the interface, from creating new documents to working with artboards and layers. The course provides a step-by-step guide to using drawing tools, manipulating shapes, and working with color and typography. Through simple, guided projects, you'll learn how to create your own vector artwork, ready for use on websites, print materials, and other digital platforms. By the end of this free course, you'll have a solid understanding of vector design principles and the practical skills to start your journey as a graphic designer. It’s an excellent opportunity to build a foundational skill set and explore your passion for visual communication.",
    audience: [
      'Absolute beginners to graphic design and Adobe software.',
      'Individuals who want to create logos, icons, and vector art.',
      'Web designers and developers who need to create custom graphics.',
      'Anyone looking for a free, high-quality introduction to vector design.',
    ],
    requirements: [
      'A computer capable of running Adobe Illustrator.',
      'An internet connection.',
      'Adobe Illustrator (free trial or subscription).',
    ],
    resources: [
      'Step-by-step video tutorials and guided projects.',
      'Downloadable Illustrator project files and assets.',
      'Cheat sheets for essential tools and shortcuts.',
      'Community for sharing work and getting feedback.',
    ],
    keyLearningPoints: [
      'Understanding the Adobe Illustrator interface and core concepts.',
      'Using essential drawing tools to create vector shapes and paths.',
      'Working with colors, gradients, and typography for effective design.',
      'Creating a simple logo and other vector illustrations.',
      'Preparing vector graphics for both web and print use.',
    ],
  },
  {
    _id: 'c9',
    title: 'E-commerce SEO Strategies',
    category: 'SEO',
    duration: '14 hours',
    price: 24.99,
    isFree: false,
    thumbnail: courseImg3.src,
    demoVideo: 'https://www.w3schools.com/html/movie.mp4',
    lessons: ['https://www.w3schools.com/html/movie.mp4'],
    featured: false,
    instructor: 'u9',
    reviews: ['r9', 'r19', 'r29'],
    enrolments: ['e9', 'e19', 'e29'],
    description:
      "Boost your online store's visibility and sales with our specialized 'E-commerce SEO Strategies' course. This program is tailored for business owners, marketers, and SEO professionals who want to master the unique challenges of optimizing an e-commerce website for search engines. We'll delve into topics like keyword research for products and categories, optimizing product pages for conversions, and structuring your site for maximum crawlability. You'll learn how to handle common e-commerce SEO issues such as duplicate content, faceted navigation, and a lack of inbound links. We'll also cover advanced strategies like schema markup for product ratings and reviews, and how to leverage blog content to drive targeted traffic to your store. Through practical exercises and real-world examples, you'll be able to create and implement a powerful SEO plan that increases organic traffic and, most importantly, revenue. This course is a game-changer for anyone looking to scale their e-commerce business through sustainable and effective search engine optimization.",
    audience: [
      'E-commerce store owners and managers.',
      'Digital marketers and SEO specialists focused on e-commerce.',
      'Business owners who want to grow their online sales organically.',
      'Freelancers who manage SEO for e-commerce clients.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'An existing e-commerce website (or a plan to build one).',
    ],
    resources: [
      'Templates for e-commerce keyword research.',
      'Guides on product page optimization and technical SEO.',
      'Case studies of successful e-commerce SEO campaigns.',
      'Access to a private community for e-commerce discussions.',
    ],
    keyLearningPoints: [
      'Conducting e-commerce-specific keyword research.',
      'Optimizing product and category pages for higher rankings and conversions.',
      'Implementing technical SEO to improve site crawlability and indexation.',
      'Developing a link-building and content strategy for an online store.',
      'Using schema markup to enhance product listings in search results.',
    ],
  },
  {
    _id: 'c10',
    title: 'Social Media Marketing',
    category: 'Digital Marketing',
    duration: '30 hours',
    price: 79.99,
    isFree: false,
    thumbnail: courseImg4.src,
    demoVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    lessons: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4',
    ],
    featured: true,
    instructor: 'u10',
    reviews: ['r10', 'r20', 'r30'],
    enrolments: ['e10', 'e20', 'e30'],
    description:
      "Harness the power of social media to grow your brand and connect with your audience in our 'Social Media Marketing' course. This comprehensive program is designed for marketers, business owners, and aspiring social media managers who want to build a powerful and effective social media presence. You'll learn how to develop a winning social media strategy, from defining your target audience and choosing the right platforms to creating engaging content and building a content calendar. We'll dive deep into the specific strategies for major platforms like Facebook, Instagram, Twitter, and LinkedIn, covering both organic and paid advertising methods. The course also includes modules on social media analytics, so you can track your performance, measure your ROI, and make data-driven decisions. By the end of this course, you'll have the skills to manage a full-scale social media campaign, build a thriving online community, and drive tangible business results. This is your definitive guide to becoming a social media marketing expert.",
    audience: [
      'Marketers and social media managers.',
      'Business owners and entrepreneurs.',
      'Content creators and influencers.',
      'Anyone interested in building and managing a brand’s social media presence.',
    ],
    requirements: [
      'A computer with a modern web browser.',
      'An internet connection.',
      'Social media accounts (optional, but recommended for practice).',
    ],
    resources: [
      'Templates for social media content calendars and strategies.',
      'Guides on using social media analytics tools.',
      'Case studies of successful social media campaigns.',
      'Video tutorials on creating content for different platforms.',
    ],
    keyLearningPoints: [
      'Developing a strategic social media marketing plan.',
      'Creating engaging and shareable content for various platforms.',
      'Running effective paid advertising campaigns on social media.',
      'Using analytics to measure performance and optimize your strategy.',
      'Building a strong online community and engaging with your audience.',
    ],
  },
];

// Enrolments
export const enrolments: Enrolment[] = [
  { _id: 'e1', user: 'u1', course: 'c1', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e2',
    user: 'u2',
    course: 'c2',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e3', user: 'u3', course: 'c3', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e4',
    user: 'u4',
    course: 'c4',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e5', user: 'u5', course: 'c5', status: 'active', enrolledAt: new Date().toISOString() },
  { _id: 'e6', user: 'u6', course: 'c6', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e7',
    user: 'u7',
    course: 'c7',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e8', user: 'u8', course: 'c8', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e9',
    user: 'u9',
    course: 'c9',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  {
    _id: 'e10',
    user: 'u10',
    course: 'c10',
    status: 'active',
    enrolledAt: new Date().toISOString(),
  },
  // Additional enrollments for multiple per course
  {
    _id: 'e11',
    user: 'u4',
    course: 'c1',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e12', user: 'u5', course: 'c2', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e13',
    user: 'u6',
    course: 'c3',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e14', user: 'u7', course: 'c4', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e15',
    user: 'u8',
    course: 'c5',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e16', user: 'u9', course: 'c6', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e17',
    user: 'u10',
    course: 'c7',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e18', user: 'u1', course: 'c8', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e19',
    user: 'u2',
    course: 'c9',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e20', user: 'u3', course: 'c10', status: 'active', enrolledAt: new Date().toISOString() },
  // Third enrollment for each course
  { _id: 'e21', user: 'u7', course: 'c1', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e22',
    user: 'u8',
    course: 'c2',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e23', user: 'u9', course: 'c3', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e24',
    user: 'u10',
    course: 'c4',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e25', user: 'u1', course: 'c5', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e26',
    user: 'u2',
    course: 'c6',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e27', user: 'u3', course: 'c7', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e28',
    user: 'u4',
    course: 'c8',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
  { _id: 'e29', user: 'u5', course: 'c9', status: 'active', enrolledAt: new Date().toISOString() },
  {
    _id: 'e30',
    user: 'u6',
    course: 'c10',
    status: 'completed',
    enrolledAt: new Date().toISOString(),
  },
];

// Reviews
export const reviews: Review[] = [
  {
    _id: 'r1',
    user: 'u1',
    course: 'c1',
    rating: 5,
    comment:
      'I absolutely loved this course! The instructor explained every concept of JavaScript in a clear and easy-to-understand way. The practical exercises were especially helpful for cementing my knowledge. I highly recommend this to anyone starting their web development journey.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r2',
    user: 'u2',
    course: 'c2',
    rating: 4,
    comment:
      'The explanations in this course were great and very thorough. I found the sections on advanced selectors and Sass to be particularly valuable for my workflow. It would have been even better with more examples of real-world project applications.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r3',
    user: 'u3',
    course: 'c3',
    rating: 3,
    comment:
      'This course was a good starting point for learning React, but it felt a little too basic for someone with some prior programming knowledge. I would have appreciated more complex examples and a deeper dive into modern hooks and state management.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r4',
    user: 'u4',
    course: 'c4',
    rating: 4,
    comment:
      'The course was well-structured and provided a solid introduction to data visualization principles. The examples were easy to follow, but I wish there were more diverse datasets to work with throughout the projects.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r5',
    user: 'u5',
    course: 'c5',
    rating: 5,
    comment:
      'This course is absolutely perfect for beginners who want to get started with Node.js. The crash course format was highly effective, and I felt confident building my first server by the end of it. The instructor made a complex topic seem very approachable.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r6',
    user: 'u6',
    course: 'c6',
    rating: 4,
    comment:
      'Docker made easy! I had been intimidated by containerization, but this course broke down the concepts in a way that was simple to grasp. The hands-on labs were excellent for learning how to build and manage my own images.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r7',
    user: 'u7',
    course: 'c7',
    rating: 5,
    comment:
      'This is a truly comprehensive marketing guide that covers all the essential channels. I learned a lot about creating a cohesive strategy that integrates social media, email, and content marketing. Highly recommended for any small business owner.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r8',
    user: 'u8',
    course: 'c8',
    rating: 4,
    comment:
      'Great for mobile development! The course gave a fantastic overview of both React Native and Flutter. It provided a clear path for a web developer like myself to transition into building mobile applications. I’m excited to apply what I learned.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r9',
    user: 'u9',
    course: 'c9',
    rating: 3,
    comment:
      'The course provided a solid foundation in testing, but it could have benefited from more advanced topics like test automation frameworks. The introduction to unit and integration testing was helpful, but I was looking for a little more depth.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r10',
    user: 'u10',
    course: 'c10',
    rating: 5,
    comment:
      'This was an excellent machine learning course! The instructor did a phenomenal job of explaining complex algorithms with Python. The projects were challenging yet rewarding, and I feel much more confident in my ability to build my own models.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  // Additional reviews for multiple per course
  {
    _id: 'r11',
    user: 'u4',
    course: 'c1',
    rating: 4,
    comment:
      'The clear and concise JavaScript tutorial was exactly what I needed. It covered all the core concepts without getting bogged down in unnecessary details. The pace was perfect for a quick refresher or for someone with no prior experience.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r12',
    user: 'u5',
    course: 'c2',
    rating: 5,
    comment:
      'The CSS animations section was absolutely amazing and taught me so many new techniques. This course really pushed me to think about styling in a more creative and efficient way. My websites look so much more professional now!',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r13',
    user: 'u6',
    course: 'c3',
    rating: 4,
    comment:
      'A really good introduction to React. It’s perfect for getting your feet wet with the library. While it didn’t cover everything, it gave me a strong enough foundation to start building my own projects and exploring the documentation on my own.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r14',
    user: 'u7',
    course: 'c4',
    rating: 5,
    comment:
      'This course on data visualization taught me how to create beautiful and compelling visualizations. The hands-on projects were fantastic for understanding how to present data in a meaningful way. It was a very practical and engaging course.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r15',
    user: 'u8',
    course: 'c5',
    rating: 4,
    comment:
      'The solid Node.js fundamentals taught in this course were exactly what I was looking for. It covered the core concepts of asynchronous programming and Express.js very well, giving me a strong base to build upon for my backend projects.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r16',
    user: 'u9',
    course: 'c6',
    rating: 5,
    comment:
      'The container concepts were so well explained in this course. It demystified Docker for me, and I now understand how to use it to create consistent development environments. A must-take course for anyone in DevOps or backend development.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r17',
    user: 'u10',
    course: 'c7',
    rating: 4,
    comment:
      'The practical marketing strategies in this course were very useful and actionable. I particularly enjoyed the sections on content and email marketing. The course gives a solid framework for creating and executing a digital strategy.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r18',
    user: 'u1',
    course: 'c8',
    rating: 5,
    comment:
      'Mobile development made simple! This course gave me the confidence to start building mobile apps. It provided a clear comparison between the different frameworks and a straightforward path for getting started with my projects. Great value for a free course.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r19',
    user: 'u2',
    course: 'c9',
    rating: 4,
    comment:
      'This course offered comprehensive testing coverage, from manual to automated methods. I particularly enjoyed the section on test-driven development. It gave me a new perspective on how to write more robust and bug-free code from the beginning.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r20',
    user: 'u3',
    course: 'c10',
    rating: 5,
    comment:
      "This is the best machine learning course I've taken! The hands-on projects and the instructor's clear explanations of complex mathematical concepts were outstanding. I feel well-prepared to tackle real-world ML problems after completing this program.",
    featured: true,
    createdAt: new Date().toISOString(),
  },
  // Third review for each course
  {
    _id: 'r21',
    user: 'u7',
    course: 'c1',
    rating: 3,
    comment:
      'The course is good for absolute beginners, but I was hoping for more advanced topics beyond the basics of JavaScript. It serves its purpose as an introduction, but I need to look elsewhere for more in-depth knowledge.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r22',
    user: 'u8',
    course: 'c2',
    rating: 4,
    comment:
      'The Flexbox and Grid sections were excellent and incredibly helpful. I feel much more confident in my ability to create complex and responsive layouts now. The course covered these topics thoroughly with great examples.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r23',
    user: 'u9',
    course: 'c3',
    rating: 5,
    comment:
      'This free course has premium quality content! The instruction was top-notch, and the curriculum was well-designed for a beginner. I was surprised by how much I learned without having to pay a single dollar. A truly fantastic resource.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r24',
    user: 'u10',
    course: 'c4',
    rating: 4,
    comment:
      'The D3.js examples were particularly helpful for understanding how to create custom data visualizations. The course provided a great mix of theoretical knowledge and practical application, which made learning much more effective.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r25',
    user: 'u1',
    course: 'c5',
    rating: 5,
    comment:
      'The Express.js tutorial was spot on. The course covered setting up a server and building APIs in a very clear and logical manner. I highly recommend this for anyone wanting to get a strong start in Node.js backend development.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r26',
    user: 'u2',
    course: 'c6',
    rating: 4,
    comment:
      'This is a good Docker fundamentals course. It covered all the basic commands and concepts needed to start using Docker in a development environment. I feel like I have a good grasp on the essentials now and can build on this knowledge.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r27',
    user: 'u3',
    course: 'c7',
    rating: 5,
    comment:
      'The SEO strategies taught in this course really work! I applied some of the techniques to my own website, and I’m already seeing a significant increase in organic traffic. This course is a must for anyone serious about digital marketing.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r28',
    user: 'u4',
    course: 'c8',
    rating: 4,
    comment:
      'Both React Native and Flutter were covered well in this course, which gave me a great perspective on cross-platform development. The instructor did a fantastic job of explaining the pros and cons of each framework.',
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r29',
    user: 'u5',
    course: 'c9',
    rating: 5,
    comment:
      'The section on automation testing tools was great. The course provided practical examples and a clear guide on how to integrate testing into my development workflow. I feel much more confident in writing automated tests now.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'r30',
    user: 'u6',
    course: 'c10',
    rating: 5,
    comment:
      'The hands-on ML projects were fantastic and really solidified my understanding of the concepts. This course is not just theory; it’s about practical application. I feel equipped to build my own machine learning models from scratch.',
    featured: true,
    createdAt: new Date().toISOString(),
  },
];

// Blogs
export const blogs: Blog[] = [
  {
    _id: 'b1',
    title: 'Why Learn JavaScript: The Unstoppable Language of the Web',
    image: blogImg1.src,
    content: `JavaScript has become the undisputed king of web development, and for good reason. It’s the only language that runs natively in all major web browsers, which makes it an essential skill for any front-end developer. But its influence extends far beyond the browser. With the advent of Node.js, JavaScript moved to the server-side, allowing developers to build full-stack applications using a single language. This versatility has led to a massive ecosystem of libraries and frameworks like React, Vue, and Angular, which have revolutionized how we build modern web applications. Learning JavaScript isn’t just about writing a few lines of code to make a button work; it's about gaining access to a world of possibilities, from building dynamic user interfaces to creating robust backend services and even mobile applications with frameworks like React Native. The demand for skilled JavaScript developers is consistently high across the tech industry, making it an excellent investment for your career. It’s a language that is constantly evolving, with new features and standards being introduced regularly, ensuring that it remains relevant and powerful for years to come.`,
    quote:
      'JavaScript is the glue that holds the modern web together, an essential tool for any aspiring developer.',
    category: 'Web Development',
    tags: ['js', 'web', 'frontend', 'backend', 'development'],
    author: 'u1',
    createdAt: new Date('2025-07-01T10:00:00Z').toISOString(),
    comments: [
      {
        user: 'u2',
        comment:
          'Agreed! The versatility is what makes it so powerful. You can build anything with it.',
        createdAt: new Date('2025-07-01T11:00:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'JavaScript runs in every web browser without additional plugins.',
      'With Node.js, it can be used for server-side development.',
      'It has a vast ecosystem of frameworks and libraries like React and Vue.',
      'Learning JavaScript opens up opportunities in front-end, back-end, and mobile development.',
      'The language is constantly evolving, ensuring long-term relevance.',
    ],
  },
  {
    _id: 'b2',
    title: 'Best CSS Practices for Building Scalable and Maintainable Styles',
    image: blogImg2.src,
    content: `Creating beautiful and functional websites requires more than just knowing a few CSS properties. To build styles that are easy to manage and scale with your project, you need to adopt best practices. One of the most significant advancements in modern CSS is the widespread adoption of Flexbox and Grid. These layout systems provide powerful, flexible, and responsive ways to arrange elements on a page, moving away from outdated methods like floats. Beyond layout, a key to maintainable CSS is organization. Using methodologies like BEM (Block, Element, Modifier) or utility-first frameworks like Tailwind CSS helps you write predictable and reusable class names, preventing style conflicts. Custom properties, or CSS variables, are another game-changer, allowing you to define a single source of truth for your colors, fonts, and spacing, which can be easily updated across your entire site. Finally, always write your styles with a mobile-first approach, ensuring your website looks great on the smallest screens before scaling up to larger devices.`,
    quote:
      'Clean, organized CSS is the foundation of a great user experience and a stress-free development workflow.',
    category: 'Design',
    tags: ['css', 'web', 'design', 'frontend'],
    author: 'u2',
    createdAt: new Date('2025-07-05T14:30:00Z').toISOString(),
    comments: [
      {
        user: 'u1',
        comment:
          'Useful tips. I’ve found using CSS variables has dramatically improved my workflow!',
        createdAt: new Date('2025-07-05T15:00:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'Master Flexbox and CSS Grid for modern, responsive layouts.',
      'Organize your styles using a methodology like BEM or a utility-first approach like Tailwind CSS.',
      'Use CSS custom properties (variables) to create a scalable design system.',
      'Adopt a mobile-first mindset for building responsive websites.',
      'Write reusable and predictable class names to prevent style conflicts.',
    ],
  },
  {
    _id: 'b3',
    title: 'React vs Vue: Choosing the Right Framework for Your Project',
    image: blogImg3.src,
    content: `When it comes to building modern single-page applications, two frameworks often dominate the conversation: React and Vue.js. Both are powerful tools for creating dynamic user interfaces, but they each have unique philosophies and communities. React, developed by Facebook, is a library for building UIs, often requiring additional libraries for routing and state management. Its strong community, vast ecosystem, and backing from a tech giant make it a very safe and popular choice for large-scale applications. Vue.js, on the other hand, is a progressive framework that is known for its simplicity and gentle learning curve. It’s designed to be easily adoptable, offering a more opinionated "out-of-the-box" solution with built-in routing and state management libraries. While React has a larger community, Vue’s documentation is widely praised for its clarity and accessibility. The best choice for your project often comes down to your team's experience, the project's scale, and personal preference. React is a robust choice for complex enterprise applications, while Vue is an excellent option for smaller projects, prototypes, or for teams who want a less steep learning curve.`,
    quote:
      "The best framework is the one that best fits your team's skills, project requirements, and long-term goals.",
    category: 'Web Development',
    tags: ['react', 'vue', 'frontend', 'frameworks'],
    author: 'u3',
    createdAt: new Date('2025-07-10T09:00:00Z').toISOString(),
    comments: [],
    keyPoints: [
      'React is a flexible UI library with a massive ecosystem, ideal for large applications.',
      'Vue.js is a progressive framework known for its simplicity and ease of use.',
      'React is backed by Facebook, while Vue has a passionate, community-driven development.',
      'The choice depends on team expertise, project scale, and the desired learning curve.',
      'Both frameworks are excellent choices for building modern, performant web applications.',
    ],
  },
  {
    _id: 'b4',
    title: 'Node.js for APIs: A Guide to Building Scalable Backend Services',
    content: `Node.js has become a go-to choice for building high-performance, scalable backend services and APIs. Its asynchronous, event-driven architecture makes it incredibly efficient at handling a large number of concurrent connections, which is perfect for real-time applications and microservices. The Express.js framework, often referred to as the "de-facto standard" for Node.js, simplifies the process of building robust APIs by providing a minimalist and flexible routing system. With Express, you can easily define endpoints, handle HTTP requests, and manage middleware to add functionality like authentication and logging. The single-threaded nature of Node.js can be a concern for CPU-intensive tasks, but it's easily mitigated by using a cluster module or worker threads to distribute the workload. The vibrant npm ecosystem provides thousands of ready-to-use packages, saving you countless hours of development time. From building RESTful APIs to WebSocket-powered real-time applications, Node.js offers a powerful and efficient solution for modern backend development.`,
    quote:
      'Node.js and Express.js together form a powerful duo for building modern, high-performance APIs with JavaScript.',
    category: 'Web Development',
    tags: ['node', 'backend', 'api', 'express', 'development'],
    author: 'u4',
    image: blogImg1.src,
    createdAt: new Date('2025-07-15T11:45:00Z').toISOString(),
    comments: [],
    keyPoints: [
      'Node.js’s event-driven architecture is highly efficient for I/O-intensive tasks.',
      'Express.js is the most popular framework for building RESTful APIs with Node.js.',
      'The npm ecosystem provides a vast number of packages for rapid development.',
      'It is an excellent choice for building microservices and real-time applications.',
      'You can scale Node.js applications using the cluster module for multi-core systems.',
    ],
  },
  {
    _id: 'b5',
    title: 'Visualizing Data: Turning Raw Information into Insightful Stories',
    content: `In the age of big data, the ability to effectively visualize information has become a critical skill. Data visualization is the art of translating complex datasets into visual representations like charts, graphs, and dashboards that are easy to understand and interpret. A well-designed visualization can reveal hidden patterns, trends, and outliers that would be impossible to spot in a spreadsheet. Tools like D3.js and Chart.js provide powerful JavaScript libraries for creating custom, interactive visualizations, giving you full control over the aesthetic and functionality. For those who prefer a more streamlined approach, platforms like Tableau and Power BI offer intuitive interfaces for building complex dashboards with little to no code. The key to successful data visualization is to start with a clear objective: what story are you trying to tell? By choosing the right chart type, color palette, and labels, you can guide your audience to a specific conclusion and turn raw data into actionable insights. This skill is invaluable for data scientists, analysts, marketers, and anyone who needs to communicate data-driven findings.`,
    quote:
      'A picture is worth a thousand data points. Effective visualization is the bridge between raw data and actionable insight.',
    category: 'AI & Data Science',
    tags: ['data', 'visualization', 'analytics'],
    author: 'u5',
    image: blogImg2.src,
    createdAt: new Date('2025-07-20T08:00:00Z').toISOString(),
    comments: [],
    keyPoints: [
      'Data visualization translates complex data into easy-to-understand visual formats.',
      'It helps uncover hidden patterns and trends in large datasets.',
      'Libraries like D3.js and Chart.js offer robust tools for custom visualizations.',
      'Choosing the right chart and design elements is crucial for telling a clear story.',
      'Data visualization is a vital skill for data analysts, scientists, and business professionals.',
    ],
  },
  {
    _id: 'b6',
    title: 'DevOps Best Practices: Automating Your Way to Faster Releases',
    image: blogImg3.src,
    content: `DevOps has transformed the way modern software is developed and delivered by breaking down the silos between development and operations teams. At its core, DevOps is about automating everything possible in the software delivery lifecycle. This starts with **Continuous Integration (CI)**, where developers regularly merge their code into a shared repository, and automated tests are run to catch bugs early. This is followed by **Continuous Delivery (CD)**, which automatically builds, tests, and prepares code for release. The next step, **Continuous Deployment**, automatically deploys every change that passes the automated tests to production. Tools like Jenkins, GitLab CI/CD, and GitHub Actions are the engines that power this automation. Containerization with Docker and orchestration with Kubernetes play a crucial role in creating consistent and scalable environments for applications. By adopting these practices, teams can significantly reduce manual errors, accelerate their release cycles, and foster a culture of collaboration and shared responsibility. This approach leads to more stable, reliable, and faster software releases, giving businesses a competitive edge.`,
    quote:
      "DevOps is not just a set of tools; it's a culture of collaboration and automation that drives faster, more reliable software delivery.",
    category: 'DevOps & Automation',
    tags: ['devops', 'automation', 'ci/cd', 'docker', 'kubernetes'],
    author: 'u6',
    createdAt: new Date('2025-07-25T16:00:00Z').toISOString(),
    comments: [
      {
        user: 'u8',
        comment: 'Great insights! Automation has been a game-changer for my team.',
        createdAt: new Date('2025-07-25T17:00:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'DevOps promotes collaboration and automation across development and operations.',
      'CI/CD pipelines automate the building, testing, and deployment of software.',
      'Tools like Docker and Kubernetes create consistent and scalable environments.',
      'The goal is to reduce manual errors and accelerate the release cycle.',
      'DevOps practices lead to more stable, reliable, and faster software delivery.',
    ],
  },
  {
    _id: 'b7',
    title: 'Digital Marketing Trends 2024: The Rise of AI-Powered Strategies',
    image: blogImg1.src,
    content: `The world of digital marketing is constantly in flux, but one trend has dominated the conversation in 2024: the integration of artificial intelligence. AI-powered marketing is no longer a futuristic concept; it's a powerful reality that is reshaping how businesses connect with their customers. From automated content generation and personalized email campaigns to predictive analytics and chatbot customer service, AI is helping marketers work more efficiently and effectively. Beyond AI, video content continues to reign supreme, with platforms like TikTok and YouTube Shorts driving engagement. Marketers are also focusing on creating more authentic, community-driven content that builds trust and loyalty. Furthermore, the importance of data privacy is at an all-time high, with a shift away from third-party cookies towards first-party data collection and more transparent data practices. To stay ahead, marketers need to embrace these trends, focusing on creating valuable, personalized experiences while respecting user privacy. The future of digital marketing is about leveraging technology to build deeper, more meaningful connections with your audience.`,
    quote:
      'In 2024, AI is not just a tool for marketers; it’s a partner in creating more personalized, data-driven, and effective campaigns.',
    category: 'Marketing',
    tags: ['marketing', 'ai', 'digital-marketing', 'trends'],
    author: 'u7',
    createdAt: new Date('2025-07-28T10:00:00Z').toISOString(),
    comments: [
      {
        user: 'u10',
        comment: 'Very insightful. The shift to AI-powered marketing is happening so fast!',
        createdAt: new Date('2025-07-28T11:00:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'AI is being used for personalized content, predictive analytics, and automated marketing.',
      'Video content, particularly short-form video, remains a dominant marketing channel.',
      'There is a growing emphasis on community-building and authentic brand voice.',
      'Data privacy and first-party data are becoming critical components of marketing strategy.',
      'Marketers need to adapt to these trends to remain competitive and effective.',
    ],
  },
  {
    _id: 'b8',
    title: 'Mobile Development Frameworks: A Look at React Native and Flutter',
    image: blogImg2.src,
    content: `The demand for cross-platform mobile applications has led to the rise of powerful frameworks like React Native and Flutter. Both allow developers to build apps for iOS and Android from a single codebase, saving significant time and resources compared to native development. React Native, backed by Facebook, uses JavaScript and React to build mobile UIs. Its "learn once, write anywhere" philosophy is appealing to web developers, who can leverage their existing skills to create performant mobile apps. Flutter, developed by Google, uses the Dart programming language and is known for its beautiful, highly customizable widgets and superior performance. Flutter’s hot reload feature makes development incredibly fast, allowing developers to see changes instantly. The choice between the two often comes down to your team's existing skill set. If your team is proficient in JavaScript, React Native might be a more natural fit. If performance and a pixel-perfect, custom UI are your top priorities, Flutter is an excellent choice. Both frameworks have strong communities and are continuously evolving, making them excellent choices for modern mobile development.`,
    quote:
      'Cross-platform frameworks like React Native and Flutter empower developers to build beautiful, high-performance apps with a single codebase.',
    category: 'Mobile Development',
    tags: ['mobile', 'react-native', 'flutter', 'development'],
    author: 'u8',
    createdAt: new Date('2025-07-30T13:00:00Z').toISOString(),
    comments: [],
    keyPoints: [
      'React Native and Flutter allow for cross-platform app development from a single codebase.',
      'React Native uses JavaScript and is a popular choice for web developers.',
      'Flutter uses Dart and is known for its high performance and customizable widgets.',
      'The choice between them often depends on your team’s existing skill set and project needs.',
      'Both frameworks are supported by large communities and are excellent for modern mobile development.',
    ],
  },
  {
    _id: 'b9',
    title: 'Testing Strategies: Ensuring Your Code is Bug-Free and Reliable',
    content: `Writing code is only half the battle; ensuring it's reliable and free of bugs is the other. Adopting a robust testing strategy is crucial for building high-quality software. The most common approach involves a combination of three types of tests: **unit tests**, **integration tests**, and **end-to-end (e2e) tests**. Unit tests focus on the smallest, isolated parts of your code (like a single function) to ensure they work as expected. They are fast to run and easy to write. Integration tests verify that different parts of your application work together correctly. This is where you test the interaction between components, modules, or services. Finally, end-to-end tests simulate a real user's journey through your application, from a login page to a checkout process. While they are slower and more complex, they provide the highest level of confidence. By combining these testing strategies, you can catch bugs early, prevent regressions, and ensure that your application behaves predictably, which ultimately saves time and improves the overall user experience.`,
    quote:
      "Testing is not a task; it's a culture. A robust testing strategy is the key to building reliable and trustworthy software.",
    category: 'Web Development',
    tags: ['testing', 'qa', 'development'],
    image: blogImg1.src,
    author: 'u9',
    createdAt: new Date('2025-08-01T15:00:00Z').toISOString(),
    comments: [
      {
        user: 'u2',
        comment:
          'Very helpful. I especially liked the breakdown of the different types of testing.',
        createdAt: new Date('2025-08-01T16:00:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'Unit tests verify individual functions and components in isolation.',
      'Integration tests ensure that different parts of the application work together correctly.',
      'End-to-end tests simulate a user’s full journey through the application.',
      'Combining these testing strategies helps catch bugs early and prevent regressions.',
      'A strong testing culture leads to more reliable and higher-quality software.',
    ],
  },
  {
    _id: 'b10',
    title: 'Machine Learning Applications: Real-World Use Cases for AI',
    image: blogImg1.src,
    content: `Machine learning (ML) has moved from the realm of science fiction into our daily lives. Its applications are vast and varied, touching almost every industry. In e-commerce, ML powers recommendation engines that suggest products you might like, creating a personalized shopping experience. In healthcare, it’s used to analyze medical images to detect diseases with incredible accuracy, assisting doctors in making faster and more precise diagnoses. Financial institutions use ML algorithms to detect fraudulent transactions in real-time, protecting customers from theft. On a more consumer-facing level, ML is behind the voice assistants like Siri and Alexa, the spam filters in your email, and the facial recognition on your smartphone. The key to these applications is the ability of ML models to learn from data and make predictions or decisions without being explicitly programmed for every scenario. This blog post explores some of the most fascinating real-world use cases, highlighting how ML is not just a technology but a transformative force that is driving innovation and solving complex problems across the globe.`,
    quote:
      'Machine learning is the engine behind some of the most innovative products and services, turning data into intelligent action.',
    category: 'AI & Data Science',
    tags: ['ml', 'ai', 'applications', 'data-science'],
    author: 'u10',
    createdAt: new Date('2025-08-03T09:30:00Z').toISOString(),
    comments: [
      {
        user: 'u3',
        comment:
          'Fascinating examples! It’s amazing to see how ML is integrated into so many different industries.',
        createdAt: new Date('2025-08-03T10:30:00Z').toISOString(),
      },
    ],
    keyPoints: [
      'Machine learning powers personalized recommendation engines in e-commerce.',
      'It is used in healthcare for disease detection and medical image analysis.',
      'Financial institutions use ML for real-time fraud detection.',
      'Consumer applications include voice assistants, spam filters, and facial recognition.',
      'ML models learn from data to make predictions, driving innovation across industries.',
    ],
  },
];

// Carts
export const carts: Cart[] = [
  { _id: 'cart1', user: 'u1', items: [{ course: 'c1', price: 29.99 }], totalAmount: 29.99 },
  { _id: 'cart2', user: 'u2', items: [{ course: 'c2', price: 39.99 }], totalAmount: 39.99 },
  { _id: 'cart3', user: 'u3', items: [{ course: 'c4', price: 59.99 }], totalAmount: 59.99 },
  { _id: 'cart4', user: 'u4', items: [{ course: 'c5', price: 19.99 }], totalAmount: 19.99 },
  { _id: 'cart5', user: 'u5', items: [], totalAmount: 0 },
  { _id: 'cart6', user: 'u6', items: [{ course: 'c6', price: 34.99 }], totalAmount: 34.99 },
  { _id: 'cart7', user: 'u7', items: [{ course: 'c7', price: 49.99 }], totalAmount: 49.99 },
  {
    _id: 'cart8',
    user: 'u8',
    items: [
      { course: 'c8', price: 0 },
      { course: 'c9', price: 24.99 },
    ],
    totalAmount: 24.99,
  },
  { _id: 'cart9', user: 'u9', items: [{ course: 'c9', price: 24.99 }], totalAmount: 24.99 },
  { _id: 'cart10', user: 'u10', items: [{ course: 'c10', price: 79.99 }], totalAmount: 79.99 },
];

// Orders
export const orders: Order[] = [
  {
    _id: 'o1',
    user: 'u1',
    courses: ['c1', 'c2'],
    totalAmount: 69.98,
    orderedAt: new Date().toISOString(),
  },
  { _id: 'o2', user: 'u2', courses: ['c3'], totalAmount: 0, orderedAt: new Date().toISOString() },
  {
    _id: 'o3',
    user: 'u3',
    courses: ['c4'],
    totalAmount: 59.99,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o4',
    user: 'u4',
    courses: ['c5'],
    totalAmount: 19.99,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o5',
    user: 'u5',
    courses: ['c1', 'c3', 'c5'],
    totalAmount: 49.98,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o6',
    user: 'u6',
    courses: ['c6'],
    totalAmount: 34.99,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o7',
    user: 'u7',
    courses: ['c7', 'c8'],
    totalAmount: 49.99,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o8',
    user: 'u8',
    courses: ['c8', 'c9'],
    totalAmount: 24.99,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o9',
    user: 'u9',
    courses: ['c9', 'c1'],
    totalAmount: 54.98,
    orderedAt: new Date().toISOString(),
  },
  {
    _id: 'o10',
    user: 'u10',
    courses: ['c10'],
    totalAmount: 79.99,
    orderedAt: new Date().toISOString(),
  },
];

// Questions
export const questions: Question[] = [
  {
    _id: 'q1',
    user: 'u1',
    course: 'c1',
    question: 'Is this updated for ES6?',
    answer: 'Yes.',
    status: 'read',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q2',
    user: 'u2',
    course: 'c2',
    question: 'Will flexbox be covered?',
    answer: 'Definitely.',
    status: 'important',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q3',
    user: 'u3',
    course: 'c3',
    question: 'Any assignments?',
    answer: 'Yes.',
    status: 'read',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q4',
    user: 'u4',
    course: 'c4',
    question: 'What libraries are used?',
    answer: 'Chart.js and D3.',
    status: 'archived',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q5',
    user: 'u5',
    course: 'c5',
    question: 'Do I need Node installed?',
    answer: 'Yes.',
    status: 'unread',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q6',
    user: 'u6',
    course: 'c6',
    question: 'What Docker version is required?',
    answer: 'Docker 20.10 or higher.',
    status: 'read',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q7',
    user: 'u7',
    course: 'c7',
    question: 'Are there practical marketing exercises?',
    answer: 'Yes, lots of hands-on activities.',
    status: 'important',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q8',
    user: 'u8',
    course: 'c8',
    question: 'Which mobile platforms are covered?',
    answer: 'Both iOS and Android.',
    status: 'read',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q9',
    user: 'u9',
    course: 'c9',
    question: 'What testing tools are taught?',
    answer: 'Jest, Cypress, and Selenium.',
    status: 'unread',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'q10',
    user: 'u10',
    course: 'c10',
    question: 'Is Python knowledge required?',
    answer: 'Basic Python knowledge is helpful.',
    status: 'archived',
    createdAt: new Date().toISOString(),
  },
];

// Instructors
export const instructors: Instructor[] = [
  {
    _id: 'i1',
    user: 'u2',
    expertise: ['JavaScript', 'Node.js'],
    isTop: true,
  },
  {
    _id: 'i2',
    user: 'u3',
    expertise: ['Data Science', 'Python'],
    isTop: false,
  },
  {
    _id: 'i3',
    user: 'u5',
    expertise: ['React', 'Frontend'],
    isTop: true,
  },
  {
    _id: 'i4',
    user: 'u4',
    expertise: ['Project Management', 'Agile'],
    isTop: false,
  },
  {
    _id: 'i5',
    user: 'u1',
    expertise: ['UX', 'Design'],
    isTop: false,
  },
  {
    _id: 'i6',
    user: 'u6',
    expertise: ['DevOps', 'Docker', 'AWS'],
    isTop: true,
  },
  {
    _id: 'i7',
    user: 'u7',
    expertise: ['Digital Marketing', 'SEO', 'Social Media'],
    isTop: false,
  },
  {
    _id: 'i8',
    user: 'u8',
    expertise: ['React Native', 'Flutter', 'Mobile UI'],
    isTop: true,
  },
  {
    _id: 'i9',
    user: 'u9',
    expertise: ['Test Automation', 'Quality Assurance'],
    isTop: false,
  },
  {
    _id: 'i10',
    user: 'u10',
    expertise: ['Machine Learning', 'Python', 'Data Science'],
    isTop: true,
  },
];

// Subscribers
export const subscribers: Subscriber[] = [
  { _id: 's1', email: 'alice@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's2', email: 'bob@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's3', email: 'cathy@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's4', email: 'david@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's5', email: 'eva@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's6', email: 'frank@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's7', email: 'grace@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's8', email: 'henry@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's9', email: 'ivy@newsletter.com', subscribedAt: new Date().toISOString() },
  { _id: 's10', email: 'jack@newsletter.com', subscribedAt: new Date().toISOString() },
];

// FAQ
export const faqs: FAQ[] = [
  {
    question: 'What is the Learn Well System?',
    answer:
      'The Learn Well System is an online learning platform designed to help you master new skills through a combination of expert-led courses, engaging blog content, and a supportive community. Our goal is to provide a flexible and effective learning environment for individuals, teams, and businesses.',
  },
  {
    question: 'What is included in the Standard membership plan?',
    answer:
      'The Standard membership plan includes unlimited access to all of our free courses, as well as our entire library of premium blog content and featured articles. You also get access to our community forums and regular newsletters with learning tips and course recommendations.',
  },
  {
    question: 'How do I choose the right class for me?',
    answer:
      'Choosing the right class depends on your goals. You can start by Browse our course categories like "Web Development," "AI & Data Science," or "Marketing." We recommend reading the course descriptions, which include details on the audience, requirements, and key learning points to help you find the perfect fit for your skill level and interests.',
  },
  {
    question: 'Can I pause my Premium membership plan any time?',
    answer:
      'Yes, you can. We understand that your learning needs can change. You can pause your Premium membership plan at any time from your account settings. When you’re ready to resume, you can reactivate your plan to regain access to all premium features and courses.',
  },
  {
    question: 'How does the Affiliate Program work?',
    answer:
      "Our Affiliate Program allows you to earn a commission by promoting our courses and membership plans. Once you sign up, you’ll receive a unique referral link. When someone subscribes to a plan or purchases a course through your link, you'll earn a percentage of the sale. It's a great way to share your favorite learning resources and get rewarded.",
  },
  {
    question: 'How do you provide services for me?',
    answer:
      'We provide our services through a dedicated online platform accessible via a web browser or our mobile app. Our content is delivered through high-quality video lessons, interactive quizzes, and downloadable resources. We also use community forums and direct messaging to ensure you have a support system throughout your learning journey.',
  },
  {
    question: 'Where can I download the LearnWell app?',
    answer:
      'The LearnWell app is available for download on both the Google Play Store for Android devices and the Apple App Store for iOS devices. Simply search for "LearnWell" in your respective app store to download and start learning on the go.',
  },
  {
    question: 'How did you become the best among others?',
    answer:
      'We strive to be the best by focusing on three core principles: quality, community, and practicality. Our courses are created by industry experts and are regularly updated to stay current. We foster a vibrant community where learners can connect and collaborate. Most importantly, our curriculum is designed to be highly practical, ensuring that the skills you learn can be immediately applied in real-world scenarios.',
  },
];
