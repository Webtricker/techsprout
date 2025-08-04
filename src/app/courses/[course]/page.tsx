import Title from '@/components/Title';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TextBadge } from '@/components/ui/text-badge';
import { getSingleCourse, getSingleInstructor } from '@/lib/mockData/mockApi';
import { Clock, FileText, Users } from 'lucide-react';
import Image from 'next/image';

export default async function Course({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const {
    category,
    title,
    description,
    thumbnail,
    demoVideo,
    duration,
    enrolments,
    featured,
    instructor,
    isFree,
    lessons,
    price,
    reviews,
    audience,
    keyLearningPoints,
    requirements,
    resources,
  } = getSingleCourse(course);

  const author = getSingleInstructor(instructor)!;

  return (
    <section className='py-16'>
      <div className='bg-accent py-20'>
        <div className='container mx-auto space-y-4 px-4 text-white'>
          <TextBadge className='bg-primary rounded-full text-white'>{category}</TextBadge>
          <Title h={2} className='text-white'>
            {title}
          </Title>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <Avatar className='h-10 w-10 bg-white'>
                <Image src={author?.image} width={80} alt={author?.name} height={80} />
              </Avatar>
              <p>{author.name}</p>
            </div>
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
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-12 flex gap-4 px-4'>
        <div className='flex-1'>
          <Image src={thumbnail} width={870} height={570} alt={title} className='w-full' />
          <div>
            <Tabs defaultValue='account' className='w-[400px]'>
              <TabsList>
                <TabsTrigger value='info'>Course Information</TabsTrigger>
                <TabsTrigger value='demo'>Demo Video</TabsTrigger>
                <TabsTrigger value='review'>Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value='info'>Course Information</TabsContent>
              <TabsContent value='demo'>Demo Video</TabsContent>
              <TabsContent value='review'>Reviews</TabsContent>
            </Tabs>
          </div>
        </div>
        <aside className='-mt-60'>
          {/* Enrolment */}
          <div className='rounded-2xl border bg-white shadow'>
            <div className='p-6 text-center'>
              <div>{isFree ? <Title h={3}>Free</Title> : <Title h={3}>${price}</Title>}</div>
              <div className='mt-2 space-y-2'>
                <Button size={'lg'}>Enroll Now</Button>
                {isFree ? <p>Free access this course</p> : <p>Pay {price} to access this course</p>}
              </div>
            </div>
            <div className='space-y-4 border-t-2 p-6'>
              <div className='flex items-center gap-1'>
                <FileText width={20} />
                <span>{lessons?.length} lesson includes</span>
              </div>
              <div className='flex items-center gap-1'>
                <Users width={20} />
                <span>{enrolments?.length} students total enrolled</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock width={20} />
                <span>{duration} hours duration</span>
              </div>
            </div>
          </div>
          {/* Audience, Requirements,Resources  */}
          <div className='mt-6 max-w-[260px] rounded-2xl border bg-white shadow'>
            <div className='border-b p-6'>
              <Title h={5}>A course by</Title>
              <div className='mt-2 flex items-center gap-1'>
                <Avatar className='bg-primary/20 h-10 w-10'>
                  <Image src={author?.image} width={80} alt={author?.name} height={80} />
                </Avatar>
                <Title h={4}>{author.name}</Title>
              </div>
            </div>
            <div className='space-y-4 p-6'>
              <div>
                <Title h={5}>Audience</Title>
                <ul className='mt-2 space-y-2'>
                  {audience.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Title h={5}>Recourses</Title>
                <ul className='mt-2 space-y-2'>
                  {resources.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Title h={5}>Requirements</Title>
                <ul className='mt-2 space-y-2'>
                  {requirements.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
