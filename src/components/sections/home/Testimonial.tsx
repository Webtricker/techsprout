'use client';
import { type CarouselApi } from '@/components/ui/carousel';
import AnimatedText from '@/components/AnimatedText';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Title from '@/components/Title';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { testimonials } from '@/lib/dummy-data';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on('select', () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const scrollPrev = () => carouselApi?.scrollPrev();
  const scrollNext = () => carouselApi?.scrollNext();

  return (
    <section className='bg-accent/60 py-[120px]'>
      <div className='custom-container grid grid-cols-2 items-center gap-4'>
        <div className='flex justify-center'>
          {testimonials.map(
            (testimonial, idx) =>
              idx === currentSlide && (
                <Image
                  src={testimonial.image}
                  key={idx}
                  alt={testimonial.message}
                  className='rounded-[45%]'
                  width={400}
                />
              )
          )}
        </div>
        <div className='max-w-[400px]'>
          <div>
            <Title h={2}>
              What Our <AnimatedText text='Students' /> Say About Us
            </Title>
          </div>
          <Carousel
            className='mt-6'
            setApi={setCarouselApi}
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className='mt-4 flex items-center gap-4'>
            <Button size={'icon'} onClick={scrollPrev} className='h-12 w-12 outline-0'>
              <ArrowLeft size={40} />
            </Button>
            <Button size={'icon'} onClick={scrollNext} className='h-12 w-12 outline-0'>
              <ArrowRight size={40} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
