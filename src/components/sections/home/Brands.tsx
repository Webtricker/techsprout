'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { brands } from '@/lib/dummy-data';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className='border-b-2 bg-white py-12'>
      <div className='custom-container'>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {brands.map((brand, idx) => (
              <CarouselItem
                key={idx}
                className='flex basis-1/6 items-center justify-center opacity-50 grayscale-100 transition-none duration-300 select-none hover:opacity-100 hover:grayscale-0'
              >
                <Image src={brand} width={120} height={50} alt='brand' />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
