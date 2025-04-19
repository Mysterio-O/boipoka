import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;