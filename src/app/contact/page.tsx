'use client';
import Hero from '@/components/Hero';
import ContactForm from '@/components/sections/contact/ContactForm';
import Title from '@/components/Title';
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
      <section className='container mx-auto my-8 grid grid-cols-1 gap-8 px-4 md:mb-24 lg:my-16 lg:grid-cols-2 lg:gap-12'>
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
        <ContactForm />
      </section>
      <section className='relative h-[300px] md:h-[550px]'>
        <Map posix={[4.79029, -75.69003]} />
      </section>
    </>
  );
}
