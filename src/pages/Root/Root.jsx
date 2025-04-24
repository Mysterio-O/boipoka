import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Book_Vibe | Home</title>
            </Helmet>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;