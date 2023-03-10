import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
// import Image from "next/image";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header  dir="" className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">




                                {scroll ? 

<img
className="img-header"
src= {"/imgs/site-logos/logo222.jpeg"}

/>
                                    :
                                    <img
                                    className=" img-header"
                                          src= {"/imgs/site-logos/orgina-logo.jpeg"}
                                     
                                    />
                                }
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="group relative pt-4 pb-4 has-chil">
                                <Link href="/">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                        الرئيسية
                                    </a>
                                </Link>
                                {/* <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Landing page 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-2">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Landing page 2
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-3">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Landing page 3
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-4">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Landing page 4
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-5">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Landing page 5
                                            </a>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            {/* <li className="pt-4 pb-4">
                                <Link href="/about">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                        من نحن
                                    </a>
                                </Link>
                            </li> */}
                            <li className="pt-4 pb-4">
                                <Link href="/services">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                        الخدمات المقدمة
                                    </a>
                                </Link>
                            </li>
                            {/* <li className="group relative pt-4 pb-4 has-child">
                                <Link href="#">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                        Company
                                    </a>
                                </Link>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/portfolio">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Team
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonials">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Testimonials
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Pricing
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Faqs
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/404">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                404
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}



                            <li className="group relative pt-4 pb-4 has-chil">
                                <Link href="/projects">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                    مشاريعنا
                                    </a>
                                </Link>
                                {/* <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/projects">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Category 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects-2">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Category 2
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects-single">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Single 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects-single-2">
                                            <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                                                Single 2
                                            </a>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/contact">
                                    <a className={scroll ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600" : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"}>
                                        تواصل معنا
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
