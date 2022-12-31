import React from "react";
import "./slider.css";
import {Swiper,SwiperSlide} from "swiper/react";

import {Pagination, Navigation, Scrollbar} from "swiper";
//import swiper styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'
// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import 'swiper/components/scrollbar/scrollbar.min.css'

import { SliderProducts } from "../data/demowork";
const Slider=()=>{
      return(
<>
   <div className="trending">
      <h2>Our Demo Work</h2>
      <Swiper
      modules ={[Pagination,Navigation,Scrollbar]}
      className="mySwiper"
      navigation={true}
       pagination={{clickable:true}}
       loopFillGroupWithBlank={true}
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={2}
      loop={true}>
            {SliderProducts.map((slide,i)=>(
      <SwiperSlide>
   <div className="left">
      <div className="name">
            <span>
                  {slide.name}
            </span>
      </div>
   </div>
            <img src={slide.img} alt="demoWork" className="img"/>
      </SwiperSlide>
            ))}     
      </Swiper>
   </div>
</>
      );
};
export default Slider;