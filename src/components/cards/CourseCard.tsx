'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '../FeaturedCourses';

export function CourseCards({ course }: { course: Course }) {
  return (
    <Card className='group overflow-hidden transition-shadow duration-300 hover:shadow-lg'>
      <CardHeader className='p-0'>
        <div className='relative overflow-hidden'>
          <img
            src={course.image || '/placeholder.svg'}
            alt={course.title}
            className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110'
          />
          {/* Shine effect on card hover */}
          <div className='absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full'></div>
          <Badge className='absolute top-2 right-2 bg-blue-600'>{course.badge}</Badge>
        </div>
      </CardHeader>
      <CardContent className='p-4'>
        <CardTitle className='mb-2 text-lg'>{course.title}</CardTitle>
        <p className='mb-4 text-sm text-gray-600'>{course.description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-blue-600'>{course.price}</span>
          <Button size='sm' className='bg-blue-600 hover:bg-blue-700'>
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
