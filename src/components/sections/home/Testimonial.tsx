import AnimatedText from '@/components/AnimatedText';
import Title from '@/components/Title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Testimonial() {
  return (
    <section>
      <div></div>
      <div>
        <Title h={2}>
          What Our <AnimatedText text='Students' /> Say About Us
        </Title>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>1</CarouselItem>
            <CarouselItem>2</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
