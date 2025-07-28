import AnimatedText from '@/components/AnimatedText';
import InstructorCard from '@/components/cards/InstructorCard';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import { instructors } from '@/lib/dummy-data';

export default function TopInstructors() {
  return (
    <section className='mx-auto max-w-[1200px] px-4 py-[120px]'>
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
      <div className='mt-8 grid grid-cols-4 gap-8'>
        {instructors.map((instructor, idx) => (
          <InstructorCard key={instructor.id} instructor={instructor} order={idx + 1} />
        ))}
      </div>
    </section>
  );
}
