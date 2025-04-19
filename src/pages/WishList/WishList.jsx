import React from 'react';
import Book from '../Book/Book';

const WishList = ({wishList}) => {
    // console.log(wishList)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                wishList.map(list => <Book key={list.bookId} bookData={list}></Book>)
            }
        </div>
    );
};

export default WishList;