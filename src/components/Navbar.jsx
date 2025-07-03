import React, { useEffect, useState, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Touch from "./home/Touch";
import Footer from "./Footer";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import { getAllClerics } from "../services";

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
        navigate(link === "home" ? "/" : `/${link}`);
        setTimeout(() => {
            scroller.scrollTo(link, { smooth: "easeInOutQuart" });
        }, 100);
    };

    const tabs = useMemo(() => [
        { title: "Home", link: "home" },
        { title: "About", link: "about" },
        { title: "Our Clerics", link: "clerics", list: clerics },
        { title: "My Bookings", link: `mybookings/${userId}` }
    ], [clerics, userId]);

    const isScrolled = scrollPosition > 550;
    const isAuthOrBookingPage = pathname.includes('authenticate') || pathname.includes('booking');
    const navTextColor = isScrolled || isAuthOrBookingPage ? "text-textcolor" : "text-textcolor";
    const navBgColor = isScrolled ? "bg-primary/30" : "bg-transparent";

    return (
        <div className="w-full flex flex-col relative">
            {/* Navbar */}
            <div className={`w-full fixed top-0 left-0 z-[1000] backdrop-blur-sm px-4 md:px-[4rem] slowMo ${navBgColor} flex justify-center`}>
                <div className="w-full max-w-[90rem] flex justify-between py-4 items-center">
                    <img src="/logo.jpg" className="h-12" alt="" />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {tabs.map((tab, index) => (
                            <div key={index} className="relative group">
                                <span
                                    onClick={() => handleNavigate(tab.link)}
                                    className={`cursor-pointer font-medium slowMo ${navTextColor}`}
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
                        <button
                            className={`slowMo ${isScrolled || isAuthOrBookingPage ? "standardBtn" : "standardBtnLight"}`}
                            onClick={() => handleNavigate(`booking/${userId}`)}
                            onDoubleClick={() => navigate('/authorizeAdmin')}
                        >
                            Book Now
                        </button>
                    </nav>

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
                                            className="text-lg font-medium cursor-pointer hover:text-primary transition-colors"
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
                                onClick={() => handleNavigate(`booking/${userId}`)}
                                className="mt-6 py-2 px-6 bg-primary text-white rounded-lg text-lg shadow-md hover:bg-opacity-90 transition"
                            >
                                Book Now
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Outlet />
            {/* <Touch /> */}
            <Footer />
        </div>
    );
};

export default Navbar;
