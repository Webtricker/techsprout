import AnimatedText from '@/components/AnimatedText';
import { BlogCard } from '@/components/cards/BlogCard';
import Title from '@/components/Title';
import { TextBadge } from '@/components/ui/text-badge';
import { blogs } from '@/lib/dummy-data';
import shape1 from '@/assets/img/shapes/blog_shape01.png';
import shape2 from '@/assets/img/shapes/blog_shape02.png';
import Image from 'next/image';

export default function LatestBlogs() {
  return (
    <section className='custom-container relative pt-0 pb-20 lg:pt-[70px] lg:pb-[120px]'>
      <Image
        src={shape1}
        width={80}
        alt='shape'
        className='absolute top-1/4 -left-1/10 hidden xl:block'
      />
      <Image
        src={shape2}
        width={80}
        alt='shape'
        className='animate-spin-slow absolute -right-1/10 bottom-1/8 hidden xl:block'
      />
      <div className='space-y-4 text-center'>
        <TextBadge>Always Smart To Hear News</TextBadge>
        <Title h={2}>
          Latest <AnimatedText text='News' /> & Blog
        </Title>
        <p className='mx-auto max-w-[550px]'>
          Receive huge benefits with our lifetime Plumbing Receive huge benefits with our lifetime
          Plumbing email address will be shown
        </p>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
