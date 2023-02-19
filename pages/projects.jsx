import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { projects } from "../data/projects";
import Banner from '../components/middle-banner';


const Blog = () => {
    return (
        <>
            <Layout>


            <section  dir='rt' className="-mt-24 pt-40 pb-12 projects-style bg-[dimgray]">
                    <div className="container">
                        <h1 className="text-2xl text-white lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">    من أعمالنا  </h1>
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
                                   أعمالنا
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





                <section dir="rtl" className="py-20">











                    <div className="container">

 {/* header Section  */}

 




                        {/* <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">من أعمالنا</h1>
                        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Our Services
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Web Development</span>
                            </li>
                        </ul> */}
                        <div className="flex flex-wrap -mx-3">



{projects.map((project , index) =>{

return (

 
    <div
    key={index}
    className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5" data-wow-delay=".3s">
    <Link href={project?.link}>
        <div className=" cursor-pointer">

       
        <a>
            <img className="h-80 w-full object-cover rounded" src={project?.img} alt="Monst" />
        </a>
    {/* </Link> */}
    <p className="mt-6 text-sm text-blue-400">
        {/* <Link href={project?.link}>
            <a> */}
                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                    {project?.title}
                </span>
            {/* </a>
        </Link> */}
        <span className="text-blueGray-400 text-xs mr-4">{project?.date}</span>
    </p>
    <h3 className="my-2 text-2xl font-bold font-heading">

        {/* <Link href="/blog-single"> */}
            <a className="hover:text-blue-500">{project?.subTitle}</a>
        {/* </Link> */}

    </h3>
    {/* <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p> */}

    </div>

    </Link>
</div>



)


})}





                         
                            {/* <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5" data-wow-delay=".3s">
                                <Link href="/blog-single">
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/imgs/placeholders/img-13.jpg" alt="Monst" />
                                    </a>
                                </Link>
                                <p className="mt-6 text-sm text-blue-400">
                                    <Link href="/blog-2">
                                        <a>
                                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">Digital</span>
                                        </a>
                                    </Link>
                                    <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
                                </p>
                                <h3 className="my-2 text-2xl font-bold font-heading">
                                    <Link href="/blog-single">
                                        <a className="hover:text-blue-500">You have a Great Is Business Idea?</a>
                                    </Link>
                                </h3>
                                <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                            </div> */}



                        </div>









                        <div className="text-center">
                            <Link href="/projects">
                                <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">All Projects</a>
                            </Link>
                        </div>
                    </div>
                </section>

            

{/* -------Banner  */}
<Banner/>


            </Layout>
        </>
    );
};

export default Blog;
