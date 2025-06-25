import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import './banner.css';
const BANNER = [
  { title: 'c', name: 'banner3.jpg' },
  { title: 'a', name: 'banner1.jpg' },
  { title: 'b', name: 'banner2.jpg' },
];
const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="overflow-hidden"
      >
        <CarouselContent>
          {BANNER.map((item) => (
            <CarouselItem key={item.name}>
              <a className="banner-item" title={item.name}>
                <Image src={`/images/${item.name}`} width={1920} height={782} alt={item.name} />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="btn-next left-10 cursor-pointer" />
        <CarouselNext className=" cursor-pointer btn-pre right-10" />
      </Carousel>
    </div>
  );
};

export default Banner;
