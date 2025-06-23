"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import { SwiperOptions } from "swiper/types";

interface SlideItem {
  id: string | number;
  content: React.ReactNode;
}

interface ReusableSwiperProps {
  slides: SlideItem[];
  swiperOptions?: SwiperOptions;
}

export default function ReusableSwiper({
  slides,
  swiperOptions = {},
}: ReusableSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade, Thumbs]}
      {...swiperOptions}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}
