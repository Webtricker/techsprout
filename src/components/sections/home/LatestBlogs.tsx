import AnimatedText from '@/components/AnimatedText';
import { BlogCard } from '@/components/cards/BlogCard';
import Title from '@/components/Title';
import { TextBadge } from '@/components/ui/text-badge';
import { blogs } from '@/lib/dummy-data';

export default function LatestBlogs() {
  return (
    <section className='custom-container py-[70px]'>
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
      <div className='mt-12 grid grid-cols-3 gap-4'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
