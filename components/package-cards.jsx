import React from 'react'

export default function PriceCards() {
  return (
    <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
    <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                <span>  ابدأ بختيار باقتك</span>
                <span className="text-mainColor-60">  لاتضيع وقتك</span>
                <span>

                </span>
            </h2>
            {/* <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                Best for freelance developers who need to save their time
            </p> */}
        </div>
        <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/startup.svg" alt="Monst" />
                    <h3 className="mb-2 text-4xl font-bold font-heading">الخطة الاقتصادية</h3>
                    <span className="text-4xl text-mainColor-600 font-bold font-heading">$45.99</span>
                    <p className="mt-2 mb-8 text-blueGray-400">موقع بسيط متجاوب</p>
                    <div className="flex flex-col items-center mb-8">
                        <ul className="text-blueGray-400">
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-600  font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>3 Emails</span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-600  font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span> 
                                    دومين com

                                </span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-600  font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span> قالب إحترافي مميز</span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-600  font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span> 5 صفحات</span>
                            </li>


                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span> هوست 20 جيجا SSD</span>
                            </li>

                        </ul>
                    </div>
                    <div>
                        {/* <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 rounded default-btn" href="#">
                            Start Free Trial
                        </a> */}
                         <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border" href="#">
                            احجز الآن
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-mainColor rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/agency.svg" alt="Monst" />
                    <h3 className="mb-2 text-4xl font-bold font-heading">الخطة المتقدمة</h3>
                    <span className="text-4xl font-bold font-heading">$65.99</span>
                    <p className="mt-2 mb-8">موقع متكامل متجاوب</p>
                    <div className="flex flex-col items-center mb-8">
                        <ul>
                            <li className="flex items-center mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>6 Emails</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                دومين com

                                </span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                قالب إحترافي

                                </span>
                            </li>
                            <li className="flex mb-3 items-center">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                10 صفحات

                                </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-green-600  font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                إستضافة 30 جيجا SSD

                                </span>
                            </li>



                        </ul>
                    </div>
                    <div>
                        {/* <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-mainColor-600 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">
                            Start Free Trial
                        </a> */}
                    <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500  bg-white hover:text-white hover:bg-blue-500 rounded default-box-border" href="#">
                            احجز الآن
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6">
                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/enterprise.svg" alt="Monst" />
                    <h3 className="mb-2 text-4xl font-bold font-heading">الخطة الذهبية</h3>
                    <span className="text-4xl text-mainColor-600 font-bold font-heading">$85.99</span>
                    <p className="mt-2 mb-8 text-blueGray-400">موقع ومتجر إلكتروني</p>
                    <div className="flex flex-col items-center mb-8">
                        <ul className="text-blueGray-400">
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>12 Emails</span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                دومين com
                                </span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                قالب إحترافي مميز 

                                </span>
                            </li>
                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                15 صفحات

                                </span>
                            </li>



                            <li className="flex mb-3">
                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                إستضافة 50 جيجا SSD

                                </span>
                            </li>
                     


                        </ul>
                    </div>
                    <div>
                        {/* <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 rounded default-btn" href="#">
                            Start Free Trial
                        </a> */}
                     
                        <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-mainColor-600 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded default-box-border" href="#">
                            احجز الآن
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
