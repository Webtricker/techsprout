import { categoryInfos } from '@/lib/dummy-data';
import AnimatedText from '../.././AnimatedText';
import Title from '../.././Title';
import { Button } from '../.././ui/button';
import { TextBadge } from '../.././ui/text-badge';
import CategoryCard from '../.././cards/CategoryCard';

export default function SearchByCategory() {
  return (
    <section className='py-[120px]'>
      <div className='mx-auto grid max-w-[1200px] grid-cols-5 items-center gap-4 px-4'>
        <div className='col-span-2 space-y-8'>
          <TextBadge>Unique online courses</TextBadge>
          <Title h={2}>
            Browse By <AnimatedText text='Categories' />
          </Title>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.
          </p>
          <Button isArrow={true} size={'lg'}>
            All Categories
          </Button>
        </div>
        <div className='col-span-3 flex flex-wrap justify-center gap-6'>
          {categoryInfos.map((categoryInfo, idx) => (
            <CategoryCard key={idx} categoryInfo={categoryInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
