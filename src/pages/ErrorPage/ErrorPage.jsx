import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-950 to-gray-900 flex items-center justify-center relative overflow-hidden">
            {/* 🚨 Floating Error-Related Animations */}
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div className="absolute w-8 h-8 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/warning.png')] bg-cover opacity-30 animate-float-error top-10 left-10" />
            <div className="absolute w-8 h-8 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/error.png')] bg-cover opacity-30 animate-float-error bottom-20 right-16 rotate-12" />
            <div className="absolute w-6 h-6 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/warning.png')] bg-cover opacity-30 animate-float-error top-20 right-20" />

            {/* 🚨 Floating Error Icon */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[url('https://img.icons8.com/ios-filled/50/ff0000/error.png')] bg-cover z-20 group error-icon">
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 flare-effect" />
            </div>

            {/* 🔗 Curved Lines with Traveling Lights (4 on Left, 4 on Right) */}
            {/* Left Side Lines */}
            {[...Array(4)].map((_, i) => (
                <div
                    key={`left-${i}`}
                    className="absolute w-1/2 h-64 border-t-4 border-red-500/70 z-10"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: 0,
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <div
                        className="absolute w-4 h-4 bg-red-600 rounded-full animate-travel-light"
                        style={{
                            filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))',
                            left: '0', // Start at the left edge
                        }}
                    />
                </div>
            ))}
            {/* Right Side Lines */}
            {[...Array(4)].map((_, i) => (
                <div
                    key={`right-${i}`}
                    className="absolute w-1/2 h-64 border-t-4 border-red-500/70 z-10"
                    style={{
                        top: `${20 + i * 15}%`,
                        right: 0,
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <div
                        className="absolute w-4 h-4 bg-red-600 rounded-full animate-travel-light-right"
                        style={{
                            filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))',
                            right: '0', // Start at the right edge
                        }}
                    />
                </div>
            ))}

            {/* Main Content */}
            <div className="text-center text-white z-10 animate-slide-in">
                <h1 className="text-8xl font-bold mb-4 group relative">
                    
                    <div className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                        
                    </div>
                </h1>
                <h2 className="text-3xl font-semibold mb-6">Alert! Page Not Found</h2>
                <p className="text-lg text-gray-300 mb-8">
                    It seems this page has vanished from our library. Let’s get you back on track!
                </p>
                <Link to="/">
                    <button className="btn bg-red-600 text-white transition-all duration-300 group relative overflow-hidden">
                        Back to Homepage
                        <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-ripple" />
                        <span className="absolute w-2 h-2 bg-white rounded-full top-0 left-0 animate-spark group-hover:animate-none" />
                        <span className="absolute w-2 h-2 bg-white rounded-full bottom-0 right-0 animate-spark delay-100 group-hover:animate-none" />
                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-red-300 animate-glow-border" />
                    </button>
                </Link>
            </div>

            {/* ✨ Animated "Created by Mysterio-O" Sentence */}
            <div className="absolute bottom-4 left-4 text-sm animate-attention-text">
                Created by Mysterio-O
            </div>

            {/* 🎨 Custom CSS for Animations */}
            <style jsx>{`
                @keyframes slide-in {
                    0% { transform: translateY(20%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes float-error {
                    0% { transform: translateY(0) rotate(0); opacity: 0.3; }
                    50% { transform: translateY(-15vh) translateX(5vw) rotate(15deg); opacity: 0.5; }
                    100% { transform: translateY(0) translateX(15vw) rotate(30deg); opacity: 0.3; }
                }
                @keyframes travel-light {
                    0% { left: 0; opacity: 1; transform: scale(1); }
                    49% { transform: scale(1.2); }
                    50% { left: 100%; opacity: 1; transform: scale(1); }
                    51% { opacity: 0; }
                    100% { left: 100%; opacity: 0; }
                }
                @keyframes travel-light-right {
                    0% { right: 0; opacity: 1; transform: scale(1); }
                    49% { transform: scale(1.2); }
                    50% { right: 100%; opacity: 1; transform: scale(1); }
                    51% { opacity: 0; }
                    100% { right: 100%; opacity: 0; }
                }
                @keyframes glow-error {
                    0% { opacity: 0.2; filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.3)); transform: scale(1); }
                    10% { opacity: 1; filter: drop-shadow(0 0 20px rgba(255, 0, 0, 1)); transform: scale(1.2); }
                    50% { opacity: 1; filter: drop-shadow(0 0 20px rgba(255, 0, 0, 1)); transform: scale(1); }
                    100% { opacity: 0.2; filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.3)); transform: scale(1); }
                }
                @keyframes flare {
                    0% { opacity: 0; transform: scale(0); }
                    50% { opacity: 0.7; transform: scale(1.5); }
                    100% { opacity: 0; transform: scale(2); }
                }
                @keyframes ripple {
                    0% { transform: scale(0); opacity: 0.7; }
                    100% { transform: scale(3); opacity: 0; }
                }
                @keyframes spark {
                    0% { transform: translate(0, 0) scale(0); opacity: 1; }
                    100% { transform: translate(10px, -10px) scale(1.5); opacity: 0; }
                }
                @keyframes glow-border {
                    0% { border-color: transparent; box-shadow: none; }
                    50% { border-color: rgb(239, 68, 68); box-shadow: 0 0 10px rgb(239, 68, 68); }
                    100% { border-color: transparent; box-shadow: none; }
                }
                @keyframes color-change {
                    0% { color: rgb(239, 68, 68); }
                    25% { color: rgb(245, 158, 11); }
                    50% { color: rgb(139, 92, 246); }
                    75% { color: rgb(255, 255, 255); }
                    100% { color: rgb(239, 68, 68); }
                }
                @keyframes bounce-text {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0); }
                }
                @keyframes glow-text {
                    0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
                    50% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 0, 0, 0.5); }
                    100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
                }
                .animate-slide-in {
                    animation: slide-in 0.8s ease-out forwards;
                }
                .animate-float-error {
                    animation: float-error 10s infinite ease-in-out;
                    animation-delay: ${Math.random() * 5}s;
                }
                .animate-travel-light {
                    animation: travel-light 5s infinite ease-in-out;
                }
                .animate-travel-light-right {
                    animation: travel-light-right 5s infinite ease-in-out;
                }
                .error-icon {
                    opacity: 0.2;
                    filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.3));
                    animation: glow-error 5s infinite ease-in-out;
                    animation-delay: 2.5s;
                }
                .flare-effect {
                    animation: flare 5s infinite ease-in-out;
                    animation-delay: 2.5s;
                }
                .animate-ripple {
                    animation: ripple 1.5s infinite ease-out;
                }
                .animate-spark {
                    animation: spark 1s infinite ease-out;
                }
                .animate-glow-border {
                    animation: glow-border 2s infinite ease-in-out;
                }
                .animate-attention-text {
                    animation: color-change 4s infinite ease-in-out, bounce-text 1s infinite ease-in-out, glow-text 3s infinite ease-in-out;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
            `}</style>
        </div>
    );
};

export default ErrorPage;