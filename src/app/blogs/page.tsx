import { BlogCard } from '@/components/cards/BlogCard';
import Hero from '@/components/Hero';
import { blogs } from '@/lib/mockData/mockData';

export default function page() {
  return (
    <>
      <Hero pageName='Blog' />
      <section>
        <div>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <div></div>
      </section>
    </>
  );
}
