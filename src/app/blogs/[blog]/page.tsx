import RecentPostCard from '@/components/cards/RecentPostCard';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { getCategories, getSingleBlog, getSingleUser } from '@/lib/mockData/mockApi';
import { blogs } from '@/lib/mockData/mockData';
import { formateDate } from '@/lib/utils';
import { Calendar, MessageCircle, Quote, Search, UserRound } from 'lucide-react';
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

  const categories = getCategories();
  const formattedDate = formateDate(createdAt);
  const user = getSingleUser(author)!;

  return (
    <>
      <Hero pageName={title} />
      <section className='container mx-auto flex gap-12 px-4 py-20'>
        {/* Blog details */}
        <div className='flex-1'>
          <Image src={image} width={770} height={370} alt={title} className='w-full rounded-xl' />
          <div className='my-6 flex items-center gap-8 pt-1'>
            <div className='flex items-center gap-2'>
              <UserRound />
              <span>{user.name}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar />
              <span>{formattedDate}</span>
            </div>
            <div className='flex items-center gap-2'>
              <MessageCircle />
              <span>{comments.length} comments</span>
            </div>
          </div>
          <p className='text-justify'>{content}</p>
          <div className='border-l-primary bg-primary/5 relative mt-8 border-l-4 px-6 py-12 text-center'>
            <Title h={4} className='max-w-3/4'>
              &quot;{quote}&quot;
            </Title>
            <Quote size={60} className='fill-foreground absolute top-4 right-4 opacity-30' />
          </div>
        </div>
        {/* Side bar */}
        <aside className='w-[300px]'>
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
          <div className='mt-4 h-fit rounded-xl p-4 shadow-2xl'>
            <Title h={3}>Recent Post</Title>
            <span className='bg-primary block h-1 w-5 rounded-2xl'></span>
            <div className='mt-4 space-y-6'>
              {blogs.slice(0, 4).map((blog) => (
                <RecentPostCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
