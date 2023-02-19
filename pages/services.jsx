import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup"
import ContactForm from '../components/contactForm';
import PackageCards from '../components/package-cards'

const Services = () => {
    return (
        <>
            <Layout>
                <section  dir='' className="-mt-24 pt-40 pb-12 services-style bg-[dimgray]">
                    <div className="container">
                        <h1 className="text-2xl text-white lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">خدماتنا</h1>
                        <ul className="flex text-white text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-white">
                                    الرئيسية
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-white">
                                   خدماتنا
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            {/* <li className="inline-flex items-center text-white">
                                <span>Web Development</span>
                            </li> */}
                        </ul>
                    </div>
                </section>




                <section dir='' className="pt-12">
                    <div className="container py-12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/imgs/placeholders/img-6.jpg" alt="Monst" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                                <div className="max-w-md-2">
                                    <div className="mb-4 text-center">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            لماذا عليك اختيارنا
                                        </span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                           نحن نقدم أفضل الخدمات <br />
                                            <span className="text-blue-500">في مجال برمجة وتصميم المواقع </span>
                                        </h2>
                                    </div>

                                    {/* <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="w-8 mb-5 text-blue-500 flex">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                               
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">غرافيك ديزاين</h3>
                                                <p className="text-blueGray-600  font-semibold leading-loose text-sm mr-serv">
                                                التصميم الجرافيكي هو فن توضيح الأفكار عن طريق رسومات وتصاميم فريدة ومتنوعة تجذب المشاهد وترسخ في الذهن مما يساعدك في تحقيق مبتغاك من تكوين هوية بصرية كاملة عن منتجك او موقعك وتقربك من جمهورك في وسائل التواصل الإجتماعي 
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">برمجة المواقع</h3>
                                                <p className="text-blueGray-600 mr-serv  font-semibold leading-loose text-sm">
                                                   
أصبحت المواقع الإلكترونية الان هي المعبر الأول عن الشركات والأعمال مما يجعل العميل يقوم بإتخاذ خطوات جادة للتعاون ولهذا كانت شركة الأمير ميديا متخصصة في تصميم وبرمجة المواقع الإلكترونية في تركيا بشكل خاص وفي كافة البلاد العربية والغربية بشكل عام
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">بناء متاجر إلكترونية</h3>
                                                <p className="text-blueGray-600   font-semibold mr-serv leading-loose text-sm">
                                                بناء متاجر إلكترونية بأحدث التقنيات البرمجية واضافة لوحة تحكم للموقع لإدارة الموقع وإضافة المنتجات مع تفعيل بوابة الدفع 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">4</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">تصاميم سوشيال ميديا</h3>
                                                <p className="text-blueGray-600  mr-serv   font-semibold leading-loose text-sm">
                                                إذا كنت علامة تجارية جديدة أو علامة تجارية قائمة وتسعى إلى تحسين استراتيجيتك على مواقع التواصل الاجتماعي ‑ فسيساعدك المحتوى البصري على بناء هويتك عبر الإنترنت.
                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               


{/* // Section 2222  */}


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



{/* // End Section 2 */}





            <PackageCards/>   

        

           

                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">


                        <div className="max-w-md mb-8 mx-auto">
                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                 تواصل معنا
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                                    سنكون سعداء <span className="text-blue-500">بتواصلكم معنا</span> 
                                    <br/>
                                    وسماع آرائكم
                                </h2>
                            </div>



           
            <ContactForm/>


            </div>
            </div>
            </section>
           



                <section className="py-20 bg-blue-500">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                                <span>Subscribe now to </span>
                                <span className="text-blue-200">Our Newsletter</span> <br />
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                            <div className="flex flex-wrap max-w-lg mx-auto">
                                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                                    <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Services;