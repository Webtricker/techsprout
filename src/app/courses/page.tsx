import { CourseCards } from '@/components/cards/CourseCard';
import { courses } from '@/lib/mockData/mockData';
import Link from 'next/link';

export default function Courses() {
  const courseTitle = 'Web-Development';
  return (
    <div className='pt-20'>
      <h2>All Course</h2>
      <Link href={`/courses/${courseTitle}`}>Single course page</Link>

      <div className='grid grid-cols-3'>
        {courses.map((course, idx) => (
          <CourseCards key={idx} course={course} />
        ))}
      </div>
    </div>
  );
}
