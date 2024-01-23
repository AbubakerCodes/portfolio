import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackDrop from './BackDrop/BackDrop';
import {Link as ScrollLink, animateScroll as Scroll} from 'react-scroll';
import useScreenSize from "../hooks/useScreenSize";
import _ from 'lodash';
function Navbar () {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const isLargeScreen = useScreenSize();
    

    useEffect(() => {
        //debouncing to prevent unnecessary re-renders
        const handleScroll = _.debounce(() => {

            document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? setIsScrolling(true) : setIsScrolling(false);
        }, 200);
        document.addEventListener("scroll", handleScroll);
        //clean up function
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        Scroll.scrollToTop();
    }
    function handleToggleMainMenu () {
        setIsMenuOpen(!isMenuOpen);
    }
    function handleNavlinkClick () {
        isLargeScreen ? setIsMenuOpen(isMenuOpen) : setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
        <nav id="navbar" className={`${isLargeScreen && "shadow-sm bg-white"} ${isLargeScreen && isScrolling && "fixed top-0 min-w-full z-50  bg-opacity-95" || "bg-transparent"}   `}>
           
            {/* container */}
            <div className={` sm:relative mx-auto max-w-7xl  px-8 pt-6 md:px-10 lg:px-16 lg:pb-5 lg:flex lg:flex-row lg:items-center lg:justify-between `}>
                
                {/* logo and mobile menu button */}
                <div className=" sm:flex sm:items-center sm:align-middle    sm:justify-between lg:inline-block ">
                    <div onClick={() => {
                        navigate("/");
                        scrollToTop();
                    }} className=" text-primaryColor text-xl font-[700] cursor-pointer">
                        <h1>Bakri<span className="text-smallTextColor">.Dev</span></h1>
                    </div>
                    <button onClick={handleToggleMainMenu} className="lg:hidden focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:h-8 md:w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                
                {/* navLinks */}
                <ul id="navLinks" className={`${!isMenuOpen && "sm:hidden"} sm:flex sm:flex-col gap-6 sm:absolute top-0 left-0 sm:bg-white sm:p-6 md:p-8 w-[70vw] sm:h-screen z-50 lg:gap-16 lg:p-0 lg:static lg:w-fit lg:h-fit lg:flex lg:flex-row  lg:bg-transparent `}>
                 
                   {/* close main menu button */}
                    <button onClick={handleToggleMainMenu} className="mb-4 lg:hidden focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <span className="sr-only">Close main menu</span>

                    </button>
                    {/* links */}
                    <li>
                        <ScrollLink 
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={500}
                           offset={isLargeScreen ? -80 : 50}
                             onClick={handleNavlinkClick} className="cursor-pointer text-[0.95rem] font-[600] text-smallTextColor hover:text-primaryColor transition duration-200 ease-in" >Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink  
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        onClick={handleNavlinkClick} className="cursor-pointer text-[0.95rem] font-[600] text-smallTextColor hover:text-primaryColor transition duration-200 ease-in" >About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        onClick={handleNavlinkClick} className="cursor-pointer text-[0.95rem] font-[600] text-smallTextColor hover:text-primaryColor transition duration-200 ease-in" >Portfolio</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        onClick={handleNavlinkClick} className="cursor-pointer text-[0.95rem] font-[600] text-smallTextColor hover:text-primaryColor transition duration-200 ease-in" >Contact</ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
            {!isLargeScreen && <BackDrop isOpen={isMenuOpen} onClick={handleToggleMainMenu} />}
        </>
    )
}

export {Navbar};