import { RiBootstrapFill, RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavascriptLine, RiReactjsFill } from "@remixicon/react";
import React from "react";

export function About () {
    const skills = [
        "HTML5", "CSS3", "JS", "TypeScript","React js", "TailwindCSS", "Bootstrap", "Node js", "Express js", "MongoDB", "Mongoose", "Git/GitHub"
    ];
    return (
        <section id="about" className="">
            
            <div className="text-center flex flex-col items-center gap-4 mx-auto max-w-7xl mt-0 py-20 px-8 md:px-9 lg:px-16 ">
                <div className="p-8  bg-white">
                    <h2 className="text-3xl font-[700] mb-8 text-headingColor relative ">About me</h2>
                    <div className="text-lg text-balance max-w-[490px] md:max-w-[590px] lg:max-w-[800px] mx-auto mt-6 mb-2 text-smallTextColor">
                        <p className="mb-4"><span className="font-[600]">Hey there! </span>I'm Abubaker, a Full Stack Developer with a passion for coding and building robust applications.</p>
                    
                        <p className="mb-4 lg:max-w-[713.2px] lg:mx-auto">My expertise lies in using modern web technologies, particularly the MERN stack and Next.js, to build scalable and efficient solutions. I thrive on learning new technologies and continuously improving my skills to stay at the forefront of the industry.</p>
                        <p className="mb-4">I'm on the lookout for a full-time position where I can bring my diverse skill set to your team and make a meaningful impact. I believe in the power of collaboration and am excited about the opportunity to contribute to innovative projects.</p>
                        <p> When I'm not coding, you'll find me enjoying movies or on thrilling safaris. Let's connect and create something great together!</p>
                    </div>
                </div>
                <div className="p-8  bg-white">
                    <h2 className="text-3xl font-[700] mb-8 text-headingColor ">Skills</h2>
                    <ul className="grid grid-cols-4 gap-8 md:grid-cols-6 md:gap-10">
                        <RiHtml5Fill className="fill-[#e34c26] h-12 w-12"/>
                        <RiCss3Fill className="fill-[#264de4] h-12 w-12"/>
                        <RiJavascriptLine className="fill-[#F0DB4F] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/typescript_logo.svg" alt="typescript logo" className="h-12 w-[36px]"/></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/python_logo.png" alt="Python logo" /></span>
                        <RiReactjsFill className="fill-[#61dbfb] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/tailwindcss_logo.svg" alt="tailwind logo"/></span>
                        <RiBootstrapFill className="fill-[#7952b3] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/node_js_logo.svg" alt="node js logo" /></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/express_js_logo.png" alt="express js logo"/></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/mongodb_logo.svg" alt="mongodb logo" /></span>
                        <RiGithubFill className="fill-[#2b3137] h-12 w-12"/>
                        
                        
                        
                    </ul>
                </div>
            </div>
        </section>
    );
}