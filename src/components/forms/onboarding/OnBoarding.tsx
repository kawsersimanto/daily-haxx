"use client";

import {
  CompanyInfo,
  JobDetails,
  PersonalInfo,
} from "@/components/forms/onboarding";
import { Progress } from "@/components/ui/progress";
import { useOnBoardingSelector } from "@/store/auth/onboardingStore";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OnBoarding = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const currentStep = useOnBoardingSelector.use.currentStep();
  const goToStep = useOnBoardingSelector.use.goToStep();
  const isHydrated = useOnBoardingSelector.use.isHydrated();
  const progress = useOnBoardingSelector.use.progress();

  useEffect(() => {
    if (isHydrated && swiperRef.current) {
      swiperRef.current.slideTo(currentStep);
    }
  }, [currentStep, isHydrated]);

  return (
    <div className="max-w-[440px] mx-auto">
      <div className="mb-[38px]">
        <p className="mb-2">Step {currentStep + 1} of 3</p>
        <Progress value={progress} className="w-full h-[5px] rounded-[20px]" />
      </div>
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

export default OnBoarding;
