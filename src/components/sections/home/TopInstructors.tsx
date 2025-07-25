import AnimatedText from '@/components/AnimatedText';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';

export default function TopInstructors() {
  return (
    <section className='mx-auto max-w-[1200px] px-4'>
      <div className='flex items-center justify-between'>
        <div className='space-y-4'>
          <TextBadge>Our Qualified People Matter</TextBadge>
          <Title h={2}>
            Top <AnimatedText text='Class' /> Instructors
          </Title>
        </div>
        <div>
          <Button variant={'outline'} size={'lg'} isArrow={true} className='hover:border-accent'>
            All Instructors
          </Button>
        </div>
      </div>
    </section>
  );
}
