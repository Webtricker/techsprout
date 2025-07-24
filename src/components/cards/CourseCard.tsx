'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/dummy-data';
import Image from 'next/image';
import { TextBadge } from '../ui/text-badge';

export function CourseCards({ course }: { course: Course }) {
  return (
    <Card className='group overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg'>
      <CardHeader className='p-0'>
        <div className='relative overflow-hidden'>
          <Image
            src={course.image}
            alt={course.title}
            className='duration-300 group-hover:scale-110'
          />
          {/* Shine effect on card hover */}
          <div className='absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full'></div>
          <TextBadge className='absolute top-2 left-4 rounded-full'>{course.badge}</TextBadge>
        </div>
      </CardHeader>
      <CardContent className='p-4'>
        <CardTitle className='mb-2 text-lg'>{course.title}</CardTitle>
        <p className='mb-4 text-sm text-gray-600'>{course.description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold'>{course.price}</span>
          <Button size='sm' className=''>
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
