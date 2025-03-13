import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@style/component/ProjectCard.scss';
import {EffectCards} from 'swiper/modules';

interface SwiperInfoProps {
    activeIndex: number;
}
interface SwiperLinksProps {
    [index: number]: string;
}
export const ProjectCards = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const slidesLinks: SwiperLinksProps  = {
        0: "https://praktik-hifi-corner-med-react-azad-magnus-og-oliver.vercel.app",
        1: "https://praktik-din-m-gler-azad-magnus-oliver.onrender.com",
        2: "https://projekt-moviez-sh3dow-ware.onrender.com",
    }

    const indexSlide = (swiperInfo: SwiperInfoProps) => {
        const SwiperActiveIndex = swiperInfo.activeIndex;
        setActiveIndex(SwiperActiveIndex)
    }


    return (
        <>
            <div className="swiper-container">
            <h2 className={"swiper-header__title"}>My projects</h2>
            <Swiper
                effect={'cards'}
                grabCursor={false}
                modules={[EffectCards]}
                longSwipes={false}
                onActiveIndexChange={indexSlide}
                initialSlide={activeIndex}
                className="my_Swiper"
            >
                <SwiperSlide>Hifi-Corner</SwiperSlide>
                <SwiperSlide>Din maegler</SwiperSlide>
                <SwiperSlide>ProjektMoviez</SwiperSlide>
            </Swiper>
                <a className="swiper-link__project" target={"_blank"} href={slidesLinks[activeIndex]}>Show project</a>
            </div>
        </>
    );
}
