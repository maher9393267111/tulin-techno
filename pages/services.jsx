import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup"
import ContactForm from '../components/contactForm';
import PackageCards from '../components/package-cards'
import Banner from '../components/middle-banner';

const Services = () => {
    return (
        <>
            <Layout>
           

{/* -----HEADER----- */}

<section  dir='' className="-mt-banner pt-40 pb-12 services-style bg-[dimgray]">
                    <div className="container">
                        <h1 className="text-2xl text-white lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
                    
                        تواصل معنا
                        
                        </h1>
                        <ul className="flex text-white ml-2 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-2xl text-white">
                                    الرئيسية
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-2xl text-white">

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
                                            <div  >
                                                <h3   className="mb-2    lg:mr-4 mr-2 text-xl font-semibold font-heading">

                                                تصميم إعلاني
                                                <br/>
                                                
                                           
                                                </h3>

<div>


                                                <p className="text-blueGray-600  font-semibold leading-loose text-sm mr-serv">
                                                تصميم هوية بصرية كاملة ( شعار- كرت عمل- نشرات اعلانية..) 
                                                <br/>
تصميم منشورات وغلاف وسائل التواصل الاجتماعي بجميع القياسات المطلوبة 
<br/>
تصميم لوحات اعلانية خارجية بقياسات كبيرة
<br/>
وكتفة الاعمال المتعلقة بالاعلانات والتسويق بمايتناسب مع متطلبات المؤسسة التجارية وألوان الهوية البصرية وذوق العميل.
                                                
                                                </p>

                                                </div>



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

{/* aDDDD   */}


<div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">5</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">


                                                برمجة نظام محاسبي
                                                </h3>
                                                <p className="text-blueGray-600   font-semibold mr-serv leading-loose text-sm">
                            
                                                برنامج محاسبة احترافي مناسب لجميع انواع الأعمال التجارية والمخازن الكبيرة، قاعدة بيانات ضخمة، مع تعديلات برمجية ملائمة بشكل خاص لكل منشأة تجارية.
                                                </p>
                                            </div>
                                        </div>





                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">6</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">


                                                تطبيقات الجوال Android -ios
                                                </h3>
                                                <p className="text-blueGray-600   font-semibold mr-serv leading-loose text-sm">
                                                برمجة احترافية خاصة حسب الطلب، مع الربط بالموقع الالكتروني الخاص بالعميل- 
تصميم برمجي ملائم لحاجات العميل شكلا ومضمونا.
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
           

{/* -----Banner  */}


<Banner/>

            </Layout>
        </>
    );
};

export default Services;