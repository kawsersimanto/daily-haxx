"use client";

import {
  CompanyInfo,
  JobDetails,
  PersonalInfo,
} from "@/components/forms/onboarding";
import { useOnBoardingSelector } from "@/store/auth/onboardingStore";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OnBoardingPage = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const currentStep = useOnBoardingSelector.use.currentStep();
  const goToStep = useOnBoardingSelector.use.goToStep();
  const isHydrated = useOnBoardingSelector.use.isHydrated();

  useEffect(() => {
    if (isHydrated && swiperRef.current) {
      swiperRef.current.slideTo(currentStep);
    }
  }, [currentStep, isHydrated]);

  return (
    <div className="max-w-[590px] mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => goToStep(swiper.activeIndex)}
        focusableElements={`[data-slot="form-control"]`}
        modules={[Navigation, Pagination]}
        allowTouchMove={false}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <PersonalInfo />
        </SwiperSlide>
        <SwiperSlide>
          <JobDetails />
        </SwiperSlide>
        <SwiperSlide>
          <CompanyInfo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnBoardingPage;
