import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const SliderTechno = () => {
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
                            <img className="rounded-xl slider-1-img slider-tech-1   " src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a > ReactJs</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p> */}
                                </div>
                                <div>
                                    {/* <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl slider-1-img" src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>NextJs  </a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p> */}
                                </div>
                                <div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl slider-1-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>Javascript</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p> */}
                                </div>
                                <div>
                                    {/* <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img
                            
                            
                            className="rounded-xl  slider-1-img" src="https://yt3.googleusercontent.com/ytc/AL5GRJUJ6B0I0wJMRqqQ9AilX4jHKkTzrcN2c2scntUOcQ=s900-c-k-c0x00ffffff-no-rj" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>Figma</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p> */}
                                </div>
                                <div>
                                    {/* <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


{/* // JQUERY */}

<SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl slider-1-img" src="https://www.chicagocomputerclasses.com/wp-content/uploads/2016/01/jquery.gif" alt="Monst" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a > Jquery</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">تولين تكنولوجي</p> */}
                                </div>
                                <div>
                                    {/* <Link href="/services">
                                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border">View Details</a>
                                    </Link> */}
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

export default SliderTechno;
