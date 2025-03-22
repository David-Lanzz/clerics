import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Touch from "./home/Touch";
import Footer from "./Footer";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronRight, FaUserSecret } from "react-icons/fa6";
import { getAllClerics } from "../services";

const Navbar = () => {

    const [clerics, setClerics] = useState([])
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        getAllClerics().then(data => setClerics(data?.clerics))
    }, [])

    const [tabs, setTabs] = useState([
        { title: "Home", link: "home" },
        { title: "About", link: "about" },
        { title: "Our Clerics", link: "clerics", list: clerics, hovered: false },
        { title: "My Bookings", link: `mybookings/${userId}` }
    ])

    const [scrollPosition, togglePosition] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
            const scrollListener = () => {
                togglePosition(window.scrollY);
            };
            window.addEventListener("scroll", scrollListener);
            return () => {
                window.removeEventListener("scroll", scrollListener);
            };
    }, [scrollPosition, pathname]);

    const navigate = useNavigate();

    const handleNavigate = (link) => {
        setIsMobileMenuOpen(false);
        if (link === "home") {
            navigate("/");
        } else {
            navigate(`/${link}`);
        }
        setTimeout(() => {
            scroller.scrollTo(link, { smooth: "easeInOutQuart" });
        }, 100);
    };

    
    return (
        <div className="w-full flex flex-col relative">
            {/* Navbar */}
            <div className="w-full flex justify-center fixed top-0 left-0 backdrop-blur-sm z-[1000] px-4 md:px-[4rem]">
                <div className="w-full max-w-[90rem] flex justify-between py-4 items-center">
                    <h3 className={`text-2xl slowMo ${scrollPosition > 450
                        ? "text-primary" : pathname.includes('authenticate') || pathname.includes('booking') ? "text-primary"
                            : "text-secondary"
                        }`}>BOOK A MUSLIM TEACHER</h3>

                    {/* Desktop Nav Links */}
                    <span className="hidden md:flex gap-8 items-center">
                        {tabs.map((tab, index) => (
                            <span className="flex flex-col relative" key={index}
                                onMouseEnter={() => setTabs(prev => prev.map(item =>
                                    tab?.link === 'clerics' ? { ...item, hovered: true } : item
                                ))}

                                onMouseLeave={() => setTabs(prev => prev.map(tab =>
                                    tab?.link === 'clerics' ? { ...tab, hovered: false } : tab
                                ))}

                            >
                                <span
                                    onClick={() => handleNavigate(tab.link)}
                                    className={`cursor-pointer font-medium slowMo ${scrollPosition > 450
                                        ? "text-primary" : pathname.includes('authenticate') || pathname.includes('booking') ? "text-primary"
                                            : "text-secondary"
                                        }`}
                                >
                                    {tab.title}
                                </span>
                                {
                                    tab?.list ? <div className={`flex flex-col z-[10] gap-4 bg-secondary p-2 pt-[2rem] border-b border-r w-max absolute ${!tab?.hovered ? 'top-[-100vh]' : 'top-[2rem]'} slowMo border-primary rounded-md`}>
                                        {
                                            clerics?.map((item, index) => (
                                                <span onClick={() => {
                                                    navigate(`/cleric/${item?.id}`)
                                                    setTimeout(() => {
                                                        scroller.scrollTo('cleric', { smooth: true, offset: -100 })
                                                        setTabs(prev => prev.map(tab =>
                                                            tab?.link === 'clerics' ? { ...tab, hovered: false } : tab
                                                        ))
                                                    }, 100);
                                                }} className="underline px-2 justify-between gap-4 items-center py-1 flex cursor-pointer" key={index}>
                                                    {item?.name}
                                                    <FaChevronRight />
                                                </span>
                                            ))
                                        }
                                    </div> : null
                                }
                            </span>
                        ))}
                        <button
                            className={`slowMo ${scrollPosition > 450
                                ? "standardBtn" : pathname.includes('authenticate') || pathname.includes('booking') ? "standardBtn"
                                    : "standardBtnLight"
                                }`}

                            onClick={() => {
                                navigate(`/booking/${userId}/`)
                                setTimeout(() => {
                                    scroller.scrollTo('booking', { smooth: true, offset: -100 })
                                }, 100);
                            }}

                            onDoubleClick={() => {
                                navigate('/authorizeAdmin')
                            }}
                        >
                            Book Now
                        </button>
                    </span>

                    {/* Mobile Menu Button */}
                    <span className={`md:hidden slowMo ${scrollPosition > 450
                        ? "text-primary" : pathname.includes('authenticate') || pathname.includes('booking') ? "text-primary"
                            : "text-secondary"
                        } text-2xl cursor-pointer`} onClick={() => setIsMobileMenuOpen(true)}>
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
                            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-secondary shadow-lg z-[1000] flex flex-col p-6"
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
                                    <span className="" key={index}>
                                        <span
                                            onClick={() => handleNavigate(tab.link)}
                                            className={`text-lg font-medium cursor-pointer hover:text-primary transition-colors`}
                                        >
                                            {tab.title}
                                        </span>
                                        {
                                            tab?.list ? <div className={`flex pl-4 flex-col z-[10] gap-4 p-2 pt-[2rem] border-b border-r h-[20rem] overflow-auto slowMo border-primary rounded-md`}>
                                                {
                                                    clerics?.map((item, index) => (
                                                        <span onClick={() => {
                                                            navigate(`/cleric/${item?.id}`)
                                                            setTimeout(() => {
                                                                scroller.scrollTo('cleric', { smooth: true, offset: -100 })
                                                                setTabs(prev => prev.map(tab =>
                                                                    tab?.link === 'clerics' ? { ...tab, hovered: false } : tab
                                                                ))
                                                            }, 100);
                                                        }} className="underline px-2 justify-between gap-4 items-center py-1 flex cursor-pointer" key={index}>
                                                            {item?.name}
                                                            <FaChevronRight />
                                                        </span>
                                                    ))
                                                }
                                            </div> : null
                                        }
                                    </span>
                                ))}
                            </nav>

                            {/* Book Now Button */}
                            <button
                                onClick={() => {
                                    handleNavigate(`booking/${userId}`);
                                    setTimeout(() => {
                                        scroller.scrollTo('booking', { smooth: false, offset: -100 })
                                    }, 100);
                                    setIsMobileMenuOpen(false);
                                }}

                                onDoubleClick={() => {
                                    navigate('/authorizeAdmin')
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
            <Touch />
            <Footer />
        </div>
    );
};

export default Navbar;
