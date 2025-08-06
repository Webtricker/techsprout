import AnimatedText from '@/components/AnimatedText';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import Image from 'next/image';
import Link from 'next/link';
import aboutImg1 from '@/assets/img/about/about_img03.jpg';
import aboutImg2 from '@/assets/img/about/about_img04.jpg';
import aboutImg3 from '@/assets/img/about/about_img05.jpg';
import aboutShape1 from '@/assets/img/shapes/about_shape02.png';
import aboutShape2 from '@/assets/img/shapes/about_shape03.png';
import aboutShape3 from '@/assets/img/shapes/about_dots.svg';
import TopInstructors from '@/components/sections/home/TopInstructors';
import Offer from '@/components/Offer';

export default function page() {
  return (
    <>
      <Hero pageName='About Us' />
      {/* Who we are */}
      <section className='container mx-auto mt-18 grid grid-cols-3 items-center gap-4 px-4 pb-28'>
        <div className='col-span-1 space-y-4'>
          <TextBadge>Who we are</TextBadge>
          <Title h={2}>
            The Leading Global <AnimatedText text='Marketplace' /> For Learning
            <span className='text-primary'>&</span>
            Instruction
          </Title>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus luctus nec ullamcorper
            mattisBorem
          </p>
          <p>
            Bipsum dolor awtnse awctetur adipis we followelit. Borem.Borem ipsum dolamet consectetur
            adipiscing eliawe awUt elit ellutnse awcon sectetur adipiscing ectetur.
          </p>
          <div>
            <Link href={'/courses'}>
              <Button size={'lg'} isArrow={true}>
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative col-span-2 flex items-center justify-center gap-4'>
          <Image src={aboutImg1} width={315} height={410} alt='about us' className='rounded-2xl' />
          <div className='flex flex-col gap-4'>
            <Image
              src={aboutImg2}
              width={265}
              height={275}
              alt='about us'
              className='rounded-2xl'
            />
            <Image
              src={aboutImg3}
              width={265}
              height={200}
              alt='about us'
              className='rounded-2xl'
            />
          </div>
          <Image
            src={aboutShape1}
            width={110}
            height={105}
            alt='shape'
            className='absolute -top-6 right-12 z-[-1]'
          />
          <Image
            src={aboutShape2}
            width={120}
            height={120}
            alt='shape'
            className='animate-spin-slow absolute right-16 -bottom-12 z-[-1]'
          />
          <Image
            src={aboutShape3}
            width={125}
            height={110}
            alt='shape'
            className='absolute bottom-0 left-12 z-[-1]'
          />
        </div>
      </section>
      {/* Instructors */}
      <TopInstructors />

      {/* Current Offer */}
      <Offer />
    </>
  );
}
