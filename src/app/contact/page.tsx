'use client';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        ssr: false,
      }),
    []
  );

  return (
    <>
      <Hero pageName='Contact' />
      <section className='container mx-auto mt-16 mb-16 grid grid-cols-1 gap-8 px-4 md:mb-24 lg:grid-cols-2 lg:gap-12'>
        {/* Keep In Touch With Us Section */}
        <div className='flex flex-col items-start'>
          <Title h={2}>Keep In Touch With Us</Title>
          <div className='bg-primary mb-8 h-1 w-24' />
          <p className='mb-10 text-lg leading-relaxed text-gray-600'>
            Nequa convallis cras semper auctor. Libero id faucibus getnvallis.id faucibus nisl
            tincidunt egetnvallis.
          </p>

          <div className='w-full space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <MapPin className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-medium'>68 Street Holakt Street world</span>
                <span className='text-lg text-gray-600'>10002 New York</span>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <Phone className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-medium'>{'+123 555 69090'}</span>
                <span className='text-lg text-gray-600'>{'+123 555 69099'}</span>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <Mail className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-medium'>info@example.com</span>
                <span className='text-lg text-gray-600'>web@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Form Section */}
        <div className='rounded-lg bg-gray-100 p-8 shadow-lg md:p-12'>
          <Title h={2}>Get in touch</Title>
          <div className='bg-primary mb-8 h-1 w-20' />
          <form className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <Input
                  id='name'
                  placeholder='Name'
                  type='text'
                  className='h-12 bg-white text-base'
                />
              </div>
              <div>
                <Input
                  id='email'
                  placeholder='Email*'
                  type='email'
                  required
                  className='h-12 bg-white text-base'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <Input
                  id='phone'
                  placeholder='Phone'
                  type='tel'
                  className='h-12 bg-white text-base'
                />
              </div>
              <div>
                <Input
                  id='subject'
                  placeholder='Subject*'
                  type='text'
                  required
                  className='h-12 bg-white text-base'
                />
              </div>
            </div>
            <div>
              <Textarea
                id='message'
                placeholder='Your Message*'
                rows={6}
                required
                className='h-40 bg-white text-base'
              />
            </div>
            <Button
              type='submit'
              className='bg-primary hover:bg-primary/90 w-full py-3 text-lg text-white'
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </section>
      <section className='relative h-[550px]'>
        <Map posix={[4.79029, -75.69003]} />
      </section>
    </>
  );
}
