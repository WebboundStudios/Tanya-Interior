import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "../../utils/cn";

export const Carousel_004 = ({
  images = [],
  className,
  showPagination = true,
  showNavigation = false,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}) => {
  const formattedImages = images.map((img, idx) => {
    if (typeof img === "string") {
      return { src: img, alt: `TT Interiors Showcase ${idx + 1}` };
    }
    return img;
  });

  const css = `
  .Carousal_004 {
    width: 100%;
    height: 520px;
    padding-bottom: 45px !important;
  }
  
  .Carousal_004 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    border-radius: 20px;
    overflow: hidden;
  }

  .Carousal_004 .swiper-pagination-bullet {
    background: #8C6D46;
    opacity: 0.4;
    transition: all 0.3s ease;
  }

  .Carousal_004 .swiper-pagination-bullet-active {
    background: #8C6D46;
    opacity: 1;
    width: 24px;
    border-radius: 4px;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={cn("relative w-full flex items-center justify-center overflow-hidden", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2800,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="creative"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_004"
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-10%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["10%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
        >
          {formattedImages.map((image, index) => (
            <SwiperSlide key={index} className="shadow-2xl border border-[#E8E2D8]/50">
              <img
                className="h-full w-full object-cover scale-105 rounded-2xl luxury-image-filter"
                src={image.src}
                alt={image.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};
