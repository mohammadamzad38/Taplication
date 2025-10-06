import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import About from "./About";
import SuccessCount from "./SuccessCount";
import Review from "./Review";

export default function Home() {
  return (
    <div className="container">
      <section>
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 500 }}
          speed={2000}
          className="h-[500px] mt-5 rounded-xl shadaw-xl"
        >
          <SwiperSlide className="border">
            <img src="/images/slide-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide-2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide-3.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>

      <About />

      <SuccessCount />

      <Review />
    </div>
  );
}
