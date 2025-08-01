import Link from 'next/link';

export default function Courses() {
  const courseTitle = 'Web-Development';
  return (
    <div className='pt-20'>
      <h2>All Course</h2>
      <Link href={`/courses/${courseTitle}`}>Single course page</Link>
    </div>
  );
}
