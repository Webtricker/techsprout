import Hero from '@/components/Hero';
import { getSingleBlog } from '@/lib/mockData/mockApi';

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
      <Hero pageName='Blog' />
    </>
  );
}
