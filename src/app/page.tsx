import Title from '@/components/Title';
import { TextBadge } from '@/components/ui/text-badge';

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <div className="h-[780px] bg-[url('../assets/img/banner_bg.jpg')] bg-cover pt-40">
        <div className='container mx-auto px-4'>
          <div>
            <TextBadge>100% Satisfaction Guarantee</TextBadge>
            <Title h={1}>Learn Skills From Our Top Instructors</Title>
          </div>
        </div>
      </div>
    </main>
  );
}
