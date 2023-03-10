import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const Slider3 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next",
                }}
                className="custom-class"
            >

                <SwiperSlide>
                    <img 
                   
                    
                    className="rounded img-ecom  w-full  h-[520px]" src=
                     " https://cdn.dribbble.com/users/1254731/screenshots/16899784/media/9d83b579cc6279663ac0324bfc15d94f.jpg?compress=1&resize=400x300"
                    // "/imgs/placeholders/mockup-1.png"
                    
                    alt="Monst" />
                </SwiperSlide>
                <SwiperSlide>

                    <img className="rounded" src="/imgs/placeholders/mockup-2.png" alt="Monst" />
                </SwiperSlide>
                <SwiperSlide>

                    <img className="rounded" src="/imgs/placeholders/mockup-3.png" alt="Monst" />
                </SwiperSlide>
            </Swiper>

            {/* <div className="custom-nav">
                <button type="button" className="custom_prev">
                    Prev
                </button>
                <button type="button" className="custom_next">
                    Next
                </button>
            </div> */}
        </>
    );
};

export default Slider3;