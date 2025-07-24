import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import bannerImg from '@/assets/img/banner_img.png';
import AnimatedText from '@/components/AnimatedText';
import Brands from '@/components/Brands';
import { aboutUsInfo } from '@/lib/dummy-data';
import aboutImg1 from '@/assets/img/about_img01.png';
import aboutImg2 from '@/assets/img/about_img02.png';
import FeaturedCourses from '@/components/FeaturedCourses';

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section className="bg-[url('../assets/img/banner_bg.jpg')] bg-cover pt-40">
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
      </section>
      {/* Brands  */}
      <Brands />
      {/* Discover */}
      <section className='container mx-auto grid grid-cols-2 items-center gap-4 px-4 py-[120px]'>
        <div className='flex justify-center'>
          <div className='relative -right-12 mb-[50px] flex items-end'>
            <Image src={aboutImg2} width={260} alt='About Image' />
            <div className='bg-primary absolute top-11 left-1/2 flex h-[110px] w-[125px] -translate-x-1/2 skew-3 flex-col items-center justify-center rounded-2xl text-center text-white'>
              <Title h={3}>
                <span className='text-white'>12 +</span>
              </Title>
              <p className='text-lg leading-4 font-bold'>Years of Experience</p>
            </div>
          </div>
          <Image src={aboutImg1} width={389} alt='About Image' />
        </div>
        <div className='max-w-[530px] space-y-4'>
          <TextBadge>Get To Know About Us</TextBadge>
          <Title h={2}>
            Discover Top <AnimatedText text='Instructors' /> Around The World
          </Title>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.
          </p>
          <div>
            <ul className='grid w-3/4 grid-cols-2 gap-6'>
              {aboutUsInfo.map((item, index) => (
                <li key={index} className='flex items-center gap-4'>
                  <item.icon size={50} />
                  <div className='flex flex-col text-xl font-bold'>
                    <span>{item.number}</span>
                    <span>{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Button isArrow={true} size={'lg'}>
            Discover More
          </Button>
        </div>
      </section>
      {/* Featured Courses */}
      <FeaturedCourses />
    </main>
  );
}
