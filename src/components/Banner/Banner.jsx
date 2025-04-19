import React from 'react';
import { Link } from 'react-router';
const Banner = ({onViewListClick}) => {
    return (
        <div className="hero rounded-lg bg-gradient-to-b from-indigo-900 to-purple-900 md:min-h-screen mb-24 relative overflow-hidden">
            {/* 🌌 Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-twinkle"
                        style={{
                            width: `${Math.random() * 2 + 2}px`,
                            height: `${Math.random() * 2 + 3}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            {/* 📖 Animated Book Elements */}
            <div className="absolute w-12 h-12 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/book.png')] bg-cover opacity-50 animate-float-book top-10 left-10" />
            <div className="absolute w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/feather.png')] bg-cover opacity-40 animate-float-quill bottom-20 right-16 rotate-12" />
            <div className="absolute w-12 h-12 bg-[url('book.ico')] bg-cover opacity-10 grayscale-50 animate-float-scroll top-1/4 left-1/3" />
            <div className="absolute w-14 h-14 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/open-book.png')] bg-cover opacity-60 animate-float-open-book top-1/3 right-1/4 z-[1001]" />

            {/* 🌠 Bottom Light Beam */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-80 animate-laser-beam" />
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 animate-laser-beam" />

            <div className="hero-content flex-col lg:flex-row-reverse md:gap-20 md:px-28 animate-slide-in">
                <img
                    src="https://i.ibb.co.com/HTcrT1xP/books.webp"
                    className="md:max-w-sm rounded-lg shadow-2xl lg:opacity-20 group-hover:opacity-100 transform ease-in-out duration-500 group relative"
                />
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white tracking-tight">
                        Books to freshen up your bookshelf
                    </h1>
                    <Link>
                        <button 
                        onClick={onViewListClick}
                        className="btn bg-indigo-500 text-white font-semibold border-none mt-4 md:mt-12 hover:bg-indigo-600 relative group transition-all duration-300">
                            View The List
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-full group-hover:opacity-100 opacity-0 transition-all duration-500" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-2 animate-sparkle" />
                                <div className="w-2 h-2 bg-white rounded-full absolute bottom-1 right-2 animate-sparkle delay-100" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* 🌊 Wave Animation */}
            <div className="absolute bottom-8 left-0 w-full overflow-hidden leading-[0] z-0">
                <svg
                    className="relative block w-[calc(200%+1.3px)] h-24 animate-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                >
                    <path
                        d="M0,0 C300,80 600,20 900,60 C1200,100 1500,40 1800,60 L1800,120 L0,120 Z"
                        fill="#818cf8"
                        opacity="0.3"
                    />
                </svg>
            </div>

            {/* 🎨 Custom CSS for Animations */}
            <style jsx>{`
                @keyframes slide-in {
                    0% { transform: translateY(20%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes float-book {
                    0% { transform: translateY(0) rotate(0); opacity: 0.5; }
                    50% { transform: translateY(-20vh) translateX(10vw) rotate(10deg); opacity: 0.7; }
                    100% { transform: translateY(0) translateX(20vw) rotate(20deg); opacity: 0.5; }
                }
                @keyframes float-quill {
                    0% { transform: translateY(0) rotate(12deg); opacity: 0.4; }
                    50% { transform: translateY(15vh) translateX(-15vw) rotate(0deg); opacity: 0.6; }
                    100% { transform: translateY(0) translateX(-30vw) rotate(-12deg); opacity: 0.4; }
                }
                @keyframes float-scroll {
                    0% { transform: translateY(0); opacity: 0.5; }
                    50% { transform: translateY(-25vh) translateX(20vw); opacity: 0.7; }
                    100% { transform: translateY(0) translateX(40vw); opacity: 0.5; }
                }
                @keyframes laser-beam {
                    0% { transform: translateX(-100%); opacity: 0.8; }
                    50% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0.8; }
                }
                @keyframes wave {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes sparkle {
                    0% { transform: scale(0); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                .animate-slide-in {
                    animation: slide-in 0.8s ease-out forwards;
                }
                .animate-float-book {
                    animation: float-book 12s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-float-quill {
                    animation: float-quill 10s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-float-scroll {
                    animation: float-scroll 11s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-wave {
                    animation: wave 20s linear infinite;
                }
                .animate-sparkle {
                    animation: sparkle 0.5s ease-out infinite;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
                .hero-content:hover .group {
                    opacity: 100 !important;
                }
                .animate-laser-beam {
                    animation: laser-beam 7s infinite ease-in-out;
                }
                .animate-float-open-book {
                    animation: float-open-book 13s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
            `}</style>
        </div>
    );
};

export default Banner;