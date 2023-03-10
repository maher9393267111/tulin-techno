import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";
import MapBox from '../components/mapbox';
import  {useRef} from 'react';
import emailjs from '@emailjs/browser';
import ContactForm from '../components/contactForm';
import Banner from '../components/middle-banner';

const Contact = () => {






    return (
        <>
            <Layout>
              

{/* HEADER  */}

<section  dir='' className="-mt-banner pt-40 pb-12 services-style bg-[dimgray]">
                    <div className="container">
                        <h1 className="text-2xl text-white lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
                    
                        تواصل معنا
                        
                        </h1>
                        <ul className="flex text-white text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
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
                                   تواصل معنا
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




{/* // Details to call us  */}


<div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Phone</span>
                                    <p>+90 501 244 48 88</p>
                                    {/* <p>+ 1 6532-430-309</p> */}
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">E-mail</span>
                                    <p>info@tuline.tech</p>
                                    {/* <p>info@tulineturizm.net</p> */}
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Address</span>
                                    <p>
                                    KARAGÜMRÜK MAH. SOFALI ÇEŞME CADDESI, ARPA EMINI KÒPRUSU SOKAK, 4A


                                    </p>
                                    <p>
                                    Istanbul, Turkey
                                        </p>
                                </div>
                            </div>
                        </div>



{/* end call us  */}





                       <ContactForm/>




                        </div>
                    </div>
                </section>


 {/* MAP here   */}

<div className=' container my-4'>


 <section className="map-section">
        <div className="map-outer">
          <MapBox />
        </div>
      </section>



      </div>

{/* MAP END   */}




          <Banner/>
            </Layout>
        </>
    );
};

export default Contact;