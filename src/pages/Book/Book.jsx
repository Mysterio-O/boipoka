import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ bookData }) => {
    const { bookName, bookId, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookData;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-gradient-to-br from-indigo-900/80 to-purple-900/80 w-96 shadow-lg p-6 mb-6 relative overflow-hidden animate-slide-in-left">
                {/* 📖 Animated Book Element */}
                <div className="absolute w-6 h-6 bg-[url('https://img.icons8.com/ios-filled/50/ffffff/book.png')] bg-cover opacity-30 animate-float-book top-2 left-10" />

                <figure className="px-24 py-8 bg-indigo-800/20 rounded-2xl hover:bg-indigo-800/40 group relative transition-all duration-500">
                    <img
                        className="max-h-40 lg:opacity-40 group-hover:opacity-100 transform ease-in-out duration-500"
                        src={image}
                        alt={bookName}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                </figure>
                <div className="card-body text-white">
                    <div className="flex gap-6">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-indigo-800/30 text-amber-400 rounded-full px-4 py-2 border border-amber-400/30 group hover:scale-105 transition-transform duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="card-title font-bold text-2xl text-white tracking-tight">{bookName}</h2>
                    <p className="text-gray-200">By: {author}</p>
                    <p className="text-gray-200">Category: {category}</p>
                    <p className="text-gray-200">Read: {totalPages} pages</p>
                    <div className="card-actions justify-between">
                        <p className="text-gray-200">Ratings</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-center font-semibold text-white">{rating}</p>
                            <Star size={18} className="fill-amber-400 stroke-amber-400" />
                        </div>
                    </div>
                    <p className="text-gray-200">Published By {publisher} on {yearOfPublishing}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;