// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
export const GalleryComponent = ()  => {
    return (
        <Swiper spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={"https://picsum.photos/200/300"} alt={"placeholder"} /></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/200/400"} alt={"placeholder"} /></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/200/500"} alt={"placeholder"} /></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/200/600"} alt={"placeholder"} /></SwiperSlide>
        </Swiper>
    );
};