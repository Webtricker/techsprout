import { CourseCards } from '@/components/cards/CourseCard';
import Hero from '@/components/Hero';
import { courses } from '@/lib/mockData/mockData';

export default function Courses() {
  return (
    <>
      <Hero pageName='Courses' />
      <section className='mt-20'>
        <div className='grid grid-cols-3'>
          {courses.map((course, idx) => (
            <CourseCards key={idx} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
