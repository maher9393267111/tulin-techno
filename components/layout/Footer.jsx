import React from "react";
import Link from "next/link"
// import Image from "next/image";
import { companyName, whatsappLink, hrefLinkPhone, companyPhone, hrefLinkEmail, companyEmail } from '../../data/social-links';


const companyEmailALink = <a className="inline-block px-2" href={hrefLinkEmail}>
    <img


        src="imgs/icons/icons8-mail.svg" alt="tulin techno" />
</a>;



const InstagramLink = <a className="inline-block px-2" href={hrefLinkEmail}>
    


<img src="imgs/icons/instagram-blue.svg" alt="tulin techno" />
</a>;


const whatsapp = <a className="inline-block w-6 h-6" href={whatsappLink}>
    


<img src="imgs/icons/icons8-whatsapp-40.png" alt="tulin techno" />
</a>;







const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex items-center flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/">
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    {/* <Image
                                        src={"/imgs/site-logos/logo.png"}
                                        // {"/imgs/logos/logo-jungmoon-white.png"}
                                        width={200}
                                        height={200}
                                    /> */}


<img src="/imgs/site-logos/orgina-logo.jpeg" className=" logo-footer" alt="" />


                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            {/* <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-600   font-semibold leading-relaxed">
                                نساعدك <strong>للوصول لأهدافك</strong> بأقصى سرعة 
                            </p> */}
                        </div>
                        <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">مقر الشركة</p>
                            <p className="lg:text-lg text-blueGray-600">
                                
                                {/* 359 Al-fatih / istanbul */}
                                KARAGÜMRÜK MAH. SOFALI ÇEŞME CADDESI, ARPA EMINI KÒPRUSU SOKAK, 4A, Istanbul, Turkey
                            
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">تواصل معنا</p>
                            <p className="lg:text-lg text-blueGray-600">+905 012414888</p>
                            <p className="lg:text-lg text-blueGray-600">info@tuline.tech</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-600     font-semibold">
                            &copy; كل الحقوق محفوظة {" "}
                            <a className="text-mainColor-600" href="https://alithemes.com" target="_blank">
                                Tulin Technology
                            </a>
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com">
                                <img src="/imgs/icons/facebook-blue.svg" alt="tulin techno" />
                            </a>
                            <a className="inline-block px-2" href="https://twitter.com">
                                <img src="/imgs/icons/twitter-blue.svg" alt="tulin techno" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com">
                                <img src="imgs/icons/instagram-blue.svg" alt="tulin techno" />
                            </a>


                     


                            {companyEmailALink}
                            { whatsapp}



                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
