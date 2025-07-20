"use client";

import { Email, Otp } from "@/components/forms";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Register = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper.activeIndex + 1)}
      allowTouchMove={false}
      draggable={false}
      className="!px-5"
    >
      <SwiperSlide>
        <Email />
      </SwiperSlide>
      <SwiperSlide>
        <Otp />
      </SwiperSlide>
    </Swiper>
  );
};

export default Register;
