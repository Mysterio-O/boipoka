import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Book, Star } from 'lucide-react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';
// import booksData from '../../data/books.json'; // Adjust path as needed

const Explore = () => {
    const booksData = useLoaderData(); 
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // Generate floating stars and moons
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, () => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
        isMoon: Math.random() < 0.2, // 20% chance of being a moon
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.5,
      }));
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(() => {
      setStars((prev) =>
        prev.map((star) => ({
          ...star,
          x: star.x + star.speedX,
          y: star.y + star.speedY,
          opacity: Math.random() * 0.5 + 0.5,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Light beam cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-triggered glow animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.1, ease: 'easeOut' },
          }));
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Wishlist handler
  const addToWishlist = (book) => {
    const storedWishData = JSON.parse(localStorage.getItem('wishList') || '[]');
    if (storedWishData.includes(book.bookId)) {
      Swal.fire({
        title: 'Already in Wishlist! 📚',
        text: `${book.bookName} is already in your wishlist.`,
        icon: 'warning',
        customClass: {
          popup: 'swal2-popup bg-white/95 backdrop-blur-sm',
          title: 'swal2-title text-indigo-900 font-serif',
          confirmButton: 'btn btn-primary bg-amber-500 text-white border-none hover:bg-amber-600 font-sans',
        },
        showClass: { popup: 'animate__animated animate__fadeIn' },
        hideClass: { popup: 'animate__animated animate__fadeOut' },
      });
    } else {
      storedWishData.push(book.bookId);
      localStorage.setItem('wishList', JSON.stringify(storedWishData));
      Swal.fire({
        title: 'Added to Wishlist! 📚',
        text: `${book.bookName} has been added to your wishlist.`,
        icon: 'success',
        customClass: {
          popup: 'swal2-popup bg-white/95 backdrop-blur-sm',
          title: 'swal2-title text-indigo-900 font-serif',
          confirmButton: 'btn btn-primary bg-amber-500 text-white border-none hover:bg-amber-600 font-sans',
        },
        showClass: { popup: 'animate__animated animate__fadeIn' },
        hideClass: { popup: 'animate__animated animate__fadeOut' },
      });
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#F6E05E', '#6B46C1', '#FFD700'],
      });
    }
  };

  // Modal for full review
  const showReview = (book) => {
    Swal.fire({
      title: book.bookName,
      html: `
        <div class="text-left text-gray-800 font-sans">
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Category:</strong> ${book.category}</p>
          <p><strong>Publisher:</strong> ${book.publisher}</p>
          <p><strong>Year:</strong> ${book.yearOfPublishing}</p>
          <p><strong>Pages:</strong> ${book.totalPages}</p>
          <p><strong>Rating:</strong> ${book.rating} <span class="inline-flex">${Array(Math.round(book.rating)).fill().map((_, i) => '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.335 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z"/></svg>').join('')}</span></p>
          <p><strong>Tags:</strong> ${book.tags.join(', ')}</p>
          <p class="mt-4 text-gray-700">${book.review}</p>
        </div>
      `,
      imageUrl: book.image,
      imageWidth: 180,
      imageAlt: book.bookName,
      customClass: {
        popup: 'swal2-popup bg-white/95 backdrop-blur-sm max-w-3xl',
        title: 'swal2-title text-indigo-900 font-serif',
        confirmButton: 'btn btn-primary bg-amber-500 text-white border-none hover:bg-amber-600 font-sans',
      },
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
      width: '800px',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative rounded-lg bg-gradient-to-br from-indigo-800 to-purple-600 min-h-screen py-20 overflow-hidden"
    >
      <Helmet>
        <title>Book_Vibe | Explore</title>
      </Helmet>
      {/* Floating Stars and Moons */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transition: 'all 0.05s linear',
            zIndex: 1,
          }}
        >
          {star.isMoon ? (
            <svg viewBox="0 0 24 24" className="text-yellow-300 fill-current">
              <path d="M21.11 12.25a9 9 0 01-11.86 8.66 9 9 0 001.23-12.88 9 9 0 0110.63 4.22z" />
            </svg>
          ) : (
            <Star className="text-yellow-300 animate-pulse" />
          )}
        </div>
      ))}

      {/* Light Beam Cursor */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: `translate(${cursorPos.x - 125}px, ${cursorPos.y - 125}px)`,
          transition: 'transform 0.05s ease-out',
          zIndex: 0,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white flex items-center justify-center gap-4 font-serif">
            <Book className="w-14 h-14 text-amber-300 animate-spin-slow" />
            Journey Through Books
          </h1>
          <p className="text-xl text-gray-100 mt-4 font-sans max-w-2xl mx-auto">
            Discover stories that shine like stars in our celestial collection.
          </p>
        </motion.div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {booksData.map((book, index) => (
            <motion.div
              key={book.bookId}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="card bg-white/90 backdrop-blur-md shadow-xl rounded-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(246, 224, 94, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              <figure className="relative overflow-hidden">
                <motion.img
                  src={book.image}
                  alt={book.bookName}
                  className="h-60 w-full object-cover rounded-t-xl"
                  whileHover={{ filter: 'brightness(1.1)' }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                  className="absolute top-3 right-3 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {book.rating} <Star className="w-4 h-4 inline" />
                </motion.div>
              </figure>
              <div className="card-body p-6 font-sans">
                <h2 className="card-title text-2xl text-indigo-900 font-serif">{book.bookName}</h2>
                <p className="text-gray-700 text-base">by {book.author}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {book.publisher} • {book.yearOfPublishing} • {book.totalPages} pages
                </p>
                <p className="text-sm text-amber-600 font-medium">{book.category}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {book.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="badge badge-outline border-amber-500 text-amber-500"
                      whileHover={{
                        backgroundColor: '#F6E05E',
                        color: '#1A202C',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mt-3 line-clamp-2">{book.review}</p>
                <div className="card-actions justify-end mt-5 gap-3">
                  <motion.button
                    className="btn btn-sm bg-amber-500 text-white border-none hover:bg-amber-600 rounded-full"
                    onClick={() => showReview(book)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Review
                  </motion.button>
                  <motion.button
                    className="btn btn-sm btn-outline border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full"
                    onClick={() => addToWishlist(book)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Wishlist
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;