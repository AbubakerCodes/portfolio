import React from "react";
import projects from "../data/projects";

export function Portfolio () {
    return (
        <section id="portfolio" className="">
            <div className="mx-auto max-w-7xl px-8 md:px-9 lg:px-16 py-24">
                <h2 className="text-3xl font-[700] mb-8 text-headingColor text-center">Projects</h2>
                {/* projects gallery */}
                <div className="grid grid-cols-1 gap-6  justify-center mx-auto md:grid-cols- md:gap-4 lg:grid-cols-2">
                   {
                    projects?.map((project, index) => {
                       return( 
                       <div key={project.id} className="flex flex-col justify-between mx-auto max-w-[100%]  p-5 border- shadow shadow-violet-200  rounded-lg bg-primaryColor bg-opacity-10">
                            <div>
                                <img data-aos
                                className="shadow-lg md:mb-4 lg:my-0" src={project.imgeUrl} alt="" />
                                <h3 className="mt-4 mb-2 text-lg text-headingColor font-[500]">{project.title}</h3>
                                <p className="text- mb-4 text-smallTextColor">{project.description}</p>
                                <h3 className="mb-4">Technologies:</h3>
                                <ul  className="text-sm mb-12 flex gap-3 flex-wrap">
                                    {project.technologies?.map((tech,index) => 
                                        <li key={index} className="py-2 px-4 bg-gray-200 text-smallTextColor rounded-md">{tech}</li>)}
                                </ul>
                            </div>
                            <div className="flex justify-between">
                            <a href={project.liveUrl} className=" text-[13px] font-[500] rounded-full py-2 px-5 border-[1.78px] border-transparent bg-primaryColor text-white  hover:bg-smallTextColor  duration-300 ease-in">Live preview</a>
                            <a href={project.gitHubUrl} className=" text-[13px] font-[500] rounded-full py-2 px-5   text-smallTextColor bg-transparent border-[1.78px] border-smallTextColor  hover:bg-smallTextColor hover:text-white duration-300 ease-in">Code on GitHub</a>
                            </div>
                        </div>
                        )
                    })
                   }
                </div>
            </div>
        </section>
    );
}