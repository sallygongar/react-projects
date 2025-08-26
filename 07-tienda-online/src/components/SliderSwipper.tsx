// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import messages from "../data/sliderMesagges";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/slider.module.css";

console.log("Lista de mensajes:", messages);

export default function SliderSwipper() {
  return (
    <Swiper
      className={`swiper ${styles.swipperCustom}`}
      modules={[Navigation]}
      navigation
      loop
      spaceBetween={50}
      slidesPerView={1}
      /*    onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      {messages?.map((item: string, index: number) => (
        <SwiperSlide key={item} virtualIndex={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
