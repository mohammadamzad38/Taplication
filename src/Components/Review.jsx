import { Scrollbar, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function Review() {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        modules={[Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        className="place-items-center mb-30"
        autoplay={{ delay: 1000 }}
        loop
      >
        <SwiperSlide>
          <img src="/images/google-review.jpg" alt="" className="w-2/5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/trust-pilot.jpg" alt="" className="w-2/5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/clutch-review.png" alt="" className="w-2/5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
