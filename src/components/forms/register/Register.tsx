"use client";

import { Email, Otp } from "@/components/forms";
import { useRegisterSelector } from "@/store/auth/registerStore";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Register.css";

const Register = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const currentStep = useRegisterSelector.use.currentStep();
  const isHydrated = useRegisterSelector.use.isHydrated();

  useEffect(() => {
    if (isHydrated) {
      if (swiperRef.current && swiperRef.current.activeIndex !== currentStep) {
        swiperRef.current.slideTo(currentStep);
      }
    }
  }, [currentStep, isHydrated]);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      allowTouchMove={false}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="!px-5 register-slider"
    >
      <SwiperSlide>
        <Email />
      </SwiperSlide>
      <SwiperSlide className="!me-0">
        <Otp />
      </SwiperSlide>
    </Swiper>
  );
};

export default Register;
