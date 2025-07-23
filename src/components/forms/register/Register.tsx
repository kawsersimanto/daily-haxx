"use client";

import { Email, Otp } from "@/components/forms";
import { useRegisterSelector } from "@/store/auth/registerStore";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Register.css";

const Register = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const currentStep = useRegisterSelector.use.currentStep();
  const isHydrated = useRegisterSelector.use.isHydrated();
  const goToStep = useRegisterSelector.use.goToStep();

  useEffect(() => {
    if (isHydrated && swiperRef.current) {
      swiperRef.current.slideTo(currentStep);
    }
  }, [currentStep, isHydrated]);

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
      effect="fade"
    >
      <SwiperSlide key="email">
        <Email />
      </SwiperSlide>
      <SwiperSlide key="otp">
        <Otp />
      </SwiperSlide>
    </Swiper>
  );
};

export default Register;
