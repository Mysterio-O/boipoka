import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishedBooks } from '../../utilities/utility';
import Book from '../Book/Book';
import WishList from '../WishList/WishList';
// import { getStoredBook } from '../../utilities/utility';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBookData = useLoaderData();
    console.log(allBookData);

    useEffect(() => {
        const storedBookData = getStoredBook();
        console.log(storedBookData);
        const myList = allBookData.filter((book) => storedBookData.includes(book.bookId))
        console.log(myList);
        setReadList(myList)
    }, []);
    useEffect(() => {
        const wishedBooksFromStorage = getWishedBooks();
        console.log(wishedBooksFromStorage)
        const myWishList = allBookData.filter((book) => wishedBooksFromStorage.includes(book.bookId));
        setWishList(myWishList);
    }, [])

    return (
        <div className='mb-10 px-2 md:px-0 bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_50%,#4c1d95_100%)] rounded-2xl'>
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
            <Tabs>
                <div className='mx-4 pt-4'>
                    <TabList>
                        <Tab style={{ backgroundColor: '#312c85', color: '#bbb', fontWeight: 'bold' }}>Read_List</Tab>
                        <Tab style={{ backgroundColor: '#312c85', color: '#bbb', fontWeight: 'bold' }}>Wish_List</Tab>
                    </TabList>
                    <div>
                        <TabPanel>
                            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                {
                                    readList.map((list, index) => <Book key={index} bookData={list}></Book>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </div>
                <div className='mx-4'>
                    <TabPanel>
                        <WishList wishList={wishList}></WishList>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ReadList;