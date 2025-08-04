import { Blog } from '@/lib/mockData/mockDataTypes';
import Image from 'next/image';
import Title from '../Title';

export default function RecentPost({ blog }: { blog: Blog }) {
  const { image, createdAt, title } = blog;
  return (
    <div>
      <Image src={image} width={80} height={80} alt={title} />
      <div>
        <Title h={5}>{title}</Title>
      </div>
    </div>
  );
}
