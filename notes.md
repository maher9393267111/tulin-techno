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

                --------------------------------------------




                