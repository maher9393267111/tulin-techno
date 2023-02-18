import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import Slider2 from "../components/slider/Slider2"
import Link from "next/link"

function Home() {
    return (
        <>
            <Layout  dir="rtl">
                <section className="bg-auto bg-top bg-no-repeat -mt-24 pt-24 main-iamge" style={{ backgroundImage: "url('/imgs/backgrounds/main-background-image.png')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn" style={{ color: "#fff" }}>
                                تولين تكنولوجي
                                  
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
                                    Key Features
                                </a>
                                <a className="btn-white btn-main-color wow animate__animated animate__fadeIn hover-up-2" data-wow-delay=".3s" href="#how-we-work">
                                    How We Work?
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

<h2>الخطط و الإستراجية لنجاح موقعك</h2>

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
                                        Great Things In Business Are <span className="text-blue-600">Never Done</span> By One Person.
                                    </h2>
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                                    </p>
                                    <Link href="/services">
                                        <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            Learn More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8">
                                <ul className="space-y-12">
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Project Initialization</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Looking for Creative</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Market Development</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>









{/* end section 4  */}





                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-mainColor-600">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>Start saving time today and</span>
                                <span className="text-mainColor-600"> choose </span>
                                <span>your best plan</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                                Best for freelance developers who need to save their time
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/startup.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
                                    <span className="text-4xl text-mainColor-600 font-bold font-heading">$45.99</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>3 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>10 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 rounded default-btn" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border default-transparent-border rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-mainColor rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/agency.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>
                                    <span className="text-4xl font-bold font-heading">$65.99</span>
                                    <p className="mt-2 mb-8">user per month</p>
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
                                                <span>4 Datebases</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>35 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-mainColor-600 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-400 rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                    <img className="h-20 mb-6 mx-auto" src="/imgs/icons/enterprise.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                                    <span className="text-4xl text-mainColor-600 font-bold font-heading">$85.99</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
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
                                                <span>8 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 rounded default-btn" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border default-transparent-border rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span>Subscribe now to</span>
                                    <span className="text-mainColor-600"> Our Newsletter </span>
                                    <span>and get the Coupon code.</span>
                                </h2>
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    All your information is completely confidential
                                </p>
                                <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                    </div>
                                    <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
export default Home