import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import bannerImg from '@/assets/img/banner_img.png';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <div className="h-[780px] bg-[url('../assets/img/banner_bg.jpg')] bg-cover pt-40">
        <div className='container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2'>
          <div className='max-w-[570px] space-y-4'>
            <TextBadge>100% Satisfaction Guarantee</TextBadge>
            <Title h={1}>
              Learn <AnimatedText text='Skills' /> From Our Top Instructors
            </Title>
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we
              followelit.
            </p>
            <div className='flex items-center gap-4'>
              <Button className='text-center text-lg' size={'lg'}>
                <span className='mt-0.5'> Explore Courses</span>
                <ArrowRight />
              </Button>
              <div>
                <div className='flex items-center gap-2'>
                  <PhoneCall size={36} />
                  <div>
                    <span className='block text-xs'>Have any Question?</span>
                    <span className='text-md block font-bold'>+880 123 456 789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image src={bannerImg} alt='Banner Image' width={632} height={617} className='mt-8' />
          </div>
        </div>
      </div>
    </main>
  );
}
