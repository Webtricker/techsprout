import AnimatedText from '@/components/AnimatedText';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { TextBadge } from '@/components/ui/text-badge';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <Hero pageName='About Us' />
      {/* Who we are */}
      <section className='container mx-auto mt-18 px-4'>
        <div>
          <TextBadge>Who we are</TextBadge>
          <Title h={2}>
            The Leading Global <AnimatedText text='Marketplace' /> For Learning And Instruction
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
        <div></div>
      </section>
    </>
  );
}
