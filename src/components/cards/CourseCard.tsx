'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { TextBadge } from '../ui/text-badge';
import { Clock, FileText, Users } from 'lucide-react';
import Title from '../Title';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Course } from '@/lib/mockData/mockDataTypes';
import { getUserName } from '@/lib/mockData/mockApi';
import Link from 'next/link';

export function CourseCards({ course }: { course: Course }) {
  const {
    thumbnail,
    title,
    _id,
    category,
    price,
    instructor: author,
    duration,
    lessons,
    reviews,
    enrolments,
  } = course;

  const instructor = getUserName(author);
  return (
    <Link href={`/courses/${_id}`}>
      <Card className='group text-foreground gap-0 overflow-hidden pt-0 pb-0 shadow-xl'>
        <CardHeader className='p-0'>
          <div className='relative overflow-hidden'>
            <Image
              src={thumbnail}
              alt={title}
              className='h-[260px] w-full duration-300 group-hover:scale-110'
              width={375}
              height={250}
            />
            {/* Shine effect on card hover */}
            <div className='absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full'></div>
            <TextBadge className='bg-primary absolute top-4 left-4 rounded-full text-white'>
              {category}
            </TextBadge>
          </div>
        </CardHeader>
        <CardContent className='space-y-4 p-6 text-[14px]'>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-1'>
              <FileText width={20} />
              <span>{lessons?.length} lesson</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock width={20} />
              <span>{duration}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Users width={20} />
              <span>{enrolments?.length} students</span>
            </div>
          </div>
          <CardTitle className='text-lg'>
            <Title h={5}>{title}</Title>
          </CardTitle>
          <div className='flex items-center'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                stroke='#fff700'
                width={20}
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                <g id='SVGRepo_iconCarrier'>
                  <path
                    d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z'
                    fill='#fff700'
                  ></path>
                </g>
              </svg>
            ))}
            <span className='ms-2 mt-1 block'>({reviews?.length})</span>
          </div>
          <div className='flex items-center justify-between border-t-2 pt-4'>
            <div className='flex items-center gap-2 text-lg'>
              <Avatar>
                <AvatarImage src='https://github.com/leerob.png' alt='@leerob' />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <span>{instructor}</span>
            </div>
            <span className='text-primary font-lexend text-2xl font-bold'>${price}.00</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
