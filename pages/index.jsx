import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import Slider2 from "../components/slider/Slider2"
import Slider3 from "../components/slider/Slider3"
import SliderTechno from "../components/slider/slider-technologes"
import Link from "next/link"
import PackageCards from '../components/package-cards'

function Home() {
    return (
        <>
            <Layout  dir="rtl">
                <section className="bg-auto bg-top bg-no-repeat     
                 -mt-banner
                
                pt-24 main-iamge" style={{ backgroundImage: "url('/imgs/backgrounds/main-background-image.png')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn" style={{ color: "#fff" }}>
                                {/* تولين تكنولوجي */}
                                Tuline Technology
                                  
                                   <br />
                                  {/* <span>
                                    شركة برمجيات
                                  </span> */}
                                </h2>
                                <p className="text-whiteColor-600 leading-relaxed wow animate__animated animate__fadeIn">

                                <span className="typewrite d-inline text-brand">
                                        <TextEffect text1="برمجة مواقع" text2="تصميم مواقع"  
                                        text3="تصاميم سوشال ميديا"
                                        
                                        />
                                    </span>
                                    نحن <strong className="text-600">تولين تكنولوجي</strong>, شركة برمجيات{" "}
                                    {/* <span className="typewrite d-inline text-brand">
                                        <TextEffect text1="برمجة مواقع" text2="تصميم مواقع"  
                                        text3="تصاميم سوشال ميديا"
                                        
                                        />
                                    </span> */}
                                </p>
                            </div>
                            <div>
                                <a className="btn-primary btn-transparent py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2" href="#key-features">
                                خدمات نقدمها
                                </a>
                                <a className="btn-white btn-main-color wow animate__animated animate__fadeIn hover-up-2" data-wow-delay=".3s" href="#how-we-work">
                                الخطط و الإستراجية
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                        <img src="/imgs/elements/pattern.png" alt="Monst" />
                        <div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
                            <img className="jump rounded wow animate__animated animate__fadeIn" src="/imgs/placeholders/dashboard.png" alt="Monst" />
                        </div>
                    </div> */}
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                                        <CounterUp count={950} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-whiteColor-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                                        <CounterUp count={58} time={3} />
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading text-whiteColor-600"> k </span>
                                    <p className="text-xs sm:text-base text-whiteColor-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                                        <CounterUp count={500} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-whiteColor-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                                        <CounterUp count={300} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-whiteColor-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



{/* // Section 2  */}

<section className="py-12 md:py-20">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                        فريق عمل متكامل لحل  <span className="text-blue-500">المشكلات البرمجية المعقدة</span> 
                                    </h2>
                                    <p className="text-s md:text-base text-blueGray-600 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                    بفضل خبراتنا المتعددة . أجتمعنا كفريق كامل و دمجنا خبرانتا الواسعة لتحقيق موقع متكامل بكل ما يحتاج
                                    </p>
                                </div>
                                <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div id="carausel-fade-1-arrows" className="flex"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                        <Slider2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* // End Section 2 */}




{/* // Section 3  */}



                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <div className="container px-4 mx-auto">
                      
{/* // Header- */}


<div className=" text-3xl font-bold text-center my-6">

<h2>الخطط و الإستراتيجية لنجاح موقعك</h2>

</div>




                        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full-mainColor">1</div>
                                    <img className="h-36 mx-auto my-4" src="/imgs/illustrations/eating.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">دراسة النشاط التجاري</h3>
                                    <p className="text-md font-bold text-blueGray-600 leading-relaxed">نقوم بدراسة نشاطك التجاري و نوع المنتجات و المحتوى الخاص بك لإدراجه ضمن الموقع و دراسة حول الجمهور الخاص بك
                                    </p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full-mainColor">2</div>
                                    <img className="h-36 mx-auto my-4" src="/imgs/illustrations/space.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">وضع الخطة العمل</h3>
                                    <p className="text-md font-bold text-blueGray-600 leading-relaxed">
                                    وضع خطة و ألية العمل حيث نتحقق من الألوان الخاصة بالموقع و خطة بناء الصفحات و التصميم الرئيسي 
                                    </p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full-mainColor">3</div>
                                    <img className="h-36 mx-auto my-4" src="/imgs/illustrations/tasks.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">التنفيذ و التصميم</h3>
                                    <p className="text-md font-bold text-blueGray-600 leading-relaxed">

                                    نعمل على التصميم وفق نشاط الموقع و التصميم المتوافق مع محتويات الموقع و وضع اللمسات الأكثر جاذبية 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





{/* // end section three */}




{/* // section 4 */}

<section className="py-20" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8">
                                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                       لماذا تختار <span className="text-blue-600">تولين تكنولوجي</span> 
                                    </h2>
                                    {/* <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                                    </p>
                                    <Link href="/services">
                                        <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            Learn More
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                            <div  dir="rtl" className="w-full lg:w-1/2 px-8">
                                <ul className="space-y-12">
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">حلول معقدة و ذكية</h3>
                                            <p className="text-blueGray-600 font-semibold    leading-loose">
                                            نسعى دائماً للتطوير و التحديث . و كان التركيز على الإتجاه نحو أفاق جديدة و برمجيات أكثر ذكاءاً و عصرية
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">الجودة الضمان</h3>
                                            <p className="text-blueGray-600 font-semibold  leading-loose">
                                            هدفنا المحافظة على جودة الموقع و ضمان أدائها بأكمل وجه و بدون أي مشاكل . لذلك أثناء العمل نحققق شروط الجودة و الضمان

                                            
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">الأسعار المدروسة</h3>
                                            <p className="text-blueGray-600 font-semiboldleading-loose">
                                                
                                            لا شك بأن السعر من أحد العوامل التي يفكر بها العميل قبل تصميم الموقع . و لهذا قمنا بدراسة شاملة للحصول على أفضل سعر ممكن
                                            
                                            </p>
                                        </div>
                                    </li>


                                

                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">4</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">الخدمات و التقنية</h3>
                                            <p className="text-blueGray-600 font-semiboldleading-loose">
                                                
                                            نقدم العديد من الخدمات المجانية بعد تسليم الموقع . و نعمل على احدث التقنيات الحديثة في إنشاء المواقع و المتاجر الإلكترونية 
                                            </p>
                                        </div>
                                    </li>






                                </ul>
                            </div>
                        </div>
                    </div>
                </section>









{/* end section 4  */}



{/* // Section five   */}



<section className="py-12 md:pt-20 md:pb-12" id="how-we-work">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-20 text-center">
                            <span className="inline-block text-xs py-1 px-3 text-blue-700 font-semibold bg-blue-100 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                من أعمالنا
                            </span>
                            <h2 className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay="0">
                                برمجة مواقع تجارية مع بوابة دفع 
                            </h2>
                          
                        </div>
                        <div className="relative max-w-6xl mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <img 
                            src=
                        
                            
                            "/imgs/elements/macbook.png"
                            
                            alt="Monst" />
                            <div className="absolute" style={{ top: "5.8%", left: "14.6%", width: "72.8%", height: "76.7%" , overflow:'hidden' }}>
                                <div className="relative w-full">
                                    <div className="carausel-fade-2 slick-carausel dot-style-1" id="carausel-fade-2-1">
                                        <Slider3 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>








{/* // Section five   */}


  {/* // Section 6   */}

  <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }} id="key-features">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-12 text-center">
                            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                {/* We Consultant to Get */}
                                 <br />
                                <span className="text-blue-500">خدمات  </span> نقدمها
                            </h2>
                            <p className="text-blueGray-600   font-semibold leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            نسعى دائماً لتقديم أفضل العروض المتميزة في مجال تصميم المواقع الإلكترونية 
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border h-full border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>







                              


                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">تصميم مواقع</h3>
                                    <p className="text-sm text-blueGray-600 font-semibold">
                                    نسعى دائماً لتقديم أفضل العروض المتميزة في مجال تصميم المواقع الإلكترونية . مواقع تعريفية بسيطة متجاوبة للشركات الصغيرة و الناشئة و مواقع متقدمة للشركات و النشاطات التجارية الرائدة في الأعمال المتقدمة و أيضاً مواقع متخصصة في كافة المجالات العقارية و السياحية و الخدمية
                                    
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border h-full border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">برمجيات حديثة</h3>
                                    <p className="text-sm text-blueGray-600 font-semibold">
                                    برمجيات متطورة و حديثة لنضمن لك أفضل النتائج و سرعة في تحميل الموقع مما يحسن من جودة الموقع لدى محركات البحث و زيادة الوصول إلى عملاء أكثر			
                                        </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border h-full border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">تصاميم عصرية</h3>
                                    <p className="text-sm text-blueGray-600  font-semibold">
                                    نتميز بالتصميمات البسيطة العصرية و الاحترافية مع تداخل الافكار المختلفه التى تعبر عنك و عن هويتك و هوية ما تعلن عنه
                                    و هوية ما تعلن عنه
                                        </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border h-full border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">كتابة محتوى</h3>
                                    <p className="text-sm text-blueGray-600 font-semibold">
                                        
						كتابة محتوى و مقالات وفق شروط السيو المتبعة و مقالات حصرية لموقعك التجاري مما يؤدي إلى تحسين أرشفة الموقع في غوغل و زيادة شعبية الموقع					
                                        </p>
                                </div>
                            </div>



                       
                        </div>
                        <div className="text-center">
                            <Link href="/">
                                <a href="/testimonials" className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Show more 
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>






{/* End Section 6 */}













                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            {/* <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-mainColor-600">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                            </div> */}
                            <div className="w-full lg:w-full flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




  {/* Technologies Slider */}

  <div className=" container">

<div className="max-w-lg mx-auto mb-8 text-center">
                            <span className="inline-block text-xs py-1 px-3 text-blue-700 font-semibold bg-blue-100 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                              التقنيات  
                            </span>
                            <h2 className=" text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay="0">
                                التقنيات المستخدمة في عملنا
                            </h2>
                          
                        </div>


  <section className="py-4 md:py-16">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            {/* <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-mainColor-600">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                            </div> */}
                            <div className="w-full lg:w-full flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <SliderTechno />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





</div>






             <PackageCards/>




            
            </Layout>
        </>
    );
}
export default Home