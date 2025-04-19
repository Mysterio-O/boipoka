// // tailwind.config.js
// module.exports = {
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//       extend: {
//         animation: {
//           'float-book': 'floatBook 10s ease-in-out infinite',
//           'float-sparkle': 'floatSparkle 7s ease-in-out infinite',
//           'float-circle': 'floatCircle 5s ease-in-out infinite',
//           laser: 'laserBeam 2s linear infinite',
//           wave: 'waveAnim 10s ease-in-out infinite',
//           'fade-in': 'fadeIn 1s ease-out',
//         },
//         keyframes: {
//           floatBook: {
//             '0%, 100%': { transform: 'translate(0, 0) rotate(12deg)' },
//             '50%': { transform: 'translate(40px, -30px) rotate(30deg)' },
//           },
//           floatSparkle: {
//             '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
//             '50%': { transform: 'translate(-50px, 40px) rotate(45deg)' },
//           },
//           floatCircle: {
//             '0%, 100%': { transform: 'translate(0, 0)' },
//             '50%': { transform: 'translate(20px, 20px)' },
//           },
//           laserBeam: {
//             '0%': { opacity: 0.2, transform: 'scaleX(0)' },
//             '50%': { opacity: 1, transform: 'scaleX(1)' },
//             '100%': { opacity: 0.2, transform: 'scaleX(0)' },
//           },
//           waveAnim: {
//             '0%': { transform: 'translateX(0)' },
//             '100%': { transform: 'translateX(-50%)' },
//           },
//           fadeIn: {
//             from: { opacity: 0 },
//             to: { opacity: 1 },
//           }
//         },
//       },
//     },
//     plugins: [require("daisyui")],
//   };
  