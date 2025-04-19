import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoreDB, addWishList, getBookData } from '../../utilities/utility';

const BookDetails = () => {
    const selectedBookId = useParams();
    const id = parseInt(selectedBookId.id);
    // console.log(typeof id);
    const bookData = useLoaderData();
    // console.log(bookData);
    const book = bookData.find(book => book.bookId === id);
    // console.log(book);
    const handleOnClick = (id) => {
        addStoreDB(id, bookData);
    }
    const handleOnWish = (id) => {
        console.log(id);
        addWishList(id, bookData)
    }
    const handleOffWish = (id) => {
        getBookData(id, bookData);
    }
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing, review } = book;
    return (
        <div className="mb-10 md:flex gap-12 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-2xl p-6 relative overflow-hidden animate-slide-in-right">
            {/* 📖 Animated Book Element */}
            <div className="absolute w-6 h-6 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/book.png')] bg-cover opacity-30 animate-float-book top-4 right-10" />

            <div className="md:w-1/2 bg-indigo-800/20 rounded-2xl mx-4 md:mx-0 group relative">
                <img
                    src={image}
                    className="p-10 md:p-20 w-full h-auto"
                    alt={bookName}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
            </div>
            <div className="md:w-1/2 mx-4 mt-4 md:mx-0 md:mt-0 text-white">
                <h3 className="text-4xl font-bold mb-4 text-amber-400 tracking-tight">{bookName}</h3>
                <p className="text-xl font-medium text-gray-200">By: {author}</p>
                <div className="divider border-gray-600"></div>
                <p className="text-xl font-medium text-gray-200">{category}</p>
                <div className="divider border-gray-600"></div>
                <p className="mb-6 text-gray-200">
                    <span className="font-bold text-white">Review: </span>{review}
                </p>
                <div className="flex gap-6 items-center">
                    <span className="font-bold text-xl text-white">Tag:</span>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-indigo-800/30 text-amber-400 rounded-full px-4 py-2 border border-amber-400/30 group hover:scale-105 transition-transform duration-300"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="divider border-gray-600"></div>
                <div className="flex gap-12 mb-8">
                    <div className="text-gray-200">
                        <p className="mb-3">Number of Pages</p>
                        <p className="mb-3">Publisher:</p>
                        <p className="mb-3">Year of Publishing:</p>
                        <p className="mb-3">Rating</p>
                    </div>
                    <div className="text-white font-semibold">
                        <p className="mb-3">{totalPages}</p>
                        <p className="mb-3">{publisher}</p>
                        <p className="mb-3">{yearOfPublishing}</p>
                        <p className="mb-3">{rating}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="btn bg-transparent text-white border-amber-400 hover:bg-amber-400/20 relative group transition-all duration-300"
                    onClick={()=> handleOnClick(id)}
                    >
                       Mark as Read
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-400 group-hover:w-full group-hover:opacity-100 opacity-0 transition-all duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1 animate-sparkle" />
                        </div>
                    </button>
                    <button 
                        onClick={()=> handleOnWish(id)}
                        className="btn bg-indigo-500 text-white border-none hover:bg-indigo-600 relative group transition-all duration-300">
                        Add to Wishlist
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-400 group-hover:w-full group-hover:opacity-100 opacity-0 transition-all duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-1 h-1 bg-white rounded-full absolute bottom-1 right-1 animate-sparkle" />
                        </div>
                    </button>
                    <button 
                        onClick={() => handleOffWish(id)}
                        className="btn bg-indigo-500 text-white border-none hover:bg-indigo-600 relative group transition-all duration-300">
                        Remove from Wishlist
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-400 group-hover:w-full group-hover:opacity-100 opacity-0 transition-all duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-1 h-1 bg-white rounded-full absolute bottom-1 right-1 animate-sparkle" />
                        </div>
                    </button>
                </div>
            </div>

            {/* 🎨 Custom CSS for Animations */}
            <style jsx>{`
                @keyframes slide-in-right {
                    0% { transform: translateX(100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes float-book {
                    0% { transform: translateY(0) rotate(0); opacity: 0.3; }
                    50% { transform: translateY(-2vh) translateX(-10vw) rotate(5deg); opacity: 0.5; }
                    100% { transform: translateY(0) translateX(-20vw) rotate(10deg); opacity: 0.3; }
                }
                @keyframes sparkle {
                    0% { transform: scale(0); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out forwards;
                }
                .animate-float-book {
                    animation: float-book 8s infinite ease-in-out;
                    animation-delay: ${Math.random() * 3}s;
                }
                .animate-sparkle {
                    animation: sparkle 0.5s ease-out infinite;
                }
            `}</style>
        </div>
    );
};

export default BookDetails;