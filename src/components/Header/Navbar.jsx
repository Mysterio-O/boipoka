import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        // console.log('Menu toggle clicked, isMenuOpen:', !isMenuOpen);
        setIsMenuOpen((prev) => !prev);
    };

    const links = (
        <>
            <Link to='/' onClick={() => setIsMenuOpen(false)}>
                <li className="m-2 text-lg text-white font-semibold group relative animate-slide-in-left delay-100">
                    Home
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </li>
            </Link>
            <Link to='/about' onClick={() => setIsMenuOpen(false)}>
                <li className="m-2 text-lg text-white font-semibold group relative animate-slide-in-left delay-200">
                    About
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </li>
            </Link>
            <Link to='/readList' onClick={() => setIsMenuOpen(false)}>
                <li className="m-2 text-lg text-white font-semibold group relative animate-slide-in-left delay-200">
                    ReadList
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </li>
            </Link>
        </>
    );

    return (
        <div className="navbar rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg mb-12 relative overflow-visible animate-slide-in-top z-[1000]">
            {/* 🌌 Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-twinkle"
                        style={{
                            width: `${Math.random() * 2 + 2}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            {/* 📖 Animated Book Element */}
            <div className="absolute w-8 h-8 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/book.png')] bg-cover opacity-30 animate-float-book top-2 left-20" />
            <div className="absolute w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/bookmark-ribbon.png')] bg-cover opacity-50 animate-float-bookmark bottom-1/4 right-3/4" />

            <div className="navbar-start">
                <div className="relative z-[1001]">
                    <button
                        className={`btn btn-ghost lg:hidden text-white bg-indigo-800/30 hover:bg-indigo-800/50 ${isMenuOpen ? 'bg-indigo-800/50' : ''
                            }`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {
                            isMenuOpen ? <X></X> : <Menu></Menu>
                        }
                    </button>
                    <ul
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } bg-indigo-800/90 backdrop-blur-md rounded-box z-[1001] mt-2 w-52 p-2 shadow-lg text-white absolute left-0 top-12`}
                    >
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <a className="btn btn-ghost text-2xl hover:bg-amber-400 text-white font-bold tracking-tight group">
                        Book_Vibe
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-500" />
                    </a>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/explore'>
                    <a className="btn bg-indigo-500 text-white font-semibold border-none hover:bg-indigo-600 relative group transition-all duration-300">
                        Explore
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-full group-hover:opacity-100 opacity-0 transition-all duration-500" />
                    </a>
                </Link>
            </div>

            {/* 🎨 Custom CSS for Animations */}
            <style jsx>{`
                @keyframes slide-in-top {
                    0% { transform: translateY(-100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes slide-in-left {
                    0% { transform: translateX(-100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes float-book {
                    0% { transform: translateY(0) rotate(0); opacity: 0.3; }
                    50% { transform: translateY(-2vh) translateX(10vw) rotate(5deg); opacity: 0.5; }
                    100% { transform: translateY(0) translateX(20vw) rotate(10deg); opacity: 0.3; }
                }
                .animate-slide-in-top {
                    animation: slide-in-top 1.2s ease-out forwards;
                }
                .animate-slide-in-left {
                    animation: slide-in-left 0.5s ease-out forwards;
                }
                .animate-float-book {
                    animation: float-book 8s infinite ease-in-out;
                    animation-delay: ${Math.random() * 3}s;
                }
                /* Ensure menu visibility */
                .navbar {
                    overflow: visible;
                }
                .navbar-start {
                    position: relative;
                .animate-float-bookmark {
                    animation: float-bookmark 9s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
            `}</style>
        </div>
    );
};

export default Navbar;