import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Blog, Course } from '@/lib/dummy-data';
import Image from 'next/image';
import { TextBadge } from '../ui/text-badge';
import { Calendar, Clock, FileText, UserRound, Users } from 'lucide-react';
import Title from '../Title';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function BlogCard({ blog }: { blog: Blog }) {
  const { author, category, date, image, title } = blog;
  return (
    <Card className='group text-foreground gap-0 overflow-hidden pt-0 pb-0 shadow-xl'>
      <CardHeader className='p-0'>
        <div className='relative overflow-hidden'>
          <Image src={image} alt={title} className='duration-300 group-hover:scale-110' />
          {/* Shine effect on card hover */}
          <div className='absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full'></div>
        </div>
      </CardHeader>
      <CardContent className='space-y-4 p-6 text-[14px]'>
        <TextBadge className='bg-primary rounded-full text-white'>{category}</TextBadge>
        <CardTitle className='text-lg'>
          <Title h={5}>{title}</Title>
        </CardTitle>
        <div className='flex items-center justify-between pt-4'>
          <div className='flex items-center gap-2'>
            <UserRound />
            <span>{author}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
