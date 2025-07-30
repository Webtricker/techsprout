import { categoryInfos } from '@/lib/dummy-data';
import AnimatedText from '../.././AnimatedText';
import Title from '../.././Title';
import { Button } from '../.././ui/button';
import { TextBadge } from '../.././ui/text-badge';
import CategoryCard from '../.././cards/CategoryCard';
import Image from 'next/image';
import shape1 from '@/assets/img/categories_shape01.png';
import shape2 from '@/assets/img/categories_shape03.svg';
import shape3 from '@/assets/img/categories_shape04.svg';

export default function SearchByCategory() {
  return (
    <section className='bg-white py-[120px]'>
      <div className='custom-container'>
        <div className='grid grid-cols-5 items-center gap-4'>
          <div className='relative col-span-2 space-y-8'>
            <Image
              src={shape1}
              width={100}
              alt='shape'
              className='animate-spin-slow absolute -left-1/3'
            />
            <TextBadge>Unique online courses</TextBadge>
            <Title h={2}>
              Browse By <AnimatedText text='Categories' />
            </Title>
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we
              followelit.
            </p>
            <Button isArrow={true} size={'lg'}>
              All Categories
            </Button>
          </div>
          <div className='relative col-span-3 flex flex-wrap justify-center gap-6'>
            {categoryInfos.map((categoryInfo, idx) => (
              <CategoryCard key={idx} categoryInfo={categoryInfo} />
            ))}
            <Image
              src={shape2}
              width={100}
              alt='shape'
              className='absolute top-1/2 left-0 -translate-y-1/8'
            />
            <Image
              src={shape3}
              width={80}
              alt='shape'
              className='absolute top-1/2 right-0 -translate-y-1/8'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
