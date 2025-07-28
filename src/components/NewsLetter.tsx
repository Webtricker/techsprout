import Image from 'next/image';
import newsLetterImg from '@/assets/img/newsletter.png';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function NewsLetter() {
  return (
    <section className='grid grid-cols-4 items-center gap-2 py-[70px]'>
      <Image src={newsLetterImg} alt='news letter' />
      <h2 className='text-foreground font-lexend text-[30px] leading-tight font-semibold'>
        Let’s Join To Our Newsletters
      </h2>
      <div className='relative col-span-2'>
        <Input
          className='focus:border-accent h-[60px] rounded-full bg-white ps-6'
          placeholder='Enter you email*'
        />
        <Button
          className='hover:bg-accent absolute top-1/2 right-1 h-[50px] -translate-y-1/2 rounded-full'
          size={'lg'}
        >
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}
