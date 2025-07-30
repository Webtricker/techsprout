import Title from '../Title';
import { CategoryInfo } from '@/lib/dummy-data';

export default function CategoryCard({ categoryInfo }: { categoryInfo: CategoryInfo }) {
  const { title, courseCount } = categoryInfo;
  return (
    <div className='group bg-primary/20 flex flex-col items-center justify-center space-y-2 rounded-2xl p-8 text-center'>
      <div className='group-hover:bg-accent w-fit rounded-full bg-white p-6 duration-300 group-hover:text-white'>
        <categoryInfo.icon />
      </div>
      <Title h={6}>{title}</Title>
      <p>0{courseCount} Courses</p>
    </div>
  );
}
