import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { getSingleBlog } from '@/lib/mockData/mockApi';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default async function page({ params }: { params: Promise<{ blog: string }> }) {
  const {
    _id,
    author,
    category,
    content,
    comments,
    createdAt,
    image,
    keyPoints,
    quote,
    tags,
    title,
  } = getSingleBlog((await params).blog);
  return (
    <>
      <Hero pageName={title} />
      <section className='container mx-auto px-4 py-20'>
        <div>
          <Image src={image} width={770} height={370} alt={title} />
        </div>
        <aside>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search courses...'
              className='focus:border-primary focus:ring-primary h-10 w-full rounded-md border border-gray-300 pl-8 text-sm focus:ring-2 focus:outline-none'
            />
            <Button
              size={'icon'}
              variant={'ghost'}
              className='hover:text-primary absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400 hover:bg-transparent'
            >
              <Search />
            </Button>
          </div>
          <div className='mt-4 h-fit rounded-xl p-4 shadow-2xl'>
            <Title h={3}>Categories</Title>
            <span className='bg-primary block h-1 w-5 rounded-2xl'></span>
            <div className='mt-4 space-y-4'>
              {categories.map((category, idx) => (
                <div className='flex items-center gap-3' key={idx}>
                  <Checkbox id={category} className='cursor-pointer shadow' />
                  <Label htmlFor={category} className='cursor-pointer'>
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
