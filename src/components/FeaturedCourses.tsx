import { CourseCards } from './cards/CourseCard';

export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  badge: string;
};

export default function FeaturedCourses() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, and React from scratch',
      image: '/placeholder.svg?height=200&width=300',
      price: 99,
      badge: 'Popular',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Master Python, pandas, and machine learning basics',
      image: '/placeholder.svg?height=200&width=300',
      price: 129,
      badge: 'New',
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Create beautiful and user-friendly interfaces',
      image: '/placeholder.svg?height=200&width=300',
      price: 89,
      badge: 'Trending',
    },
  ];
  return (
    <div>
      {courses.map((course) => (
        <CourseCards key={course.id} course={course} />
      ))}
    </div>
  );
}
