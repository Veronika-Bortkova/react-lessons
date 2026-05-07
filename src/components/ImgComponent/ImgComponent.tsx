import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImgComponent.css"

import type {FC} from "react";
type propImgType = {
    arrImg:string[];
}

const ImgComponent:FC<propImgType> = ({arrImg}) => {
    return (
        <>
            <Swiper className={"swiper"} navigation modules={[Navigation]}>
            {arrImg.map((value, index) =>
                <SwiperSlide className={".swiper-slide"} key={index}>
                <img className={"imgProduct"} src={value}/>
                </SwiperSlide>
            )
            }
            </Swiper>
        </>
    );
};

export default ImgComponent;