'use client';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import bannerImg from '@/assets/img/banner_img.png';
import AnimatedText from '@/components/AnimatedText';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { brands } from '@/lib/dummy-data';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <div className="bg-[url('../assets/img/banner_bg.jpg')] bg-cover pt-40">
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
              <Button isArrow={true} size={'lg'}>
                Explore Courses
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
      {/* Brands  */}
      <div className='py-12'>
        <div className='container mx-auto px-4'>
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {brands.map((brand, idx) => (
                <CarouselItem
                  key={idx}
                  className='flex basis-1/6 items-center justify-center opacity-50 grayscale-100 duration-300 select-none hover:opacity-100 hover:grayscale-0'
                >
                  <Image src={brand} width={120} height={50} alt='brand' />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
