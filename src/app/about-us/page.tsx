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

export default function page() {
  return (
    <>
      <Hero pageName='About Us' />
      {/* Who we are */}
      <section className='container mx-auto mt-18 grid grid-cols-3 items-center gap-4 px-4'>
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
        <div className='col-span-2 flex items-center justify-center gap-4'>
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
        </div>
      </section>
    </>
  );
}
