"use client";

import { Email, Otp } from "@/components/forms";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Register = () => {
  return (
    <div className="md:max-w-[400px] max-w-[390px] mx-auto">
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
    </div>
  );
};

export default Register;
