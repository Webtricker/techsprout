import { courses } from '@/lib/dummy-data';
import { CourseCards } from './cards/CourseCard';
import { TextBadge } from './ui/text-badge';
import Title from './Title';
import AnimatedText from './AnimatedText';

export default function FeaturedCourses() {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <div>
          <div>
            <TextBadge>Welcome our Property.</TextBadge>
            <Title h={2}>
              Our <AnimatedText text='Featured' /> Courses
            </Title>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {courses.map((course) => (
            <CourseCards key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
