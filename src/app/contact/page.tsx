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
            Reach out to us if you have any questions, inquiries, or feedback. We&apos;d love to
            hear from you!
          </p>

          <div className='w-full space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <MapPin className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <address className='text-lg font-medium not-italic'>
                  KHL Laboni{"'"}s Dream, Plot-06, Afroza Begum Rd, Dhaka 1229
                </address>
                <address className='text-lg text-gray-600 not-italic'>
                  House No-46, Zia College Moar, Beside Sohid Minar, Jamalpur, Bangladesh
                </address>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <Phone className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <a href={'tel:+8801785696469'} className='text-lg font-medium'>
                  +880 1785696469
                </a>
                <a href={'tel:+880 17 935 44335'} className='text-lg text-gray-600'>
                  +880 17 935 44335
                </a>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='bg-primary flex-shrink-0 rounded-full p-3 text-white'>
                <Mail className='h-6 w-6' />
              </div>
              <div className='flex flex-col'>
                <a href={'mailto:info@trechsprout.com'} className='text-lg font-medium'>
                  info@techsprout.com
                </a>
                <a href={'mailto:support@trechsprout.com'} className='text-lg text-gray-600'>
                  support@techsprout.com
                </a>
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
