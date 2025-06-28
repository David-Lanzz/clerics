import React, { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Admin = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigation = (path, scrollTarget) => {
        navigate(path);
        setTimeout(() => {
            scroller.scrollTo(scrollTarget, { containerId: 'scrollContainer' });
        }, 100);
        setIsSidebarOpen(false); // Close sidebar on mobile after navigation
    };

    return (
        <div className="w-full h-[100svh] flex bg-gray-100">
            {/* Mobile Sidebar Toggle */}
            <button 
                className="absolute top-4 left-4 z-50 md:hidden p-2 bg-primary text-white rounded-full shadow-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside className={`fixed z-[1000] md:static w-64 max-w-[15rem] h-full bg-primary text-white p-6 flex flex-col gap-6 shadow-lg transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <h2 className="text-xl font-semibold tracking-wide">Admin Panel</h2>
                <nav className="flex flex-col gap-4">
                    <button className="bg-goldCardBg p-2 px-6 text-primary rounded-md" onClick={() => handleNavigation(`/admin/${id}`, 'clerics')}>Clerics</button>
                    <button className="bg-goldCardBg p-2 px-6 text-primary rounded-md" onClick={() => handleNavigation('bookings', 'bookings')}>Bookings</button>
                    <button className="bg-goldCardBg p-2 px-6 text-primary rounded-md" onClick={() => handleNavigation(`/`, 'home')}>Back to Home</button>
                </nav>
            </aside>

            {/* Overlay for Mobile (when sidebar is open) */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-[999] bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Main Content */}
            <main id='scrollContainer' className="w-full md:w-4/5 flex-grow p-6 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Admin;
