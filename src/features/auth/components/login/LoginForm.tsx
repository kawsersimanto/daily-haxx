"use client";

import { LoginEmailStep, LoginOtpStep, useAuthSelector } from "@/features/auth";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const LoginForm = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const currentStep = useAuthSelector.use.currentStep();
  const hydrated = useAuthSelector.use.hydrated();
  const goToStep = useAuthSelector.use.goToStep();

  useEffect(() => {
    if (hydrated && swiperRef.current) {
      swiperRef.current.slideTo(currentStep);
    }
  }, [currentStep, hydrated]);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      allowTouchMove={false}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => goToStep(swiper.activeIndex)}
      className="register-slider max-w-[440px] !px-5"
      focusableElements={`[data-slot="form-control"]`}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide key="email">
        <LoginEmailStep />
      </SwiperSlide>
      <SwiperSlide key="otp">
        <LoginOtpStep />
      </SwiperSlide>
    </Swiper>
  );
};
