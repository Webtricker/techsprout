import Image from 'next/image';
import newsLetterImg from '@/assets/img/newsletter.png';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function NewsLetter() {
  return (
    <section className='bg-white py-[70px]'>
      <div className='custom-container grid grid-cols-4 items-center gap-2'>
        <Image src={newsLetterImg} alt='news letter' />
        <h2 className='text-foreground font-lexend text-[30px] leading-tight font-semibold'>
          Let’s Join To Our Newsletters
        </h2>
        <div className='relative col-span-2'>
          <Input
            className='focus:border-accent bg-primary/20 h-[60px] rounded-full ps-6'
            placeholder='Enter you email*'
          />
          <Button
            className='hover:bg-accent absolute top-1/2 right-1 h-[50px] -translate-y-1/2 rounded-full'
            size={'lg'}
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
