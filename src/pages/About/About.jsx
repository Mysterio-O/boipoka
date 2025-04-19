import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const animatedTexts = [
    { text: "Discover timeless classics 📚", color: "text-red-400" },
    { text: "Feel the vibe of each book ✨", color: "text-blue-400" },
    { text: "Your literary journey starts here 🌟", color: "text-yellow-400" },
    { text: "Romance, mystery, fantasy & more 💫", color: "text-purple-400" },
];

const About = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    // Typing effect with fix for undefined text
    useEffect(() => {
        const currentText = animatedTexts[currentTextIndex].text;
        setDisplayedText(''); // Clear text at start
        setIsTyping(true);

        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < currentText.length) {
                setDisplayedText(currentText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setIsTyping(false);
                    setTimeout(() => {
                        setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
                    }, 2000); // Pause before next text
                }, 1000); // Pause after typing
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [currentTextIndex]);

    return (
        <section className="relative mb-10 rounded-lg overflow-hidden py-28 px-4 bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_50%,#4c1d95_100%)] text-center min-h-screen flex items-center justify-center animate-slide-in-top">
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
            {/* 📖 Book-related Animated Objects */}
            <div className="absolute w-12 h-12 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/book.png')] bg-cover opacity-70 animate-float-book top-10 left-10" />
            <div className="absolute w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/feather.png')] bg-cover opacity-60 animate-float-quill bottom-20 right-16 rotate-12" />
            <div className="absolute w-8 h-8 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/scroll.png')] bg-cover opacity-50 animate-float-scroll top-1/4 left-1/3" />
            <div className="absolute w-14 h-14 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/open-book.png')] bg-cover opacity-60 animate-float-open-book bottom-1/3 right-1/4" />

            {/* 🌠 Bottom Light Beam */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 animate-laser-beam" />

            {/* 📚 Content Card with Enhanced Hover */}
            <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-indigo-400/20 group hover:scale-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-700">
                <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Book_Vibe 📖</h2>

                {/* ✍️ Typing Effect */}
                <p className={`text-2xl font-medium ${animatedTexts[currentTextIndex].color} min-h-[2.5rem]`}>
                    {displayedText || '\u00A0'} {/* Non-breaking space as fallback */}
                    <span className={isTyping ? 'animate-blink' : 'opacity-0'}>|</span>
                </p>

                <p className="mt-8 text-gray-200 text-lg">
                    Created with <span className="text-amber-400 font-semibold">React</span>,{' '}
                    <span className="text-amber-400 font-semibold">React Motion</span>,{' '}
                    <span className="text-amber-400 font-semibold">Tailwind</span>, and{' '}
                    <span className="text-amber-400 font-semibold">DaisyUI</span>. Where idea's came true.
                </p>

                {/* 🚀 Button with Enhanced Hover */}
                <div className="mt-10 relative group/button">
                    <Link to='/explore'>
                        <button className="relative bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-600 transition-colors duration-300 group-hover/button:shadow-[0_0_20px_rgba(129,140,248,0.7)]">
                            Explore Now
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover/button:w-full group-hover/button:opacity-100 opacity-0 transition-all duration-700" />
                            {/* Sparkle effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-2 animate-sparkle" />
                                <div className="w-2 h-2 bg-white rounded-full absolute bottom-1 right-2 animate-sparkle delay-100" />
                            </div>
                        </button>
                    </Link>
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
                @keyframes slide-in-top {
                    0% { transform: translateY(-100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes float-book {
                    0% { transform: translateY(0) rotate(0); opacity: 0.7; }
                    50% { transform: translateY(-20vh) translateX(30vw) rotate(10deg); opacity: 0.9; }
                    100% { transform: translateY(0) translateX(60vw) rotate(20deg); opacity: 0.7; }
                }
                @keyframes float-quill {
                    0% { transform: translateY(0) rotate(12deg); opacity: 0.6; }
                    50% { transform: translateY(15vh) translateX(-25vw) rotate(0deg); opacity: 0.8; }
                    100% { transform: translateY(0) translateX(-50vw) rotate(-12deg); opacity: 0.6; }
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
                @keyframes laser-beam {
                    0% { transform: translateX(-100%); opacity: 0.8; }
                    50% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0.8; }
                }
                @keyframes wave {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes sparkle {
                    0% { transform: scale(0); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                .animate-slide-in-top {
                    animation: slide-in-top 1.2s ease-out forwards;
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
                .animate-laser-beam {
                    animation: laser-beam 3s infinite ease-in-out;
                }
                .animate-wave {
                    animation: wave 20s linear infinite;
                }
                .animate-blink {
                    animation: blink 0.5s step-end infinite;
                }
                .animate-sparkle {
                    animation: sparkle 0.5s ease-out infinite;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
            `}</style>
        </section>
    );
};

export default About;