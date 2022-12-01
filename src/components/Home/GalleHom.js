import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function GalleHome() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <h2 className="text-center pt-10">Our Recent Projetcs</h2>
            <div className="w-full flex justify-center py-10">
                
                <div className="w-[90%] lg:flex col justify-center">
                    
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                              },
                              480: {
                                slidesPerView: 1,
                                spaceBetween: 30
                              },
                              640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                              }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            rpdata?.stock?.map((item, index) =>{
                                return(
                                    <SwiperSlide key={index} className=" w-full lg:w-[400px]  rounded-3xl h-[250px] lg:h-[400px] bg-center bg-cover" style={{ backgroundImage: `url("${item}")` }} ></SwiperSlide>
                                )
                            })
                        }
                        ...
                    </Swiper>
                </div>
            </div>
        </>
    );
}



export default GalleHome;