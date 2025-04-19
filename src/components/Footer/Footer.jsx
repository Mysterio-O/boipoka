import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Twitter, Github, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    footerRef.current.classList.add('animate-footer-reveal');
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_50%,#4c1d95_100%)] text-white py-16 px-4 overflow-hidden z-10"
        >
            {/* 🌌 Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-twinkle"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
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
            <div className="absolute w-8 h-8 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/scroll.png')] bg-cover opacity-50 animate-float-scroll top-1/4 left-1/3" />
            <div className="absolute w-14 h-14 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/open-book.png')] bg-cover opacity-60 animate-float-open-book bottom-1/3 right-1/4" />
            <div className="absolute w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/bookmark-ribbon.png')] bg-cover opacity-50 animate-float-bookmark top-1/2 left-3/4" />

            {/* 🌠 Glowing Light Beam */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 animate-laser-beam" />

            <div className="container mx-auto max-w-6xl relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Logo & Tagline */}
                    <div className="space-y-4 animate-footer-item delay-100">
                        <h2 className="text-4xl font-extrabold tracking-tight group">
                            Book_Vibe
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Your literary journey, illuminated by stories.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Join our newsletter"
                                className="w-full py-2 px-4 bg-indigo-800/50 text-white rounded-full border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-300">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4 animate-footer-item delay-200">
                        <h3 className="text-2xl font-semibold text-amber-400">Explore</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'ReadList'].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-white group relative"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-1 h-1 bg-white rounded-full absolute bottom-1 left-1 animate-sparkle" />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div className="space-y-4 animate-footer-item delay-300">
                        <h3 className="text-2xl font-semibold text-amber-400">Connect</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                { Icon: Twitter, href: 'https://twitter.com' },
                                { Icon: Github, href: 'https://github.com' },
                                { Icon: Linkedin, href: 'https://linkedin.com' },
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 group relative transition-colors duration-300"
                                >
                                    <Icon size={24} />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-0 animate-sparkle" />
                                    </div>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-300">Contact: support@bookvibe.com</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-center text-gray-400 animate-footer-item delay-400">
                    <p>&copy; {new Date().getFullYear()} Book_Vibe. All rights reserved.</p>
                </div>
            </div>

            {/* 🌊 Wave Animation */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
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
                @keyframes footer-reveal {
                    0% { transform: translateY(50%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes twinkle {
                    0% { opacity: 0.2; transform: scale(0.5); }
                    50% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0.2; transform: scale(0.5); }
                }
                @keyframes float-book {
                    0% { transform: translateY(0) rotate(0); opacity: 0.5; }
                    50% { transform: translateY(-20vh) translateX(30vw) rotate(10deg); opacity: 0.7; }
                    100% { transform: translateY(0) translateX(60vw) rotate(20deg); opacity: 0.5; }
                }
                @keyframes float-quill {
                    0% { transform: translateY(0) rotate(12deg); opacity: 0.4; }
                    50% { transform: translateY(15vh) translateX(-25vw) rotate(0deg); opacity: 0.6; }
                    100% { transform: translateY(0) translateX(-50vw); opacity: 0.4; }
                }
                @keyframes float-scroll {
                    0% { transform: translateY(0); opacity: 0.5; }
                    50% { transform: translateY(-25vh) translateX(20vw); opacity: 0.7; }
                    100% { transform: translateY(0) translateX(40vw); opacity: 0.5; }
                }
                @keyframes float-open-book {
                    0% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(20vh) translateX(-30vw); opacity: 0.8; }
                    100% { transform: translateY(0) translateX(-60vw); opacity: 0.6; }
                }
                @keyframes float-bookmark {
                    0% { transform: translateY(0) rotate(0); opacity: 0.5; }
                    50% { transform: translateY(-15vh) translateX(15vw) rotate(5deg); opacity: 0.7; }
                    100% { transform: translateY(0) translateX(30vw) rotate(10deg); opacity: 0.5; }
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
                .animate-footer-reveal {
                    animation: footer-reveal 1.5s ease-out forwards;
                }
                .animate-footer-item {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: footer-reveal 0.8s ease-out forwards;
                }
                .animate-twinkle {
                    animation: twinkle 3s infinite ease-in-out;
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
                .animate-float-open-book {
                    animation: float-open-book 13s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-float-bookmark {
                    animation: float-bookmark 9s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-laser-beam {
                    animation: laser-beam 3s infinite ease-in-out;
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
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-300 {
                    animation-delay: 0.3s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }
            `}</style>
        </footer>
    );
};

export default Footer;