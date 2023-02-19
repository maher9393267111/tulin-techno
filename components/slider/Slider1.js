import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Slider1 = () => {
    return (
        <>
            <Swiper
                breakpoints={{                 
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next"
                }}             
            >
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl slider-1-img" src="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>تصاميم سوشيال ميديا</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl slider-1-img" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>غرافيك ديزاين</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/imgs/placeholders/img-4.jpg" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>ui/ux تصميم مواقع </a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img
                            
                            
                            className="rounded-xl  slider-1-img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>برمجة مواقع </a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div id="carausel-2-columns-1-arrows" className="flex">
                <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
                    <svg className="w-6 h-6" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                </span>
                <span className="text-blue-500 flex slick-arrow custom_next">
                    <svg className="w-6 h-6" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </div>
        </>
    );
};

export default Slider1;
