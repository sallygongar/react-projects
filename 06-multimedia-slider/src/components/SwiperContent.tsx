//import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
//import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <>
      <Swiper spaceBetween={30} slidesPerView={1} loop={true} navigation={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
