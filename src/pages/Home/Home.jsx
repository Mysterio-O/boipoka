import React, { useRef } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    const booksRef = useRef(null); // Ref to scroll to

    const handleScrollToBooks = () => {
        booksRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <Banner onViewListClick={handleScrollToBooks} />
            <div>
                <Books ref={booksRef} id='books-section' data={data} />
            </div>
        </div>
    );
};

export default Home;