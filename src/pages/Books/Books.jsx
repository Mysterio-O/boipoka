// Books.jsx
import React, { forwardRef } from 'react';
import Book from '../Book/Book';

const Books = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className='mb-10'>
            <h1 className='text-3xl text-center font-semibold'>Books: {data.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((bookData, index) => <Book key={index} bookData={bookData} />)
                }
            </div>
        </div>
    );
});

export default Books;
