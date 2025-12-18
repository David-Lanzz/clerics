import React, { useEffect, useState, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import { getAllClerics } from "../services";
import { Phone } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [clerics, setClerics] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const userId = useMemo(() => localStorage.getItem('userId'), []);

    useEffect(() => {
        getAllClerics().then(data => setClerics(data?.clerics || []));
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigate = (link) => {
        setIsMobileMenuOpen(false);

        if (pathname !== "/") {
            // Store the target section in sessionStorage
            sessionStorage.setItem("scrollTo", link);
            navigate("/"); // go home first
        } else {
            // If already on home, scroll directly
            scroller.scrollTo(link, { smooth: "easeInOutQuart", duration: 800 });
        }
    };

    useEffect(() => {
        // When on home page, check if we need to scroll
        const target = sessionStorage.getItem("scrollTo");
        if (pathname === "/" && target) {
            setTimeout(() => {
                scroller.scrollTo(target, { smooth: "easeInOutQuart", duration: 800 });
                sessionStorage.removeItem("scrollTo");
            }, 500); // wait a bit for sections to mount
        }
    }, [pathname]);



    const tabs = useMemo(() => [
        { title: "Home", link: "home" },
        { title: "About", link: "about" },
        { title: "What We Do", link: "whatwedo" },
        { title: "Why Quranile", link: "whyquranile" },
        { title: "Booking Steps", link: "bookingsteps" },
    ], [clerics, userId]);

    const isScrolled = scrollPosition > 550;
    const isAuthOrBookingPage = pathname.includes('authenticate') || pathname.includes('booking');
    const navTextColor = isScrolled || isAuthOrBookingPage ? "text-primary" : "text-textcolor";
    const navBgColor = isScrolled ? "bg-white/70" : "bg-transparent";

    return (
        <div className="w-full h-full flex flex-col relative">
            {/* Navbar */}
            <div className={`w-full fixed top-0 left-0 z-[1000] backdrop-blur-md py-4 px-4 md:px-[4rem] slowMo ${navBgColor} flex justify-center`}>
                <div className="w-full max-w-[90rem] flex-col items-center">
                    <div className="w-full gap-8 hidden md:flex items-center justify-between">
                        <img src="/logo.png" className="h-16" alt="" />
                        <span className="flex gap-2 items-center">
                            <Phone color="yellow" />
                            <p className={` ${navTextColor}`}>Contact us Now</p>
                            <button className="bg-yellow-400 text-[#0f2d24] font-semibold py-2 ml-4 px-4 rounded-full hover:bg-yellow-300 transition">
                               Call Us
                            </button>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="flex justify-between gap-8">
                        <nav className="hidden md:flex gap-8 items-center">
                            {tabs.map((tab, index) => (
                                <div key={index} className="relative group">
                                    <span
                                        onClick={() => handleNavigate(tab.link)}
                                        className={`cursor-pointer slowMo ${navTextColor}`}
                                    >
                                        {tab.title}
                                    </span>

                                    {/* Dropdown for Clerics */}
                                    {tab.list?.length > 0 && (
                                        <div className="absolute top-[2rem] left-0 z-10 bg-goldCardBg border border-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity p-2 w-max">
                                            {clerics.map((cleric, i) => (
                                                <span
                                                    key={i}
                                                    onClick={() => navigate(`/cleric/${cleric.id}`)}
                                                    className="flex justify-between gap-4 items-center py-1 px-2 cursor-pointer hover:underline"
                                                >
                                                    {cleric.name} <FaChevronRight />
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <button
                            className={`slowMo hidden md:block border border-yellow-400 font-semibold py-3 px-8 rounded-full text-yellow-300 transition`}
                            onClick={() => {
                                userId ? navigate(`/booking/${userId}`) :
                                    navigate('/login')
                            }}
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <span className={`md:hidden slowMo ${navTextColor} text-2xl cursor-pointer`} onClick={() => setIsMobileMenuOpen(true)}>
                        <FaBars />
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-goldCardBg shadow-lg z-[1000] flex flex-col p-6"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            {/* Close Button */}
                            <span className="text-3xl self-end cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                <FaTimes />
                            </span>

                            {/* Mobile Nav Links */}
                            <nav className="mt-10 flex flex-col gap-6">
                                {tabs.map((tab, index) => (
                                    <div key={index}>
                                        <span
                                            onClick={() => handleNavigate(tab.link)}
                                            className="text-lg cursor-pointer hover:text-primary transition-colors"
                                        >
                                            {tab.title}
                                        </span>

                                        {/* Clerics Dropdown in Mobile */}
                                        {tab.list?.length > 0 && (
                                            <div className="flex flex-col pl-4 mt-2 border-l border-primary">
                                                {clerics.map((cleric, i) => (
                                                    <span
                                                        key={i}
                                                        onClick={() => navigate(`/cleric/${cleric.id}`)}
                                                        className="underline px-2 py-1 flex justify-between gap-4 items-center cursor-pointer"
                                                    >
                                                        {cleric.name} <FaChevronRight />
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Book Now Button */}
                            <button
                                onClick={() => {
                                    userId ? navigate(`/booking/${userId}`) :
                                        navigate('/login')
                                }}
                                className="mt-6 py-2 px-6 bg-primary text-white rounded-lg text-lg shadow-md hover:bg-opacity-90 transition"
                            >
                                Book Now
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Outlet />

            {/* <Footer /> */}
        </div>
    );
};

export default Navbar;
