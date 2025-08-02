import { getSingleCourse } from '@/lib/mockData/mockApi';

export default async function Course({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const {
    category,
    title,
    description,
    thumbnail,
    demoVideo,
    duration,
    enrolments,
    featured,
    instructor,
    isFree,
    lessons,
    price,
    reviews,
  } = getSingleCourse(courseId);

  return (
    <div className='pt-20'>
      <h2 className='text-4xl'>{courseId}</h2>
    </div>
  );
}
