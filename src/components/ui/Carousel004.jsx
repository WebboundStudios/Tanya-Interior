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
      return { src: img, alt: `Interior Showcase ${idx + 1}` };
    }
    return img;
  });

  const css = `
  .Carousal_004 {
    width: 100%;
    height: 480px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_004 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.3);
  }

  .Carousal_004 .swiper-pagination-bullet {
    background: #8C6D46;
    opacity: 0.35;
    transition: all 0.3s ease;
  }

  .Carousal_004 .swiper-pagination-bullet-active {
    background: #8C6D46;
    opacity: 1;
    width: 24px;
    border-radius: 6px;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-full overflow-hidden flex items-center justify-center", className)}
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
                  delay: 2500,
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
            <SwiperSlide key={index} className="overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-2xl luxury-image-filter"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-all">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-all">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};
