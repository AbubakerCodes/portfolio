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
                        <p className="mb-4"><span className="font-[600]">Hey there!</span> I am Abubaker, a Full Stack Developer with a background in medicine and a true passion for coding.</p>
                    
                        <p className="mb-4 lg:max-w-[713.2px] lg:mx-auto">My journey into programming kicked off during my med school days, and since then, I've sharpened my skills in the MERN stack. Currently, I'm expanding my horizons with Next.js and AI, always eager to embrace new technologies.</p>
                        <p className="mb-4">I'm on the lookout for a full-time position where I can contribute my distinctive mix of medical knowledge and programming skills to your team.</p>
                        <p> Beyond coding, you'll find me enjoying movies or heading out on thrilling safaris. Let's connect and bring my diverse skill set to your team!</p>
                    </div>
                </div>
                <div className="p-8  bg-white">
                    <h2 className="text-3xl font-[700] mb-8 text-headingColor ">Skills</h2>
                    <ul className="grid grid-cols-4 gap-8 md:grid-cols-6 md:gap-10">
                        <RiHtml5Fill className="fill-[#e34c26] h-12 w-12"/>
                        <RiCss3Fill className="fill-[#264de4] h-12 w-12"/>
                        <RiJavascriptLine className="fill-[#F0DB4F] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/typescript_logo.svg" alt="typescript logo" className="h-12 w-[36px]"/></span>
                        <RiReactjsFill className="fill-[#61dbfb] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/tailwindcss_logo.svg" alt="tailwind logo"/></span>
                        <RiBootstrapFill className="fill-[#7952b3] h-12 w-12"/>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/node_js_logo.svg" alt="node js logo" /></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/express_js_logo.png" alt="express js logo" /></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/mongodb_logo.svg" alt="mongodb logo" /></span>
                        <span className="w-12 h-12  rounded-full flex items-center justify-center"><img src="/assets/mongoose_logo.png" alt="mongoose logo" /></span>
                        <RiGithubFill className="fill-[#2b3137] h-12 w-12"/>
                        
                        
                        
                    </ul>
                </div>
            </div>
        </section>
    );
}